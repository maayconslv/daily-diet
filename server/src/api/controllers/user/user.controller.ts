import { Body, Controller, Get, Post } from "routing-controllers";
import { CreateUserInput } from "./user.input";
import { CreateUserUseCase } from "../../../domain/user";
import { Service } from "typedi";
import { UserModel } from "@/domain/model/user.model";

@Service()
@Controller('/user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Get('/hello')
  async hello() {
    return { message: 'Hello world! '};
  }

  @Post()
  createUser(@Body() args: CreateUserInput): Promise<UserModel> {
    return this.createUserUseCase.exec(args);
  }
}