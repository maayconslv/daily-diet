import { IsBoolean, IsString } from "class-validator";

export class RegisterMealInput {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  insideDiet: boolean;
}