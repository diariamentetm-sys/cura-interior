import type { Archetype, ArchetypeCode } from "@/types/archetypes";

export const ARCHETYPE_ORDER: ArchetypeCode[] = [
  "IN",
  "EX",
  "SA",
  "HE",
  "RE",
  "MA",
  "PC",
  "AM",
  "BO",
  "CU",
  "CR",
  "GO",
];

export const archetypes: Record<ArchetypeCode, Archetype> = {
  IN: {
    code: "IN",
    name: "Inocente",
    title: "O Inocente",
    keywords: ["confiança", "simplicidade", "esperança"],
    motivation: "Viver com leveza, fé e uma sensação de pertencimento seguro.",
    fear: "Perder a inocência, ser ferido ou confrontado por um mundo hostil.",
    description:
      "O Inocente busca pureza, otimismo e um retorno ao essencial. Confia na possibilidade de que as coisas possam dar certo.",
    light: "Esperança genuína, presença simples e capacidade de renovar a confiança.",
    shadow: "Negação da complexidade e dificuldade em lidar com a ambiguidade da vida.",
    resultIntro:
      "Existe em você uma busca por clareza, paz e uma forma mais simples de habitar o mundo. A confiança e o desejo de harmonia aparecem como forças importantes na maneira como você enfrenta mudanças e escolhe caminhos.",
    complementaryNote:
      "Parte de você ainda busca um lugar de segurança interior e confiança no fluxo da vida.",
  },
  EX: {
    code: "EX",
    name: "Explorador",
    title: "O Explorador",
    keywords: ["liberdade", "autonomia", "descoberta"],
    motivation: "Descobrir o mundo e a si mesmo sem se prender ao caminho já traçado.",
    fear: "Ficar preso, ser controlado ou viver uma vida que não lhe pertence.",
    description:
      "O Explorador valoriza movimento, autonomia e a experiência direta. Prefere descobrir a viver apenas dentro do conhecido.",
    light: "Coragem para seguir o próprio caminho e abertura ao novo.",
    shadow: "Inquietação crônica e dificuldade de compromisso ou enraizamento.",
    resultIntro:
      "Existe em você uma forte necessidade de descobrir o que existe além do caminho conhecido. Autonomia, movimento e liberdade aparecem como elementos importantes na forma como você toma decisões e constrói sua relação com o mundo.",
    complementaryNote:
      "Sua curiosidade também se expressa como desejo de autonomia e de experimentar novos caminhos.",
  },
  SA: {
    code: "SA",
    name: "Sábio",
    title: "O Sábio",
    keywords: ["compreensão", "verdade", "perspicácia"],
    motivation: "Compreender a vida, a si mesmo e o sentido por trás das experiências.",
    fear: "Ser enganado, viver na ignorância ou tomar decisões sem clareza.",
    description:
      "O Sábio busca conhecimento, discernimento e uma visão mais ampla. Observa antes de agir e valoriza a verdade.",
    light: "Clareza mental, profundidade e capacidade de iluminar situações complexas.",
    shadow: "Excesso de análise e distanciamento da vivência emocional.",
    resultIntro:
      "Há em você um impulso profundo de compreender. Antes de reagir, você tende a observar, questionar e buscar o sentido do que está acontecendo. A verdade e a clareza ocupam um lugar central na sua forma de viver.",
    complementaryNote:
      "Sua curiosidade não está apenas em experimentar, mas em compreender.",
  },
  HE: {
    code: "HE",
    name: "Herói",
    title: "O Herói",
    keywords: ["coragem", "superação", "determinação"],
    motivation: "Enfrentar desafios e provar a própria capacidade diante do que parece difícil.",
    fear: "Fraqueza, covardia ou fracasso quando realmente importa.",
    description:
      "O Herói se move pela coragem e pela vontade de superar obstáculos. Enxerga a vida como um campo de provas e crescimento.",
    light: "Resiliência, ação e capacidade de inspirar força nos outros.",
    shadow: "Excesso de esforço, rigidez e dificuldade em reconhecer vulnerabilidade.",
    resultIntro:
      "Há em você uma disposição para enfrentar o que é difícil. A superação, a coragem e o senso de responsabilidade diante dos desafios aparecem com força na forma como você se posiciona no mundo.",
    complementaryNote:
      "Parte de você responde aos desafios com determinação e vontade de atravessar o que parece difícil.",
  },
  RE: {
    code: "RE",
    name: "Rebelde",
    title: "O Rebelde",
    keywords: ["ruptura", "liberdade", "transformação"],
    motivation: "Quebrar o que limita, questionar o estabelecido e abrir espaço para o novo.",
    fear: "Ser oprimido, engolido pelo sistema ou perder a própria voz.",
    description:
      "O Rebelde desafia normas e estruturas que parecem injustas ou vazias. Busca autenticidade por meio da ruptura.",
    light: "Coragem para confrontar o que não serve e catalisar mudanças.",
    shadow: "Oposição por oposição e dificuldade de construir após destruir.",
    resultIntro:
      "Existe em você uma força que questiona o que parece dado. Quando algo limita ou sufoca, surge o impulso de confrontar, romper e abrir espaço para outra possibilidade.",
    complementaryNote:
      "Há também em você um impulso de questionar o que está estabelecido quando isso restringe a vida.",
  },
  MA: {
    code: "MA",
    name: "Mago",
    title: "O Mago",
    keywords: ["transformação", "visão", "percepção"],
    motivation: "Transformar a realidade a partir de uma visão mais profunda das coisas.",
    fear: "Consequências negativas do poder, ou viver sem sentido e magia interior.",
    description:
      "O Mago enxerga padrões invisíveis e busca transformar experiências em consciência. Age pela percepção e pela mudança de perspectiva.",
    light: "Intuição, capacidade de reframing e poder de transformação simbólica.",
    shadow: "Manipulação sutil ou fuga para o mundo das ideias sem encarnar a mudança.",
    resultIntro:
      "Há em você uma sensibilidade para perceber o que ainda não está evidente. Mudança de perspectiva, transformação e a busca por um sentido mais profundo atravessam a forma como você interpreta a vida.",
    complementaryNote:
      "Você também tende a buscar o sentido oculto e a transformação por trás das experiências.",
  },
  PC: {
    code: "PC",
    name: "Pessoa Comum",
    title: "A Pessoa Comum",
    keywords: ["pertença", "simplicidade", "empatia"],
    motivation: "Pertencer, viver com autenticidade cotidiana e se conectar sem artifícios.",
    fear: "Ser excluído, parecer insuficiente ou se destacar de forma indesejada.",
    description:
      "A Pessoa Comum valoriza a humanidade compartilhada, a simplicidade e o pertencimento. Encontra sentido no ordinário.",
    light: "Empatia, realismo e capacidade de se conectar sem hierarquias.",
    shadow: "Conformismo e medo de afirmar a própria singularidade.",
    resultIntro:
      "Há em você uma valorização do que é humano, próximo e compartilhado. A busca por pertencimento e por uma vida sem artifícios aparece como um fio importante na sua maneira de se relacionar.",
    complementaryNote:
      "Parte de você busca pertencimento e uma forma simples e genuína de estar com os outros.",
  },
  AM: {
    code: "AM",
    name: "Amante",
    title: "O Amante",
    keywords: ["conexão", "intimidade", "paixão"],
    motivation: "Viver relações profundas e sentir a vida com intensidade afetiva.",
    fear: "Ser rejeitado, abandonado ou viver sem conexão verdadeira.",
    description:
      "O Amante busca intimidade, beleza e vínculo. Relaciona-se com o mundo pela capacidade de amar e se entregar.",
    light: "Presença afetiva, sensibilidade e profundidade relacional.",
    shadow: "Dependência emocional e perda de si no desejo de conexão.",
    resultIntro:
      "Existe em você uma forte orientação para o vínculo. Intimidade, presença e a qualidade das relações ocupam um lugar central na forma como você sente a vida e escolhe o que importa.",
    complementaryNote:
      "Há também em você uma necessidade de conexão profunda e de relações com sentido.",
  },
  BO: {
    code: "BO",
    name: "Bobo da Corte",
    title: "O Bobo da Corte",
    keywords: ["leveza", "humor", "espontaneidade"],
    motivation: "Viver o presente com humor, espontaneidade e prazer de existir.",
    fear: "Ser levado demais a sério sem alegria, ou tornar-se irrelevante e vazio.",
    description:
      "O Bobo da Corte traz leveza, jogo e a capacidade de quebrar tensões. Enxerga a vida também como espaço de riso e liberdade.",
    light: "Espontaneidade, humor e capacidade de renovar o clima emocional.",
    shadow: "Fuga pela piada e dificuldade de habitar a seriedade necessária.",
    resultIntro:
      "Há em você uma força que busca leveza. O humor, a espontaneidade e a capacidade de deslocar a seriedade aparecem como modos importantes de atravessar a vida e se relacionar com os outros.",
    complementaryNote:
      "Parte de você sabe trazer leveza e humor quando a vida fica excessivamente densa.",
  },
  CU: {
    code: "CU",
    name: "Cuidador",
    title: "O Cuidador",
    keywords: ["cuidado", "generosidade", "proteção"],
    motivation: "Cuidar, proteger e contribuir para o bem-estar de quem ama.",
    fear: "Ser egoísta, ou ver sofrer quem precisa de proteção.",
    description:
      "O Cuidador se move pela generosidade e pela responsabilidade afetiva. Encontra sentido em sustentar e acolher.",
    light: "Empatia prática, presença protetora e capacidade de nutrir.",
    shadow: "Autossacrifício e dificuldade de cuidar de si.",
    resultIntro:
      "Existe em você uma disposição profunda para acolher e sustentar. O cuidado com o outro e a sensibilidade ao sofrimento aparecem como forças centrais na forma como você age e se posiciona nas relações.",
    complementaryNote:
      "Há também em você uma tendência generosa de cuidar e proteger quem está próximo.",
  },
  CR: {
    code: "CR",
    name: "Criador",
    title: "O Criador",
    keywords: ["expressão", "inovação", "autenticidade"],
    motivation: "Dar forma ao que ainda não existe e deixar a própria marca no mundo.",
    fear: "Mediocridade, inautenticidade ou viver sem expressão própria.",
    description:
      "O Criador busca originalidade e a capacidade de transformar ideias em forma. Valoriza a expressão genuína de si.",
    light: "Imaginação, autenticidade e potência de criar o novo.",
    shadow: "Perfeccionismo e frustração quando a criação não alcança o ideal.",
    resultIntro:
      "Há em você uma necessidade de dar forma própria às experiências e ideias que atravessam sua vida. Criar, expressar e deixar algo seu no mundo aparecem como impulsos importantes.",
    complementaryNote:
      "Existe também uma necessidade de dar forma própria às experiências e ideias que atravessam sua vida.",
  },
  GO: {
    code: "GO",
    name: "Governante",
    title: "O Governante",
    keywords: ["ordem", "responsabilidade", "estrutura"],
    motivation: "Criar estabilidade, organização e um espaço seguro para si e para os outros.",
    fear: "Caos, perda de controle ou irrelevância diante do desordem.",
    description:
      "O Governante busca estrutura, clareza e responsabilidade. Prefere organizar a realidade a ser arrastado por ela.",
    light: "Liderança, visão de conjunto e capacidade de sustentar sistemas.",
    shadow: "Controle excessivo e dificuldade de soltar o que não pode ser dominado.",
    resultIntro:
      "Existe em você uma tendência a organizar, assumir responsabilidade e buscar estabilidade. O desejo de estrutura e de um espaço seguro atravessa a maneira como você enfrenta problemas e toma decisões.",
    complementaryNote:
      "Parte de você busca ordem, responsabilidade e a capacidade de sustentar o que importa.",
  },
};

export function getArchetype(code: ArchetypeCode): Archetype {
  return archetypes[code];
}

export const archetypeList: Archetype[] = ARCHETYPE_ORDER.map(
  (code) => archetypes[code],
);
