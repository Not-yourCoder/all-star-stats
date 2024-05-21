import { images } from "./images";

export interface Teams {
  logo: string;
  team: string;
}

export const teams: Teams[] = [
  
  {
    logo: images.barcelona,
    team: "Barcelona",
  },
  {
    logo: images.realmadrid,
    team: "Real Madrid",
  },
  {
    logo: images.sevilla,
    team: "Sevilla",
  },
  
];
