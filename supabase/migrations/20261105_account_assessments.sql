-- Tentativas de avaliação da conta.
-- Uma linha por conclusão. O resultado atual é o maior completed_at
-- do par user_id + questionnaire_slug. O progresso conta slugs distintos.

create table if not exists public.cura_questionnaire_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  questionnaire_slug text not null,
  questionnaire_version text not null default '1.0.0',
  completed_at timestamptz not null,
  raw_answers jsonb not null default '[]'::jsonb,
  normalized_scores jsonb not null default '{}'::jsonb,
  primary_result jsonb not null default '{}'::jsonb,
  secondary_results jsonb not null default '[]'::jsonb,
  full_result jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists cura_questionnaire_results_user_slug_completed_idx
  on public.cura_questionnaire_results (user_id, questionnaire_slug, completed_at desc);

alter table public.cura_questionnaire_results enable row level security;

drop policy if exists "questionnaire_results_select_own" on public.cura_questionnaire_results;
drop policy if exists "questionnaire_results_insert_own" on public.cura_questionnaire_results;

create policy "questionnaire_results_select_own"
  on public.cura_questionnaire_results for select
  to authenticated
  using (auth.uid() = user_id);

create policy "questionnaire_results_insert_own"
  on public.cura_questionnaire_results for insert
  to authenticated
  with check (auth.uid() = user_id);

create table if not exists public.cura_user_progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  completed_questionnaires text[] not null default '{}',
  discovery_level integer not null default 0,
  next_recommended_questionnaire text,
  last_visited_at timestamptz,
  updated_at timestamptz not null default now()
);

alter table public.cura_user_progress enable row level security;

drop policy if exists "user_progress_select_own" on public.cura_user_progress;
drop policy if exists "user_progress_insert_own" on public.cura_user_progress;
drop policy if exists "user_progress_update_own" on public.cura_user_progress;

create policy "user_progress_select_own"
  on public.cura_user_progress for select
  to authenticated
  using (auth.uid() = user_id);

create policy "user_progress_insert_own"
  on public.cura_user_progress for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "user_progress_update_own"
  on public.cura_user_progress for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.cura_profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  avatar_type text not null default 'abstract',
  discovery_level integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.cura_profiles enable row level security;

drop policy if exists "profiles_select_own" on public.cura_profiles;
drop policy if exists "profiles_insert_own" on public.cura_profiles;
drop policy if exists "profiles_update_own" on public.cura_profiles;

create policy "profiles_select_own"
  on public.cura_profiles for select
  to authenticated
  using (auth.uid() = user_id);

create policy "profiles_insert_own"
  on public.cura_profiles for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "profiles_update_own"
  on public.cura_profiles for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.cura_user_badges (
  user_id uuid not null references auth.users (id) on delete cascade,
  badge_slug text not null,
  unlocked_at timestamptz not null default now(),
  primary key (user_id, badge_slug)
);

alter table public.cura_user_badges enable row level security;

drop policy if exists "user_badges_select_own" on public.cura_user_badges;
drop policy if exists "user_badges_insert_own" on public.cura_user_badges;
drop policy if exists "user_badges_update_own" on public.cura_user_badges;

create policy "user_badges_select_own"
  on public.cura_user_badges for select
  to authenticated
  using (auth.uid() = user_id);

create policy "user_badges_insert_own"
  on public.cura_user_badges for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "user_badges_update_own"
  on public.cura_user_badges for update
  to authenticated
  using (auth.uid() = user_id)
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

drop policy if exists "cognitive_results_select_own" on public.cura_cognitive_results;
drop policy if exists "cognitive_results_insert_own" on public.cura_cognitive_results;
drop policy if exists "cognitive_results_delete_own" on public.cura_cognitive_results;

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

grant select, insert on public.cura_questionnaire_results to authenticated;
grant select, insert, update on public.cura_user_progress to authenticated;
grant select, insert, update on public.cura_profiles to authenticated;
grant select, insert, update on public.cura_user_badges to authenticated;
grant select, insert, delete on public.cura_cognitive_results to authenticated;

comment on table public.cura_questionnaire_results is
  'Uma linha por tentativa. Resultado atual: maior completed_at por user_id e questionnaire_slug. Progresso: slugs distintos.';
