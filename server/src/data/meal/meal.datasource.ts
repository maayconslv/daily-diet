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

interface UpdateMealDataInput {
  id: string;
  name?: string;
  insideDiet?: boolean;
  description?: string;
}

@Service()
export class MealDataSource {
  private readonly repository: Repository<MealEntity> =
    DBConnection.getRepository(MealEntity);

  async registerMeal(data: RegisterMealDataInput): Promise<MealEntity> {
    return this.repository.save(data);
  }

  async findById(id: string): Promise<MealEntity | null> {
    return this.repository.findOne({ where: { id } });
  }

  async update(data: UpdateMealDataInput): Promise<MealEntity> {
    await this.repository
      .createQueryBuilder("meal")
      .update(MealEntity)
      .set({
        name: data.name,
        description: data.description,
        insideDiet: data.insideDiet,
      })
      .where("meal.id = :id", { id: data.id })
      .execute();

    return this.repository
      .createQueryBuilder("meal")
      .innerJoinAndSelect("meal.session", "session")
      .where("meal.id = :id", { id: data.id })
      .execute();
  }
}
