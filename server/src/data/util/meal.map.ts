import { MealModel, UserModel } from "@/domain/model";
import { MealEntity } from "../db/entity";

export function mapMealDataDto(data: MealEntity, session: UserModel): MealModel {
  return {
    name: data.name,
    description: data.description,
    id: data.id,
    insideDiet: data.insideDiet,
    session,
  }
}