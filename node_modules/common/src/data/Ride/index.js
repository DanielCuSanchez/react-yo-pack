import Image1 from "../../assets/image/ride/YP-camion.png";
import Image2 from "../../assets/image/ride/YP-moto.png";
import Image3 from "../../assets/image/ride/YP-isotipo.png";
import Latest1 from "../../assets/image/ride/blog-1.svg";
import Latest2 from "../../assets/image/ride/blog-2.svg";
import Client1 from "../../assets/image/ride/Clients/proove.jpg";
import Client2 from "../../assets/image/ride/Clients/cancha_sport.jpg";
import Client3 from "../../assets/image/ride/Clients/party_land.jpg";
import Client4 from "../../assets/image/ride/Clients/bocaditos.jpg";

export const MENU_ITEMS = [
  {
    label: "Inicio",
    path: "#banner_section",
    offset: "70"
  },
  {
    label: "Nosotros",
    path: "#ride_section",
    offset: "70"
  },
  {
    label: "Cómo funciona",
    path: "#fare_section",
    offset: "70"
  },
  {
    label: "Tarifas",
    path: "#feature_section",
    offset: "70"
  },
  {
    label: "Clientes",
    path: "#clients",
    offset: "70"
  },
  {
    label: "Contacto",
    path: "#news_section",
    offset: "70"
  }
];
export const MENU_LEFT_ITEMS = [
  {
    label: "Inicio",
    path: "#banner_section",
    offset: "70"
  },
  {
    label: "Nosotros",
    path: "#ride_section",
    offset: "70"
  },
  {
    label: "Cómo funciona",
    path: "#fare_section",
    offset: "70"
  },
  {
    label: "Tarifas",
    path: "#feature_section",
    offset: "70"
  },
  {
    label: "Clientes",
    path: "#clients",
    offset: "70"
  },
  {
    label: "Contacto",
    path: "#news_section",
    offset: "70"
  }
];
export const MENU_RIGHT_ITEMS = [
  {
    label: "Cotizador",
    path: "#fare_section",
    offset: "70"
  }
];

export const Features = [
  //Nosotros
  {
    id: 1,
    img: `${Image1}`,
    title: "Dentro de zona tradicional",
    description: "$49"
  },
  {
    id: 2,
    img: `${Image2}`,
    title: "De zona tradicional a zona extendida",
    description: "$69"
  },
  {
    id: 3,
    img: `${Image3}`,
    title: "De zona extendida a zona extendida",
    description: "$89"
  }
];
export const LatestNews = [
  //Contacto
  // {
  //   id: 1,
  //   img: `${Latest1}`,
  //   title: 'Built for drivers, with drivers',
  //   description:
  //     'The new Driver app helps you earn smarter and supports you–like a partner–at every turn.',
  //   buttonText: 'Learn More',
  // },
  // {
  //   id: 2,
  //   img: `${Latest2}`,
  //   title: 'Bike Share',
  //   description:
  //     'All the Riders have been verified by us. Not random people with bikes that we don’t know.',
  //   buttonText: 'Learn More',
  // },
];
export const Testimonial = [
  //Testimodial
  {
    id: 1,
    name: "Proove",
    // designation: "CEO of Invission Co.",
    comment:
      "Nuestra logisitica de envios es mas simple gracias a YoPack",
    avatar_url: Client1,
    social_icon: "flaticon-instagram"
  },
  {
    id: 2,
    name: "Cancha sport",
    // designation: "Co-founder of QatarDiaries",
    comment:
      "Entregas en tiempo y forma",
    avatar_url: Client2,
    social_icon: "flaticon-twitter"
  },
  {
    id: 3,
    name: "Party Land",
    // designation: "Co-founder of QatarDiaries",
    comment:
      "Excelente atención",
    avatar_url: Client3,
    social_icon: "flaticon-twitter"
  },
  {
    id: 4,
    name: "Bocaditos",
    // designation: "Co-founder of QatarDiaries",
    comment:
      "Fácil de solicitar, rápido en entregar",
    avatar_url: Client4,
    social_icon: "flaticon-twitter"
  }
];
export const menuWidget = [
  //Footer
  {
    id: 1,
    title: "Soporte",
    menuItems: [
      {
        id: 1,
        url: "#",
        text: "WhatsApp"
      },
      {
        id: 2,
        url: "#",
        text: "yopackmx@gmail.com"
      }
    ]
  },
  {
    id: 2,
    title: "Yo Pack",
    menuItems: [
      {
        id: 1,
        url: "#",
        text: "Términos y condiciones"
      },
      {
        id: 2,
        url: "#",
        text: "Aviso de privacidad"
      },
      {
        id: 3,
        url: "#",
        text: "Cobertura"
      }
    ]
  }
  // ,
  // {
  //   id: 3,
  //   title: 'My Account',
  //   menuItems: [
  //     {
  //       id: 1,
  //       url: '#',
  //       text: 'Press inquiries',
  //     },
  //     {
  //       id: 2,
  //       url: '#',
  //       text: 'Social media directories',
  //     },
  //     {
  //       id: 3,
  //       url: '#',
  //       text: 'Images & B-roll',
  //     },
  //     {
  //       id: 4,
  //       url: '#',
  //       text: 'Permissions',
  //     },
  //     {
  //       id: 5,
  //       url: '#',
  //       text: 'Speaker requests',
  //     },
  //   ],
  // },
];
export const Language_NAMES = [
  // {
  //   label: 'English',
  //   value: 'eng',
  // },
  // {
  //   label: 'Chinese',
  //   value: 'chinese',
  // },
  // {
  //   label: 'Indian',
  //   value: 'indian',
  // },
];
