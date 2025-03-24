import { Body, Controller, Get, Post, Req, UseBefore } from "routing-controllers";
import { AuthenticateUserInput, CreateUserInput } from "./user.input";
import { AuthenticateUserUseCase, CreateUserUseCase, GetUserMetricsUseCase } from "../../../domain/user";
import { Service } from "typedi";
import { Request } from "express";
import { AuthMiddleware } from "../../middleware/authenticate.middleware";

@Service()
@Controller('/user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly authenticateUseCase: AuthenticateUserUseCase,
    private readonly getUserMetricsUseCase: GetUserMetricsUseCase
  ) {}

  @Get('/metrics')
  @UseBefore(AuthMiddleware)
  async getMetrics(@Req() req: Request) {
    const response = await this.getUserMetricsUseCase.exec(req.userId);
    return { data: response };
  }

  @Post()
  async createUser(@Body() args: CreateUserInput) {
    const response = await this.createUserUseCase.exec(args);
    return { data: response };
  }

  @Post('/authenticate')
  async authenticate(@Body() args: AuthenticateUserInput) {
    const response = await this.authenticateUseCase.exec(args);
    return { data: response }
  }
}