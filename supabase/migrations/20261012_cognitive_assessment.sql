-- Cognitive assessment tables for Cura Interior
-- Results do not affect discovery_level / emotional avatar maturity.

create table if not exists public.cura_cognitive_assessments (
  id text primary key,
  title text not null,
  version text not null,
  question_count integer not null default 30,
  created_at timestamptz not null default now()
);

insert into public.cura_cognitive_assessments (id, title, version, question_count)
values ('cognitive-main-v1', 'Avaliação principal de habilidades cognitivas', '1.0.0', 30)
on conflict (id) do nothing;

create table if not exists public.cura_cognitive_questions (
  id text primary key,
  category text not null,
  difficulty text not null,
  prompt text not null,
  interaction_type text not null default 'single_choice',
  options jsonb not null,
  correct_option_id text not null,
  explanation text not null,
  suggested_seconds integer not null default 60,
  skill_tags text[] not null default '{}',
  version text not null default '1.0.0',
  media jsonb,
  created_at timestamptz not null default now()
);

alter table public.cura_cognitive_questions enable row level security;

-- No direct client reads of question keys; grading happens server-side.
create policy "cognitive_questions_no_client_select"
  on public.cura_cognitive_questions
  for select
  to authenticated
  using (false);

create table if not exists public.cura_cognitive_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  assessment_id text not null references public.cura_cognitive_assessments (id),
  assessment_version text not null,
  question_ids text[] not null,
  status text not null check (status in ('in_progress', 'completed', 'abandoned')),
  current_index integer not null default 0,
  client_key text,
  started_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.cura_cognitive_sessions enable row level security;

create policy "cognitive_sessions_select_own"
  on public.cura_cognitive_sessions for select
  to authenticated
  using (auth.uid() = user_id);

create policy "cognitive_sessions_insert_own"
  on public.cura_cognitive_sessions for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "cognitive_sessions_update_own"
  on public.cura_cognitive_sessions for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.cura_cognitive_answers (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.cura_cognitive_sessions (id) on delete cascade,
  user_id uuid references auth.users (id) on delete cascade,
  question_id text not null,
  selected_option_id text,
  time_spent_ms integer not null default 0,
  answered_at timestamptz not null default now()
);

alter table public.cura_cognitive_answers enable row level security;

create policy "cognitive_answers_select_own"
  on public.cura_cognitive_answers for select
  to authenticated
  using (auth.uid() = user_id);

create policy "cognitive_answers_insert_own"
  on public.cura_cognitive_answers for insert
  to authenticated
  with check (auth.uid() = user_id);

create table if not exists public.cura_cognitive_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  session_id text not null,
  assessment_id text not null,
  completed_at timestamptz not null,
  correct_count integer not null,
  answered_count integer not null,
  total_questions integer not null,
  scores_by_category jsonb not null default '[]'::jsonb,
  insights jsonb not null default '[]'::jsonb,
  full_result jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists cura_cognitive_results_user_idx
  on public.cura_cognitive_results (user_id, completed_at desc);

alter table public.cura_cognitive_results enable row level security;

create policy "cognitive_results_select_own"
  on public.cura_cognitive_results for select
  to authenticated
  using (auth.uid() = user_id);

create policy "cognitive_results_insert_own"
  on public.cura_cognitive_results for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "cognitive_results_delete_own"
  on public.cura_cognitive_results for delete
  to authenticated
  using (auth.uid() = user_id);
