import {
  City,
  Collection,
  CollectionDocument,
  Contribution,
  SportCategory,
  User,
} from "../generated/prisma/client";

export type CollectionWithRelations = Collection & {
  city: City;
  sport: SportCategory;
  documents: CollectionDocument[];
  contributions: (Contribution & {
    user: Pick<User, "id" | "name" | "image">;
  })[];
};
