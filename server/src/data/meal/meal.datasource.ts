import { Service } from "typedi";
import { Repository } from "typeorm";
import { MealEntity } from "../db/entity";
import { DBConnection } from "../db/database.config";

interface RegisterMealDataInput {
  name: string;
  description: string;
  sessionId: string;
  insideDiet: boolean;
}

@Service()
export class MealDataSource {
  private readonly repository: Repository<MealEntity> = DBConnection.getRepository(MealEntity);

  async registerMeal(data: RegisterMealDataInput): Promise<MealEntity> {
    return this.repository.save(data);
  }
}
