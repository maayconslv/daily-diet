import { Request } from "express";
import { RegisterMealUseCase, UpdateMealUseCase } from "../../../domain/meal";
import { AuthMiddleware } from "../../middleware/authenticate.middleware";
import { Body, Controller, Post, Put, Req, UseBefore } from "routing-controllers";
import { Service } from "typedi";
import { RegisterMealInput, UpdateMealInput } from "./meal.input";

@Service()
@Controller('/meal')
export class MealController {
  constructor(
    private readonly registerMealUseCase: RegisterMealUseCase,
    private readonly updateMealUseCase: UpdateMealUseCase,
  ) {}

  @Post()
  @UseBefore(AuthMiddleware)
  async registerMeal(@Body() args: RegisterMealInput, @Req() req: Request) {
    const response = await this.registerMealUseCase.exec({...args, userId: req.userId });
    return { data: response };
  }

  @Put()
  @UseBefore(AuthMiddleware)
  async update(@Body() args: UpdateMealInput, @Req() req: Request) {
    const response = await this.updateMealUseCase.exec({ ...args, userId: req.userId });
    return { data: response };
  }
}