import { UserModel } from "./user.model";

export interface MealModel {
  id: string;
  name: string;
  description: string;
  insideDiet: boolean;
  session: UserModel;
}

export interface RegisterMealInputModel {
  name: string;
  description: string;
  insideDiet: boolean;
  userId: string;
}

export interface UpdateMealInputModel {
  sessionId: string;
  mealId: string;
  name?: string;
  description?: string;
  insideDiet?: boolean;
}
