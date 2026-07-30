/**
 * Data Repository for Kitty Owen Knowledge Hub
 * Contains structured articles, academic publications, open resources, and metadata.
 */

const BLOG_POSTS = [
  {
    id: "comprender-para-decidir-fundamentos",
    title: "Comprender antes de actuar: La arquitectura de las decisiones con impacto",
    category: "Comprender para decidir",
    date: "24 de Julio, 2026",
    readTime: "7 min de lectura",
    excerpt: "Las decisiones que transforman no nacen de acumular más volumen de datos, sino de comprender la estructura profunda de la realidad sobre la cual se interviene.",
    coverGradient: "linear-gradient(135deg, #1B263B 0%, #415A77 100%)",
    icon: "fa-brain",
    contentHTML: `
      <p class="lead">En un entorno caracterizado por la sobreabundancia de datos y la urgencia de respuestas inmediatas, el verdadero activo estratégico de personas y organizaciones no es el acceso a la información, sino la capacidad de comprenderla.</p>
      
      <h3>El dilema de la acumulación informativa</h3>
      <p>Durante años se creyó que disponer de más tableros de control, más reportes y más métricas garantizaba mejores decisiones. Sin embargo, la evidencia demuestra que la acumulación irreflexiva genera parálisis por análisis o, peor aún, decisiones precipitadas basadas en correlaciones espurias.</p>
      <p>Comprender implica hacer una pausa analítica: cuestionar los supuestos de origen, examinar el contexto sistémico e integrar disciplinas aparentemente distantes como la ciencia de datos, la comunicación organizacional y el liderazgo.</p>

      <blockquote>
        "No necesitamos más datos; necesitamos más criterio para interrogar la información que ya poseemos."
      </blockquote>

      <h3>Principios para construir criterio estratégico</h3>
      <ul>
        <li><strong>De la observación al diagnóstico:</strong> Distinguir entre los síntomas visibles de un problema y sus causas raíz subyacentes.</li>
        <li><strong>Interdisciplinariedad activa:</strong> Un problema complejo rara vez se resuelve desde una sola disciplina. Requiere conectar la visión humana con el rigor cualitativo y cuantitativo.</li>
        <li><strong>Evaluación de consecuencias de segundo orden:</strong> Preguntarse no solo qué pasará inmediatamente después de decidir, sino qué efectos dominó se desencadenarán a mediano y largo plazo.</li>
      </ul>

      <h3>Aplicación en el Ecosistema TRUPPIA</h3>
      <p>Desde TRUPPIA trasladamos esta perspectiva teórica al plano ejecutivo. Acompañamos a comités de dirección a estructurar marcos analíticos que transforman el conocimiento en ventaja competitiva sostenible.</p>
    `,
    relatedIds: ["comunicacion-como-sentido", "liderazgo-en-incertidumbre"]
  },
  {
    id: "comunicacion-como-sentido",
    title: "La comunicación estratégica más allá de la difusión: Construcción de sentido y confianza",
    category: "Comunicación",
    date: "12 de Junio, 2026",
    readTime: "6 min de lectura",
    excerpt: "La comunicación no es simplemente un canal de transmisión final; es el mecanismo primario para alinear visiones, generar confianza e impulsar la transformación organizacional.",
    coverGradient: "linear-gradient(135deg, #415A77 0%, #2A9D8F 100%)",
    icon: "fa-comments",
    contentHTML: `
      <p class="lead">Entender la comunicación únicamente como una herramienta para emitir notas de prensa o circulares internas limita dramáticamente el potencial estratégico de cualquier institución.</p>

      <h3>La comunicación como infraestructura cognitiva</h3>
      <p>Cuando la comunicación se aborda estratégicamente, actúa como el tejido conector que permite a todos los miembros de una organización interpretar la realidad de la misma manera. Otorga dirección, aclara los objetivos compartidos y reduce la fricción en la toma de decisiones.</p>

      <h3>Tres pilares de la comunicación con propósito</h3>
      <ol>
        <li><strong>Escucha diagnóstica:</strong> Antes de comunicar, es indispensable comprender las percepciones, sesgos y expectativas de las partes interesadas.</li>
        <li><strong>Coherencia entre discurso y evidencia:</strong> Las narrativas organizacionales se desploman si no están respaldadas por datos objetivos y acciones consecuentes.</li>
        <li><strong>Generación de confianza duradera:</strong> La confianza no es un resultado espontáneo; es la consecuencia directa de una comunicación transparente, consistente y fundada en hechos.</li>
      </ol>
    `,
    relatedIds: ["comprender-para-decidir-fundamentos", "liderazgo-en-incertidumbre"]
  },
  {
    id: "liderazgo-en-incertidumbre",
    title: "Liderazgo basado en evidencia: Cómo dirigir personas en tiempos de alta complejidad",
    category: "Liderazgo",
    date: "02 de Mayo, 2026",
    readTime: "8 min de lectura",
    excerpt: "El verdadero liderazgo en entornos volátiles no exige tener respuestas inmediatas para todo, sino formular las preguntas correctas y empoderar equipos mediante pensamiento crítico.",
    coverGradient: "linear-gradient(135deg, #2A9D8F 0%, #1B263B 100%)",
    icon: "fa-user-tie",
    contentHTML: `
      <p class="lead">Los modelos de liderazgo autocrático basados en la intuición individual son insuficientes para navegar los retos actuales. Se requiere un liderazgo humilde, analítico y centrado en las personas.</p>
      
      <h3>Integrando empatía con rigor analítico</h3>
      <p>El pensamiento crítico no elimina la dimensión humana del liderazgo; por el contrario, la potencia. Comprender a las personas implica analizar sus dinámicas de trabajo, sus motivadores y las barreras cognitivas que limitan su desempeño.</p>

      <h3>El rol del líder como diseñador de criterio</h3>
      <p>En lugar de impartir órdenes rígidas, los líderes contemporáneos deben enfocarse en diseñar entornos donde sus equipos desarrollen autonomía analítica y aprendan a fundamentar sus propuestas en evidencia sólida.</p>
    `,
    relatedIds: ["comprender-para-decidir-fundamentos", "ciencia-de-datos-decisiones"]
  },
  {
    id: "ciencia-de-datos-decisiones",
    title: "De los datos al conocimiento: El papel de la analítica en la toma de decisiones conscientes",
    category: "Ciencia de datos",
    date: "18 de Abril, 2026",
    readTime: "9 min de lectura",
    excerpt: "Un recorrido metodológico para conectar modelos cuantitativos, análisis estadístico y visualización con decisiones de negocio e impacto social.",
    coverGradient: "linear-gradient(135deg, #1B263B 0%, #FF6B6B 100%)",
    icon: "fa-database",
    contentHTML: `
      <p class="lead">La ciencia de datos alcanza su pico de utilidad cuando se despoja de la jerga excesivamente técnica y se convierte en un puente claro hacia la comprensión de la realidad.</p>

      <h3>El ciclo de valor de la información</h3>
      <p>Transformar datos crudos en conocimiento accionable requiere un proceso riguroso que abarca desde la limpieza y gobernanza de la información hasta la interpretación cualitativa de los hallazgos.</p>
    `,
    relatedIds: ["ia-pensamiento-critico", "comprender-para-decidir-fundamentos"]
  },
  {
    id: "ia-pensamiento-critico",
    title: "Inteligencia Artificial y Pensamiento Crítico: Potenciando la capacidad humana de decidir",
    category: "IA",
    date: "05 de Marzo, 2026",
    readTime: "6 min de lectura",
    excerpt: "Explorando cómo la integración ética de herramientas generativas e IA analítica puede potenciar, en lugar de reemplazar, la capacidad de juicio y discernimiento humano.",
    coverGradient: "linear-gradient(135deg, #415A77 0%, #FF6B6B 100%)",
    icon: "fa-robot",
    contentHTML: `
      <p class="lead">La IA es un catalizador extraordinario de la productividad, pero no posee criterio propio. La responsabilidad final de interpretar y decidir sigue siendo irrevocablemente humana.</p>
    `,
    relatedIds: ["ciencia-de-datos-decisiones", "investigacion-aplicada-organizaciones"]
  },
  {
    id: "investigacion-aplicada-organizaciones",
    title: "Investigación Aplicada: Conectando el rigor académico con los problemas organizacionales",
    category: "Investigación",
    date: "14 de Febrero, 2026",
    readTime: "7 min de lectura",
    excerpt: "Metodologías rigurosas para que instituciones y empresas traduzcan la investigación académica en soluciones reales, vigentes y pertinentes.",
    coverGradient: "linear-gradient(135deg, #2A9D8F 0%, #415A77 100%)",
    icon: "fa-microscope",
    contentHTML: `
      <p class="lead">El conocimiento que se queda confinado en anaqueles teóricos no cumple su propósito social. La investigación aplicada es el vehículo para resolver los dilemas contemporáneos.</p>
    `,
    relatedIds: ["comprender-para-decidir-fundamentos", "comunicacion-como-sentido"]
  }
];

