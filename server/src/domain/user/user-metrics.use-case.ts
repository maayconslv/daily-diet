import { MealDataSource } from "../../data/meal";
import { UserDataSource } from "../../data/user/user.datasource";
import { Service } from "typedi";
import { UserMetricsModel } from "../model";

@Service()
export class GetUserMetricsUseCase {
  constructor(
    private readonly userDataSource: UserDataSource,
    private readonly mealDataSource: MealDataSource
  ) {}

  async exec(userId: string): Promise<UserMetricsModel> {
    const user = await this.userDataSource.findById(Number(userId));
    if(!user) {
      throw new Error('User not found error');
    }

    const meals = await this.mealDataSource.findManyByUser(Number(userId));
    const mealsInsideDiet = meals.filter((meal) => meal.insideDiet === true);
    const mealsOutDiet = meals.filter((meal) => meal.insideDiet === false);

    let currentCount = 0;
    let maxCount = 0;
    for(const meal of meals) {
      if(meal.insideDiet === true) {
        currentCount++
        maxCount = Math.max(maxCount, currentCount);
      } else {
        currentCount = 0;
      }
    }

    return {
      totalMealsCount: meals.length,
      totalMealsInDiet: mealsInsideDiet.length,
      totalMealsOutDiet: mealsOutDiet.length,
      maxCount
    }
  }
}