import type { InstrumentSlug } from "@/data/instruments";

export type AssessmentReference = {
  author: string;
  work: string;
  year: string;
  href?: string;
};

export type AssessmentFoundation = {
  explores: string;
  tradition: string;
  limits: string;
  interpretation: string;
  references: AssessmentReference[];
};

export const assessmentFoundations: Record<InstrumentSlug, AssessmentFoundation> =
  {
    "big-five": {
      explores:
        "Cinco dimensões amplas de personalidade no autorrelato: extroversão, amabilidade, conscienciosidade, neuroticismo e abertura à experiência.",
      tradition:
        "Psicologia dos traços, no modelo dos Cinco Grandes Fatores. Esta versão usa marcadores do International Personality Item Pool (IPIP), não o NEO-PI-R.",
      limits:
        "É um autorrelato desta sessão, não um laudo de personalidade. Não diagnostica transtornos e não fixa um tipo. Os escores descrevem tendências relativas às suas respostas, sem norma clínica apresentada aqui.",
      interpretation:
        "Leia cada dimensão como uma tendência, não como um rótulo. Pontuações intermediárias são comuns. Um único questionário não esgota mudanças de contexto, idade ou estado emocional.",
      references: [
        {
          author: "Goldberg, L. R.",
          work: "The development of markers for the Big-Five factor structure. Psychological Assessment, 4(1), 26–42.",
          year: "1992",
          href: "https://doi.org/10.1037/1040-3590.4.1.26",
        },
        {
          author: "International Personality Item Pool",
          work: "IPIP Big-Five Factor Markers.",
          year: "s.d.",
          href: "https://ipip.ori.org/newBigFive5broadKey.htm",
        },
      ],
    },
    "tipologia-16": {
      explores:
        "Quatro preferências autorrelatadas — energia social, informação, decisão e organização — resumidas num código de quatro letras.",
      tradition:
        "Tipologia de base junguiana. O instrumento usado é a Open Extended Jungian Type Scales (OEJTS), de acesso aberto. Não é o MBTI® nem o questionário comercial 16Personalities.",
      limits:
        "Tipos dicotômicos têm apoio científico limitado como categorias estáveis. Eixos quase empatados não devem ser forçados a uma letra. O código não é diagnóstico, vocação nem essência fixa.",
      interpretation:
        "Use o código como um atalho descritivo desta sessão. Prefira ler a força de cada eixo a tratar as 16 combinações como caixas definitivas.",
      references: [
        {
          author: "Jung, C. G.",
          work: "Psychological types. Princeton University Press. Obra original publicada em 1921.",
          year: "1971",
        },
        {
          author: "Open-Source Psychometrics Project",
          work: "Open Extended Jungian Type Scales (OEJTS).",
          year: "s.d.",
          href: "https://openpsychometrics.org/tests/OEJTS/",
        },
        {
          author: "Pittenger, D. J.",
          work: "Cautionary comments regarding the Myers-Briggs Type Indicator. Consulting Psychology Journal, 57(3), 210–221. Citado como limite da tradição tipológica, não como validação deste questionário.",
          year: "2005",
          href: "https://doi.org/10.1037/1065-9293.57.3.210",
        },
      ],
    },
    "perfil-cognitivo": {
      explores:
        "Desempenho nesta bateria de exercícios de raciocínio abstrato, numérico, espacial, verbal e dedutivo.",
      tradition:
        "Bateria autoral do Cura Interior, inspirada em famílias comuns de tarefas de raciocínio. Não implementa um teste publicado de inteligência nem o modelo CHC como instrumento normatizado.",
      limits:
        "Não é QI, não tem normas clínicas e não estima capacidade cognitiva geral. O resultado vale para estas tarefas, nesta tentativa. Sono, prática e familiaridade com o formato alteram o desempenho.",
      interpretation:
        "Compare dimensões dentro da própria sessão. Acertos e erros estão no gabarito comentado. Não transforme uma dimensão mais baixa em um rótulo permanente.",
      references: [],
    },
    "inteligencia-emocional": {
      explores:
        "Como você se descreve ao perceber emoções, regular o próprio estado, usar emoções e favorecer emoções nos outros.",
      tradition:
        "Autorrelato associado ao modelo de Salovey e Mayer, na Escala de Inteligência Emocional de Schutte (SSEIT). Não é um teste de desempenho emocional.",
      limits:
        "Mede percepção declarada, não a habilidade observada de ler ou regular emoções. Não diagnostica alexitimia, transtornos ou um “QI emocional”.",
      interpretation:
        "Trate os escores como um retrato desta sessão. Uma pontuação alta em percepção não significa que você sempre saiba o que o outro sente.",
      references: [
        {
          author: "Salovey, P., & Mayer, J. D.",
          work: "Emotional intelligence. Imagination, Cognition and Personality, 9(3), 185–211.",
          year: "1990",
          href: "https://doi.org/10.2190/DUGG-P24E-52WK-6CDG",
        },
        {
          author:
            "Schutte, N. S., Malouff, J. M., Hall, L. E., Haggerty, D. J., Cooper, J. T., Golden, C. J., & Dornheim, L.",
          work: "Development and validation of a measure of emotional intelligence. Personality and Individual Differences, 25(2), 167–177.",
          year: "1998",
          href: "https://doi.org/10.1016/S0191-8869(98)00001-4",
        },
      ],
    },
    "estilos-apego": {
      explores:
        "Ansiedade e evitação nos relacionamentos próximos, em duas dimensões contínuas.",
      tradition:
        "Teoria do apego adulto. O questionário segue a forma curta da Experiences in Close Relationships Scale (ECR-S), derivada do modelo de ansiedade e evitação.",
      limits:
        "Não reconstitui a infância, não diagnostica um estilo único para todas as relações e não prova trauma. As dimensões podem coexistir.",
      interpretation:
        "Leia ansiedade e evitação separadamente. O texto descreve tendência desta tentativa, não um destino relacional.",
      references: [
        {
          author: "Bowlby, J.",
          work: "Attachment and loss: Vol. 1. Attachment. Basic Books.",
          year: "1969",
        },
        {
          author: "Brennan, K. A., Clark, C. L., & Shaver, P. R.",
          work: "Self-report measurement of adult attachment. In J. A. Simpson & W. S. Rholes (Eds.), Attachment theory and close relationships (pp. 46–76). Guilford Press.",
          year: "1998",
        },
        {
          author: "Wei, M., Russell, D. W., Mallinckrodt, B., & Vogel, D. L.",
          work: "The Experiences in Close Relationship Scale (ECR)-Short Form: Reliability, validity, and factor structure. Journal of Personality Assessment, 88(2), 187–204.",
          year: "2007",
          href: "https://doi.org/10.1080/00223890701268041",
        },
      ],
    },
    autoestima: {
      explores:
        "A avaliação global que você faz de si nesta sessão, num escore único.",
      tradition:
        "Escala de Autoestima de Rosenberg (RSES), um autorrelato unidimensional de valor pessoal. Não é um inventário clínico de autoimagem por domínios.",
      limits:
        "Não diagnostica depressão nem separa autoestima no trabalho, no corpo ou nos vínculos. O escore oscila com estresse, sono e rejeição recente. Esta aplicação não apresenta normas brasileiras próprias.",
      interpretation:
        "Use o resultado como um espelho momentâneo do tom com que você se descreveu. Não existe um número ideal.",
      references: [
        {
          author: "Rosenberg, M.",
          work: "Society and the adolescent self-image. Princeton University Press.",
          year: "1965",
        },
      ],
    },
    "vocacional-riasec": {
      explores:
        "Interesses profissionais em seis famílias: Realista, Investigativo, Artístico, Social, Empreendedor e Convencional.",
      tradition:
        "Teoria dos interesses vocacionais de Holland (RIASEC), com itens de domínio público do O*NET Interest Profiler.",
      limits:
        "Interesse não é aptidão, valor nem oportunidade de mercado. O código não indica a profissão ideal nem a adequação a uma vaga.",
      interpretation:
        "Leia as letras mais altas como temas que atraem agora. Combinações híbridas são esperadas. Áreas mais baixas indicam o que tende a drenar interesse, não incapacidade.",
      references: [
        {
          author: "Holland, J. L.",
          work: "Making vocational choices: A theory of vocational personalities and work environments (3rd ed.). Psychological Assessment Resources.",
          year: "1997",
        },
        {
          author: "National Center for O*NET Development",
          work: "O*NET Interest Profiler.",
          year: "s.d.",
          href: "https://www.onetcenter.org/IP.html",
        },
      ],
    },
  };
