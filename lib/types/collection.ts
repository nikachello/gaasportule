export type City = {
  id: string;
  name: string;
};

export type SportCategory = {
  id: string;
  name: string;
};

export type Contributor = {
  id: string;
  name: string;
  avatarUrl?: string;
  contributedAmount: number;
};

export type Collection = {
  id: string;
  title: string;
  description?: string;
  cityId: string;
  sportId: string;
  raised: number;
  goal: number;
  imageUrl?: string;
  contributors: Contributor[];
};
