import {
  Collection,
  City,
  SportCategory,
  Contribution,
  CollectionDocument,
} from "@/lib/generated/prisma/client";
import { PublicUser } from "@/lib/mappers/user.mapper";

export type CollectionWithRelations = Collection & {
  city: City;
  sport: SportCategory;
  documents: CollectionDocument[];
  contributions: (Contribution & {
    user: PublicUser;
  })[];
};
