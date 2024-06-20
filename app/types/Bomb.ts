export type Bomb = {
  type?: string;
  title?: string;
  side?: Side;
  thumb?: string;
  cx: number;
  cy: number;
  positions: Position[];
};

export type Position = {
  title?: string;
  thumb?: string;
  side?: Side;
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

export type Side = 'tr' | 'ct';