const ACADEMIC_PUBLICATIONS = [
  {
    id: "pub-libro-1",
    title: "Comunicación Estratégica y Analítica de Datos: Fundamentos para la Toma de Decisiones en Organizaciones de Transformación",
    category: "libros",
    categoryLabel: "Libro",
    year: "2025",
    apa: "Owen, K. (2025). Comunicación Estratégica y Analítica de Datos: Fundamentos para la Toma de Decisiones en Organizaciones de Transformación. Editorial Académica Abierta. https://doi.org/10.1007/978-3-030-2026-1",
    doi: "10.1007/978-3-030-2026-1",
    abstract: "Esta obra presenta una metodología integral para articular la comunicación interna y externa con modelos analíticos cuantitativos. A través de casos empíricos y desarrollos conceptuales, la autora demuestra cómo la integración de datos y narrativa estratégica potencia el pensamiento crítico directivo.",
    link: "https://doi.org/10.1007/978-3-030-2026-1",
    coverBadge: "BOOK",
    icon: "fa-book"
  },
  {
    id: "pub-capitulo-1",
    title: "Capítulo 4: Gobernanza de la Información y Criterio Directivo en la Era Digital",
    category: "capitulos",
    categoryLabel: "Capítulo de libro",
    year: "2024",
    apa: "Owen, K. & TRUPPIA Research Group (2024). Gobernanza de la Información y Criterio Directivo en la Era Digital. En M. Rodríguez (Ed.), *Liderazgo y Gestión del Conocimiento en América Latina* (pp. 89-124). Ediciones Universitarias.",
    doi: "10.1016/j.led.2024.08.004",
    abstract: "El capítulo examina las barreras culturales y tecnológicas para la adopción de analítica avanzada en comités ejecutivos. Se propone un framework de 5 dimensiones para evaluar la madurez de la información en organizaciones complejas.",
    link: "https://doi.org/10.1016/j.led.2024.08.004",
    coverBadge: "CHAP",
    icon: "fa-book-open-reader"
  },
  {
    id: "pub-articulo-1",
    title: "Evaluación del impacto del pensamiento crítico en la toma de decisiones estratégicas mediante modelos de regresión estructural",
    category: "articulos",
    categoryLabel: "Artículo Científico Indexado (Scopus / WoS)",
    year: "2024",
    apa: "Owen, K. (2024). Evaluación del impacto del pensamiento crítico en la toma de decisiones estratégicas mediante modelos de regresión estructural. *Revista Latinoamericana de Ciencias de la Comunicación y Gestión*, 18(2), 145-168.",
    doi: "10.22201/rlccg.2024.v18n2.a7",
    abstract: "Un estudio cuantitativo con una muestra de 240 líderes de organizaciones del sector privado y educativo. Los resultados validan empíricamente que la formación en ciencia de datos combinada con la escucha diagnóstica reduce los errores estratégicos en un 34%.",
    link: "https://doi.org/10.22201/rlccg.2024.v18n2.a7",
    coverBadge: "PAPER",
    icon: "fa-file-lines"
  },
  {
    id: "pub-ponencia-1",
    title: "De los datos a la acción: Rediseño de experiencias de aprendizaje universitario mediante analítica de aprendizaje",
    category: "ponencias",
    categoryLabel: "Ponencia en Congreso Internacional",
    year: "2025",
    apa: "Owen, K. (2025, Octubre). De los datos a la acción: Rediseño de experiencias de aprendizaje universitario mediante analítica de aprendizaje. Trabajo presentado en el XIV Congreso Internacional de Innovación Docente y Educación Superior, Buenos Aires, Argentina.",
    doi: "10.1109/CIIDES.2025.98124",
    abstract: "Presentación metodológica sobre cómo aplicar técnicas de minería de datos educativos para detectar tempranamente brechas de comprensión en estudiantes de posgrado y adaptar las metodologías de enseñanza en tiempo real.",
    link: "https://doi.org/10.1109/CIIDES.2025.98124",
    coverBadge: "CONF",
    icon: "fa-chalkboard-user"
  },
  {
    id: "pub-otro-1",
    title: "Informe Técnico: Marco para la Integración Ética de Tecnologías Emergentes en la Consultoría Organizacional",
    category: "otros",
    categoryLabel: "Informe Técnico / Monografía",
    year: "2026",
    apa: "Owen, K. & Grupo TRUPPIA. (2026). Marco para la Integración Ética de Tecnologías Emergentes en la Consultoría Organizacional (Informe de Investigación Nº TRU-2026-01). TRUPPIA Knowledge Lab.",
    doi: "10.5281/zenodo.20260101",
    abstract: "Documento de trabajo que establece principios rectores para salvaguardar la privacidad de datos, mitigar sesgos en modelos algorítmicos y garantizar la transparencia en los procesos de asesoría ejecutiva.",
    link: "https://doi.org/10.5281/zenodo.20260101",
    coverBadge: "REPORT",
    icon: "fa-folder-tree"
  }
];

