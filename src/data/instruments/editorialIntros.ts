import type { InstrumentSlug } from "@/data/instruments";

export type InstrumentEditorial = {
  themeParagraphs: string[];
  methodologyParagraphs: string[];
  guidelines: string[];
  responseFormat: string;
  nature: string;
  canPauseNote: string;
};

const selfReportGuidelines = [
  "Responda pensando em como você costuma agir ou sentir no dia a dia — não em como gostaria de ser visto(a).",
  "Evite escolher alternativas só porque parecem “certas” ou socialmente bem vistas.",
  "Não tente adivinhar qual resposta produzirá um resultado específico.",
  "Vá com atenção, mas também com espontaneidade: a primeira impressão honesta costuma ser a mais útil.",
  "Quando possível, pense em situações reais que você já viveu.",
];

export const editorialIntros: Partial<Record<InstrumentSlug, InstrumentEditorial>> =
  {
    "big-five": {
      themeParagraphs: [
        "Por que algumas pessoas se animam com lugares novos, enquanto outras encontram satisfação no que já conhecem? Por que há quem organize tudo com antecedência e quem prefira descobrir o caminho enquanto caminha?",
        "A personalidade aparece nessas pequenas escolhas — na forma como convivemos, decidimos e reagimos ao mundo. Este questionário oferece um mapa descritivo dessas tendências, sem pretender dizer quem você “é de verdade”.",
      ],
      methodologyParagraphs: [
        "O modelo Big Five (Cinco Grandes Fatores) é uma das abordagens mais estudadas na psicologia da personalidade. Em vez de encaixar você em um único tipo, observa como suas respostas se distribuem em cinco dimensões amplas: extroversão, amabilidade, conscienciosidade, estabilidade emocional e abertura à experiência.",
        "Aqui usamos os IPIP Big-Five Markers (50 itens), material de domínio público associado ao trabalho de Goldberg e ao International Personality Item Pool. A pontuação de cada dimensão é relativa a esta sessão: compara suas próprias respostas entre si, não a uma norma clínica.",
        "Limitações: é um autorrelato breve, sensível ao momento e ao contexto. Não substitui inventários clínicos comerciais (como o NEO-PI-R) nem avaliação profissional.",
      ],
      guidelines: selfReportGuidelines,
      responseFormat: "Escala de 1 a 5 (discordo totalmente → concordo totalmente).",
      nature:
        "Instrumento de domínio público com ampla base de pesquisa; interpretação exploratória nesta plataforma.",
      canPauseNote:
        "Você pode interromper e retomar no mesmo dispositivo enquanto o progresso estiver salvo localmente.",
    },
    "tipologia-16": {
      themeParagraphs: [
        "Há quem pense em voz alta e quem precise de silêncio para organizar as ideias. Há quem confie primeiro no concreto e quem se anime com possibilidades ainda invisíveis.",
        "Essas preferências não são bons ou maus hábitos: são modos diferentes de prestar atenção, decidir e organizar a vida. Este questionário esboça um perfil tipológico exploratório a partir dessas inclinações.",
      ],
      methodologyParagraphs: [
        "A estrutura inspira-se em tipologias junguianas abertas — no espírito de escalas como a OEJTS — organizadas em quatro dicotomias: extroversão/introversão, sensação/intuição, pensamento/sentimento e julgamento/percepção.",
        "Ao final, as preferências relativas geram um código de quatro letras. Esse código resume o lado em que você se inclinou com mais força nesta sessão.",
        "Limitações importantes: isto não é o MBTI® oficial, nem o teste comercial 16Personalities. Não há tipificação clínica nem validade diagnóstica. Preferências podem variar com humor, contexto e fase da vida.",
      ],
      guidelines: selfReportGuidelines,
      responseFormat: "Escala de 1 a 5 (discordo totalmente → concordo totalmente).",
      nature:
        "Instrumento exploratório inspirado em tipologias junguianas abertas — não é MBTI®.",
      canPauseNote:
        "Você pode interromper e retomar no mesmo dispositivo enquanto o progresso estiver salvo localmente.",
    },
    "inteligencia-emocional": {
      themeParagraphs: [
        "Perceber o que se sente, regular o próprio estado e ler o clima emocional de uma conversa são habilidades que atravessam trabalho, amizade e decisões cotidianas.",
        "Este questionário convida você a observar como costuma lidar com emoções — as suas e as das pessoas ao redor — sem transformar o tema em um veredito sobre “ser emocionalmente inteligente ou não”.",
      ],
      methodologyParagraphs: [
        "A base é a SSEIT (Schutte Self-Report Emotional Intelligence Test; Schutte et al., 1998), um inventário de autorrelato que descreve facetas como percepção emocional, regulação das próprias emoções, influência emocional nas relações e uso da emoção no pensamento.",
        "As pontuações mostram como você se descreveu nesta sessão. São relativas entre facetas e não estabelecem um diagnóstico de competência emocional.",
        "Limitações: autorrelato pode ser influenciado por autocrítica, desejo de agradar ou humor do dia. Não substitui avaliação clínica nem medidas de desempenho emocional.",
      ],
      guidelines: selfReportGuidelines,
      responseFormat: "Escala de 1 a 5 (discordo totalmente → concordo totalmente).",
      nature:
        "Baseado na SSEIT (Schutte et al., 1998); uso descritivo e exploratório nesta plataforma.",
      canPauseNote:
        "Você pode interromper e retomar no mesmo dispositivo enquanto o progresso estiver salvo localmente.",
    },
    "estilos-apego": {
      themeParagraphs: [
        "Proximidade pode aquecer — e também inquietar. Há quem peça muita garantia de afeto e quem se sinta mais seguro mantendo distância. Muitas vezes, os dois movimentos convivem na mesma pessoa, em momentos diferentes.",
        "Este questionário observa padrões de ansiedade e evitação em relacionamentos próximos: não para rotular seu caráter, mas para nomear tendências que você talvez já reconheça nas suas formas de se vincular.",
      ],
      methodologyParagraphs: [
        "A estrutura segue a lógica do ECR-S (Experiences in Close Relationships — Short Form), que resume o apego adulto em duas dimensões: ansiedade (medo de rejeição ou abandono) e evitação (desconforto com dependência e intimidade emocional).",
        "A combinação dessas pontuações sugere um perfil descritivo desta sessão — por exemplo, mais seguro, mais ansioso, mais evitante ou uma mistura das duas tensões.",
        "Limitações: resultado exploratório e educacional. Não diagnostica transtornos, não substitui psicoterapia e não descreve todos os vínculos da sua vida com a mesma precisão.",
      ],
      guidelines: [
        ...selfReportGuidelines,
        "Pense principalmente em vínculos próximos (parceiro/a, amizades íntimas ou figuras importantes), não em relações superficiais.",
      ],
      responseFormat: "Escala de 1 a 5 (discordo totalmente → concordo totalmente).",
      nature:
        "Estrutura alinhada ao ECR-S; interpretação exploratória — sem valor diagnóstico clínico.",
      canPauseNote:
        "Você pode interromper e retomar no mesmo dispositivo enquanto o progresso estiver salvo localmente.",
    },
    autoestima: {
      themeParagraphs: [
        "A forma como nos avaliamos molda pedidos de desculpa, ambições, crítica interna e a coragem de ocupar espaço. Autoestima não é arrogância nem positividade forçada: é o peso que damos ao próprio valor.",
        "Este questionário oferece um retrato breve de como você se enxerga neste momento — útil para observação, não para um veredito definitivo sobre quem você é.",
      ],
      methodologyParagraphs: [
        "Usamos a Escala de Autoestima de Rosenberg (RSES), um instrumento clássico de 10 itens amplamente citado na pesquisa psicológica. A escala produz uma pontuação global de autoestima autorrelatada.",
        "Nesta plataforma, as respostas usam uma escala de 1 a 5 por consistência de interface; a interpretação descreve faixas relativas desta sessão.",
        "Limitações: um escore único não captura nuances de contexto (trabalho, família, corpo, desempenho). Oscilações são comuns. Não constitui diagnóstico de depressão ou outro quadro clínico.",
      ],
      guidelines: selfReportGuidelines,
      responseFormat: "Escala de 1 a 5 (discordo totalmente → concordo totalmente).",
      nature:
        "Rosenberg Self-Esteem Scale (RSES); uso livre com citação — interpretação descritiva nesta sessão.",
      canPauseNote:
        "Você pode interromper e retomar no mesmo dispositivo enquanto o progresso estiver salvo localmente.",
    },
    "vocacional-riasec": {
      themeParagraphs: [
        "Interesse profissional raramente é um único chamado. Costuma ser uma combinação: o gosto por construir com as mãos, investigar problemas, criar, cuidar, liderar ou organizar sistemas.",
        "Este questionário ajuda a mapear preferências de atividade — o que atrai sua atenção — em vez de decretar a “carreira certa”.",
      ],
      methodologyParagraphs: [
        "O modelo RIASEC, proposto por John Holland, organiza interesses em seis áreas: Realista, Investigativo, Artístico, Social, Empreendedor e Convencional. A combinação das mais fortes forma um código de interesses.",
        "Os itens seguem o espírito do O*NET Interest Profiler (domínio público), sem ser o Self-Directed Search comercial.",
        "Limitações: interesses não são o mesmo que aptidão, valores ou oportunidades de mercado. O resultado desta sessão é um ponto de partida para reflexão, não um plano de carreira fechado.",
      ],
      guidelines: [
        "Responda pelo quanto a atividade soaria interessante para você — mesmo que nunca tenha exercido aquela função.",
        "Não escolha só o que parece prestigioso ou “o que dá dinheiro”.",
        "Evite responder pelo que outras pessoas esperam de você.",
        "Se duas opções parecerem próximas, escolha a que mais atrai nesta leitura espontânea.",
      ],
      responseFormat: "Escala de 1 a 5 (pouco interesse → muito interesse).",
      nature:
        "Modelo RIASEC (Holland) com itens no espírito do O*NET Interest Profiler (domínio público).",
      canPauseNote:
        "Você pode interromper e retomar no mesmo dispositivo enquanto o progresso estiver salvo localmente.",
    },
  };
