import { MealDataSource } from "../../data/meal";
import { UserDataSource } from "../../data/user/user.datasource";
import { Service } from "typedi";
import { MealModel, UpdateMealInputModel } from "../model";
import { mapMealDataDto } from "../../data/util";

@Service()
export class UpdateMealUseCase {
  constructor(
    private readonly userDataSource: UserDataSource,
    private readonly mealDataSource: MealDataSource,
  ) {}

  async exec({ name, description, insideDiet, ...data }: UpdateMealInputModel): Promise<MealModel> {
    const meal = await this.mealDataSource.findById(Number(data.mealId));
    const user = await this.userDataSource.findById(Number(data.userId));
    if(!user) {
      throw new Error('User not found')
    }

    if(!meal) {
      throw new Error('Meal not found error')
    }

    if(meal.userId !== Number(data.userId)) {
      throw new Error('Unauthorized error')
    }

    const updatedMeal = await this.mealDataSource.update({ description, name, insideDiet, id: Number(data.mealId) });
    const mapUpdatedMeal = mapMealDataDto(updatedMeal, user);

    return mapUpdatedMeal;
  }
}
