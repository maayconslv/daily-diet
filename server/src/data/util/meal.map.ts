import { MealModel } from "@/domain/model";
import { Meal, User } from "@prisma/client";

export function mapMealDataDto(data: Meal): MealModel {
  return {
    id: String(data.id),
    name: data.name,
    description: data.description,
    insideDiet: data.insideDiet,
  }
}