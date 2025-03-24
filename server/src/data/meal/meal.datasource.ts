import { Service } from "typedi";
import { prisma } from "../db/db.config";
import { Meal } from "@prisma/client";

interface RegisterMealDataInput {
  name: string;
  description: string;
  userId: number;
  insideDiet: boolean;
}

interface UpdateMealDataInput {
  id: number;
  name?: string;
  insideDiet?: boolean;
  description?: string;
}

@Service()
export class MealDataSource {
  registerMeal({ userId, ...data }: RegisterMealDataInput): Promise<Meal> {
    return prisma.meal.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
      },
    });
  }

  findById(id: number): Promise<Meal | null> {
    return prisma.meal.findUnique({ where: { id }, include: { user: true } });
  }

  update({ id, ...data }: UpdateMealDataInput): Promise<Meal>  {
    return prisma.meal.update({ data, where: { id } });
  }
}
