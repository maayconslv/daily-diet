import { MealDataSource } from "../../data/meal";
import { UserDataSource } from "../../data/user/user.datasource";
import { Service } from "typedi";
import { MealModel, RegisterMealInputModel } from "../model";
import { mapUserDataDto } from "../../data/util/user.map";
import { mapMealDataDto } from "../../data/util/meal.map";

@Service()
export class RegisterMealUseCase {
  constructor(
    private readonly userDataSource: UserDataSource,
    private readonly mealDataSource: MealDataSource,
  ) {}

  async exec(data: RegisterMealInputModel): Promise<MealModel> {
    const user = await this.userDataSource.findById(data.userId);
    if(!user) {
      throw new Error('User not found error.');
    }

    const meal = await this.mealDataSource.registerMeal({ ...data, sessionId: user.id });
    const userMap = mapUserDataDto(user);
    const mealMap = mapMealDataDto(meal, userMap);

    return mealMap;
  }
}