export type Bomb = {
  type?: string;
  title?: string;
  thumb?: string;
  cx: number;
  cy: number;
  positions: Position[];
};

export type Position = {
  title?: string;
  thumb?: string;
};

export type Map = {
  name: string;
  icon: string;
  map: string;
  bombs: Bomb[];
};

export type Team = {
  name: string;
  icon: string;
};
