export type RawUser = {
  id: string;
  name: string;
  image: string | null;
  isAnonymous: boolean;
};

export type PublicUser = {
  id: string;
  name: string;
  image: string | null;
};

export const toPublicUser = (user: RawUser): PublicUser => ({
  id: user.id,
  name: user.isAnonymous ? "ანონიმური" : user.name,
  image: user.isAnonymous ? null : user.image,
});
