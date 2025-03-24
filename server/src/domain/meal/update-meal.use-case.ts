import { MealDataSource } from "@/data/meal";
import { UserDataSource } from "@/data/user/user.datasource";
import { Service } from "typedi";
import { MealModel, UpdateMealInputModel } from "../model";
import { mapMealDataDto } from "@/data/util";

@Service()
export class UpdateMealUseCase {
  constructor(
    private readonly userDataSource: UserDataSource,
    private readonly mealDataSource: MealDataSource,
  ) {}

  async exec({ name, description, insideDiet, ...data }: UpdateMealInputModel): Promise<MealModel> {
    const meal = await this.mealDataSource.findById(data.mealId);
    const user = await this.userDataSource.findById(data.sessionId);
    if(!user) {
      throw new Error('User not found')
    }

    if(!meal) {
      throw new Error('Meal not found error')
    }

    if(meal.session.id !== data.sessionId) {
      throw new Error('Unauthorized error')
    }

    const updatedMeal = await this.mealDataSource.update({ description, name, insideDiet, id: data.mealId });
    const mapUpdatedMeal = mapMealDataDto(updatedMeal, user);

    return mapUpdatedMeal;
  }
}
