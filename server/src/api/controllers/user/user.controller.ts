import { Body, Controller, Get, Post } from "routing-controllers";
import { AuthenticateUserInput, CreateUserInput } from "./user.input";
import { AuthenticateUserUseCase, CreateUserUseCase } from "../../../domain/user";
import { Service } from "typedi";

@Service()
@Controller('/user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly authenticateUseCase: AuthenticateUserUseCase
  ) {}

  @Get('/hello')
  async hello() {
    return { message: 'Hello world! '};
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