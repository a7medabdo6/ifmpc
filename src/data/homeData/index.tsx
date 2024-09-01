import { StaticImageData } from "next/image";
import homeImage from "../../assets/images/homeImage.png";

export interface Item {
  id: string; // or the appropriate type

  Content: any;
  name: any;
  created: any;
  date: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  top?: boolean;
}

export const publications: Item[] = [
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    id: ""
  },
];

export const projects: Item[] = [
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },

  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },

  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "25 June 2024",
    title: "MoU",
    description: "Inbusiness",
    image: homeImage,
    id: ""
  },

  // Add more items
];

export const trainings: Item[] = [
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "20 June - 25 June",
    title: "Consultation Training",
    description: "Training Description : Our training courses are certified by professional recognised bodies",
    id: ""
  },
  {
    name: "name",
    Content: "content",
    created: "27/25",
    date: "20 June - 25 June",
    title: "Consultation Training",
    description: "Training Description : Our training courses are certified by professional recognised bodies",
    id: ""
  },
  {
    date: "20 June - 25 June",
    title: "Consultation Training",
    description: "Training Description : Our training courses are certified by professional recognised bodies",
    Content: undefined,
    name: undefined,
    created: undefined,
    id: ""
  },
  {
    date: "20 June - 25 June",
    title: "Consultation Training",
    description: "Training Description : Our training courses are certified by professional recognised bodies",
    Content: undefined,
    name: undefined,
    created: undefined,
    id: ""
  },
  // Add more items
];
