interface ServiceFeature {
  title: string;
  desc: string;
  icon: string;
}

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  details: string[];
  features?: ServiceFeature[];
  isUpcoming?: boolean;
  placeholderText: string;
  mediaUrl?: string; // Ruta al video (.mp4) o imagen (.webp, .jpg, .png)
}

export const services: ServiceItem[] = [
    {
      id: "mantenimiento",
      title: "Mantenimiento Preventivo y Correctivo",
      subtitle: "Cuidado periódico o correctores de urgencia",
      badge: "Servicio Estrella",
      desc: "Garantiza un entorno higiénico, seguro y estéticamente impecable. Nos encargamos de todo el espectro físico y químico para que el agua de tu piscina esté siempre en óptimas condiciones.",
      details: [
        "Chequeo preciso de parámetros químicos de la piscina (Cloro, pH, Alcalinidad)",
        "Cepillado profundo de muros, escalones y líneas de flotación",
        "Aspirado profundo del fondo de la piscina para retirar impurezas finas",
        "Recolección de basura, hojas y residuos flotantes con red sacahojas",
        "Limpieza y vaciado de trampas de cabello y canastillas de skimmer",
        "Retrolavado y enjuague del filtro de arena o limpieza de cartuchos filtrantes",
        "Aplicación y dosificación precisa de químicos premium necesarios"
      ],
      features: [
        {
          title: "Piscinas Armables",
          desc: "Damos el mismo servicio completo de cepillado, aspirado y balance químico a piscinas inflables y estructurales.",
          icon: "layers"
        },
        {
          title: "Bomba Portátil Incluida",
          desc: "Si tu piscina no cuenta con un sistema de filtrado propio, llevamos nuestra bomba portátil para brindar el servicio al 100%.",
          icon: "settings_input_hdmi"
        }
      ],
      placeholderText: "Sube un video en bucle (.mp4) o fotografía de una piscina limpia e impecable.",
      mediaUrl: "/videos/aspirado.mp4"
    },
    {
      id: "rehabilitacion",
      title: "Rehabilitación de Piscinas Abandonadas",
      subtitle: "Restauración integral de piscinas deterioradas",
      badge: "Especialidad",
      desc: "Recuperamos piscinas que han estado sin uso prolongado, con acumulación de sarro severo, manchas, agua verde u óxido en mosaicos. Devolvemos el brillo y funcionalidad original a tu espacio.",
      details: [
        "Vaciado controlado y lavado a presión profunda con químicos ácidos especiales",
        "Eliminación total del sarro, hongos e incrustaciones en muros y pisos",
        "Pegado de mosaicos venecianos faltantes y resane de juntas dañadas",
        "Revisión, reparación y habilitación del sistema de filtrado y tuberías",
        "Tratamiento químico de choque en el primer llenado para garantizar pureza del agua"
      ],
      features: [
        {
          title: "Lista para Usar al 100%",
          desc: "Garantizamos que tanto el revestimiento como el sistema hidráulico y de filtrado queden funcionando a la perfección al terminar.",
          icon: "task_alt"
        }
      ],
      placeholderText: "Sube un video corto de lavado a presión o reparación de venecianos.",
      mediaUrl: "/videos/rehabilitacion.mp4"
    },
    {
      id: "equipamiento",
      title: "Instalación de Sistema de Bomba y Filtro",
      subtitle: "Equipamiento hidráulico y automatización",
      badge: "Soporte Técnico",
      desc: "Diseñamos, instalamos y renovamos el cuarto de máquinas de tu piscina. Colocamos sistemas de filtrado eficientes para piscinas que no los posean o que requieran actualización.",
      details: [
        "Instalación de motobombas autocebantes de alta eficiencia energética",
        "Montaje y carga de filtros de arena de fibra de vidrio y filtros de cartucho",
        "Instalación y configuración de cloradores de sal y dosificadores químicos automáticos",
        "Tendidos de tubería de PVC hidráulica cédula 40 de alta presión libre de fugas",
        "Mantenimiento e instalación de tableros eléctricos y sistemas de automatización"
      ],
      features: [
        {
          title: "Eficiencia Energética",
          desc: "Instalamos bombas de velocidad variable que reducen significativamente el consumo de energía eléctrica.",
          icon: "bolt"
        }
      ],
      placeholderText: "Sube un video o fotografía del agua fluyendo limpia a través de las boquillas de retorno.",
      mediaUrl: "/videos/instalacion.mp4"
    },
    {
      id: "construccion",
      title: "Construcción de Piscinas",
      subtitle: "Diseño y obra civil personalizada",
      badge: "Próximamente",
      isUpcoming: true,
      desc: "Muy pronto ofreceremos el servicio completo de diseño y edificación de piscinas de concreto armado. Llevaremos a la realidad la piscina de tus sueños con la máxima solidez estructural.",
      details: [
        "Diseño arquitectónico personalizado y modelado en 3D del jardín",
        "Excavación, armado de varilla y colado de concreto de alta resistencia",
        "Acabados premium en mosaico veneciano, cuarzo o de textura de mármol",
        "Instalación de iluminación LED subacuática a color y cascadas decorativas"
      ],
      features: [
        {
          title: "Obra Llave en Mano",
          desc: "Nos encargaremos de todo: desde la excavación inicial hasta la puesta en marcha hidráulica y el primer balanceo de agua.",
          icon: "home_repair_service"
        }
      ],
      placeholderText: "Se mostrará un render o video de modelado 3D de proyectos futuros.",
      mediaUrl: "/videos/construccion.mp4"
    }
  ];
