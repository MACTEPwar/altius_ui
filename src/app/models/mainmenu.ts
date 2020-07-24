export class MainMenu {
  id: number;
  name: string;
  url: string;
  image: string;
  level: number;
  parentId?: number;
  children?: MainMenu[];
}
