import { MealDataSource } from "../../data/meal";
import { Service } from "typedi";
import { MealModel } from "../model";
import { mapMealDataDto } from "../../data/util";

interface GetMealInputModel {
  id: string;
  userId: string;
}

@Service()
export class GetMealUseCase {
  constructor(
    private readonly mealDataSource: MealDataSource,
  ) {}

  async exec({ id, userId }: GetMealInputModel): Promise<MealModel> {
    const meal = await this.mealDataSource.findById(Number(id));
    if(!meal) {
      throw new Error('Meal not found error')
    }

    if(meal.userId !== Number(userId)) {
      throw new Error('Unauthorized error')
    }

    return mapMealDataDto(meal);
  }
}