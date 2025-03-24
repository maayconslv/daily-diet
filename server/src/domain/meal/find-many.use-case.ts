import { MealDataSource } from "@/data/meal";
import { UserDataSource } from "@/data/user/user.datasource";
import { Service } from "typedi";
import { MealModel } from "../model";
import { mapMealDataDto } from "@/data/util";

@Service()
export class FindManyByUserUseCase {
  constructor(
    private readonly userDataSource: UserDataSource,
    private readonly mealDataSource: MealDataSource
  ) {}

  async exec(userId: string): Promise<MealModel[]> {
    const user = await this.userDataSource.findById(Number(userId));
    if(!user) {
      throw new Error('User not found error')
    }

    const meals = await this.mealDataSource.findManyByUser(Number(userId));
    const mapMeals = meals.map((meal) => mapMealDataDto(meal));

    return mapMeals;
  }
}