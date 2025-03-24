import { IsBoolean, IsOptional, IsString } from "class-validator";

export class RegisterMealInput {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  insideDiet: boolean;
}

export class UpdateMealInput {
  @IsString()
  mealId: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsBoolean()
  @IsOptional()
  insideDiet: boolean;
}