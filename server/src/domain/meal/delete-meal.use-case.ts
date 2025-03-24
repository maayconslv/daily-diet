import { MealDataSource } from "@/data/meal";
import { Service } from "typedi";

@Service()
export class DeleteMealUseCase {
  constructor(
    private readonly mealDataSource: MealDataSource
  ) {}

  async exec(mealId: string, userId: string): Promise<string> {
    const meal = await this.mealDataSource.findById(Number(mealId));

    if(!meal) {
      throw new Error('Meal not found error')
    }

    if(meal.userId !== Number(userId)) {
      throw new Error('Unauthorized error')
    }

    await this.mealDataSource.delete(Number(mealId));
    return 'Success delete'
  }
}
