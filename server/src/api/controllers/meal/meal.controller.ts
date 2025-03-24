import { Request } from "express";
import { RegisterMealUseCase, UpdateMealUseCase, FindManyByUserUseCase, GetMealUseCase } from "../../../domain/meal";
import { AuthMiddleware } from "../../middleware/authenticate.middleware";
import { Body, Controller, Get, Param, Post, Put, QueryParam, Req, UseBefore } from "routing-controllers";
import { Service } from "typedi";
import { RegisterMealInput, UpdateMealInput } from "./meal.input";

@Service()
@Controller('/meal')
export class MealController {
  constructor(
    private readonly registerMealUseCase: RegisterMealUseCase,
    private readonly updateMealUseCase: UpdateMealUseCase,
    private readonly findManyByUserUseCase: FindManyByUserUseCase,
    private readonly findOneUseCase: GetMealUseCase
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

  @Get()
  @UseBefore(AuthMiddleware)
  async findMany(@Req() req: Request) {
    const response = await this.findManyByUserUseCase.exec(req.userId);
    return { data: response }
  }

  @Get('/:id')
  @UseBefore(AuthMiddleware)
  async findOne(@Param('id') id: string, @Req() req: Request) {
    const response = await this.findOneUseCase.exec({ id, userId: req.userId });
    return { data: response }
  }
}