const RESOURCES_DATA = [
  {
    id: "rec-guia-comunicacion-estrategica",
    title: "Guía de Diagnóstico de Comunicación Estratégica Organizacional",
    area: "Comunicación",
    level: "Intermedio",
    updateDate: "Julio 2026",
    version: "v2.4",
    icon: "fa-comments",
    description: "Framework metodológico completo para evaluar los flujos de información, la coherencia del discurso directivo y la alineación estratégica en equipos.",
    pdfPages: [
      {
        page: 1,
        title: "Marco Conceptual de Escucha Diagnóstica",
        body: "Fundamentos para auditar los canales formales e informales de comunicación en instituciones. Identificación de cuellos de botella cognitivos."
      },
      {
        page: 2,
        title: "Matriz de Evaluación de Coherencia Discursiva",
        body: "Herramienta práctica en 4 cuadrantes para contrastar las narrativas ejecutivas con la percepción real de los colaboradores y la evidencia cuantitativa."
      },
      {
        page: 3,
        title: "Indicadores Clave de Alineación (KPIs de Comunicación)",
        body: "Métricas para cuantificar el impacto de la comunicación interna en el clima organizacional, la retención de talento y la eficiencia operativa."
      }
    ],
    truppiaNote: "Este recurso es utilizado activamente en los programas de transformación directiva desarrollados por TRUPPIA."
  },
  {
    id: "rec-framework-toma-decisiones",
    title: "Framework de Toma de Decisiones Basadas en Evidencia y Datos",
    area: "Analítica",
    level: "Avanzado",
    updateDate: "Junio 2026",
    version: "v3.1",
    icon: "fa-chart-pie",
    description: "Plantilla estructurada paso a paso para formular preguntas analíticas, validar hipótesis de negocio y evitar los sesgos cognitivos más comunes.",
    pdfPages: [
      {
        page: 1,
        title: "Formulación del Cuestionamiento Crítico",
        body: "Definición rigurosa del problema antes de la recolección de datos. Distinción entre variables correlacionadas y relaciones de causalidad."
      },
      {
        page: 2,
        title: "Checklist Antisesgos Cognitivos",
        body: "Procedimiento de verificación para mitigar el sesgo de confirmación, la aversión a la pérdida y el anclaje informativo en decisiones financieras."
      }
    ],
    truppiaNote: "Base metodológica para el módulo de Business Intelligence y Analítica Estratégica de TRUPPIA."
  },
  {
    id: "rec-modelo-liderazgo-consciente",
    title: "Modelo de Liderazgo Consciente en Tiempos de Incertidumbre",
    area: "Liderazgo",
    level: "Básico",
    updateDate: "Mayo 2026",
    version: "v1.8",
    icon: "fa-user-tie",
    description: "Instrumento docente para el desarrollo de capacidades conversacionales, gestión del cambio y acompañamiento a equipos de alto rendimiento.",
    pdfPages: [
      {
        page: 1,
        title: "Los 5 Pilares del Líder-Estratega",
        body: "Visión panorámica de la integración entre empatía humana, claridad analítica y flexibilidad adaptativa frente a entornos volátiles."
      }
    ],
    truppiaNote: "Desarrollado para el taller ejecutivo de Liderazgo Adaptativo."
  },
  {
    id: "rec-plantilla-investigacion-aplicada",
    title: "Protocolo y Plantilla de Diseño para Investigación Aplicada",
    area: "Investigación",
    level: "Intermedio",
    updateDate: "Julio 2026",
    version: "v2.0",
    icon: "fa-microscope",
    description: "Estructura para la formulación de proyectos de investigación que conectan necesidades del entorno con metodologías académicas rigurosas.",
    pdfPages: [
      {
        page: 1,
        title: "Definición del Problema y Justificación",
        body: "Guía para sustentar teórica y empíricamente la relevancia de una investigación aplicada en contextos organizacionales o comunitarios."
      }
    ],
    truppiaNote: "Estándar utilizado en los proyectos de I+D de Kitty Owen Knowledge Hub."
  },
  {
    id: "rec-ciencia-datos-directivos",
    title: "Manual de Ciencia de Datos para No Especialistas y Directivos",
    area: "Ciencia de Datos",
    level: "Básico",
    updateDate: "Abril 2026",
    version: "v1.5",
    icon: "fa-database",
    description: "Guía introductoria para comprender algoritmos, modelos predictivos y calidad de datos sin necesidad de programar.",
    pdfPages: [
      {
        page: 1,
        title: "Glosario Fundamental de Analítica",
        body: "Explicación en lenguaje claro de conceptos como aprendizaje supervisado, clustering, over-fitting y pipelines de datos."
      }
    ],
    truppiaNote: "Material docente de libre acceso para estudiantes universiarios y ejecutivos."
  },
  {
    id: "rec-prompts-ia-critica",
    title: "Matriz de Prompts y Criterio Humano para el Uso Ético de IA",
    area: "IA",
    level: "Avanzado",
    updateDate: "Julio 2026",
    version: "v2.2",
    icon: "fa-robot",
    description: "Colección de estructuras de instrucciones y protocolos de verificación para auditar la precisión y veracidad de salidas generadas por IA.",
    pdfPages: [
      {
        page: 1,
        title: "Principios de Verificación Humana",
        body: "Metodología de doble ciego para contrastar las alucinaciones de modelos de lenguaje con fuentes bibliográficas reales y bases de datos validadas."
      }
    ],
    truppiaNote: "Herramienta clave para la integración responsable de la IA en procesos organizacionales."
  }
];
