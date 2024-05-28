import { images } from "./images";

export interface Teams {
  logo: string;
  team: string;
  path: string
}

export const teams: Teams[] = [
  
  {
    logo: images.barcelona,
    team: "Barcelona",
    path: "/barcelona"
  },
  {
    logo: images.realmadrid,
    team: "Real Madrid",
    path: "/real-madrid"
  },
  {
    logo: images.sevilla,
    team: "Sevilla",
    path: "/sevilla"
  },
  
];
