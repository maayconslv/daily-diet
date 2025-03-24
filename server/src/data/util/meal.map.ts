import { MealModel } from "@/domain/model";
import { Meal, User } from "@prisma/client";

export function mapMealDataDto(data: Meal, session: User): MealModel {
  return {
    id: String(data.id),
    name: data.name,
    description: data.description,
    insideDiet: data.insideDiet,
    user: {
      id: String(session.id),
      email: session.email,
      name: session.name,
      username: session.username
    },
  }
}