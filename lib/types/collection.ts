import {
  City,
  Collection,
  Contribution,
  SportCategory,
  User,
} from "../generated/prisma/client";

export type CollectionWithRelations = Collection & {
  city: City;
  sport: SportCategory;
  contributions: (Contribution & {
    user: Pick<User, "id" | "name" | "image">;
  })[];
};
