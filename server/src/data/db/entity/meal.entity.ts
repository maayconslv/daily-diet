import { Column, Entity, ManyToOne } from "typeorm";
import { BaseColumnsEntity } from "./base-column.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: 'meal'} )
export class MealEntity extends BaseColumnsEntity {
  @Column()
  name: string

  @Column()
  description: string

  @Column()
  insideDiet: boolean

  @ManyToOne(() => UserEntity, (user) => user.id)
  session: UserEntity
}