import { UserModel } from "./user.model";

export interface MealModel {
  id: string;
  name: string;
  description: string;
  insideDiet: boolean;
  user: UserModel;
}

export interface RegisterMealInputModel {
  name: string;
  description: string;
  insideDiet: boolean;
  userId: string;
}

export interface UpdateMealInputModel {
  userId: string;
  mealId: string;
  name?: string;
  description?: string;
  insideDiet?: boolean;
}
