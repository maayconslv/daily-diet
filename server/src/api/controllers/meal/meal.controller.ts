import { Request } from "express";
import { RegisterMealUseCase } from "../../../domain/meal";
import { AuthMiddleware } from "../../middleware/authenticate.middleware";
import { Body, Controller, Post, Req, UseBefore } from "routing-controllers";
import { Service } from "typedi";
import { RegisterMealInput } from "./meal.input";

@Service()
@Controller('/meal')
export class UserController {
  constructor(
    private readonly registerMealUseCase: RegisterMealUseCase,
  ) {}

  @Post()
  @UseBefore(AuthMiddleware)
  async createUser(@Body() args: RegisterMealInput, @Req() req: Request) {
    const response = await this.registerMealUseCase.exec({...args, userId: req.userId });
    return { data: response };
  }
}