import { Body, Controller, Post } from "routing-controllers";
import { Service } from "typedi";

@Service()
@Controller('/meal')
export class UserController {
  constructor() {}

  @Post()
  async createUser(@Body() args: any) {
    return { data: 'data' };
  }
}