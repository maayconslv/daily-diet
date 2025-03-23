import { Controller, Get } from "routing-controllers";

@Controller()
export class HelloController {
  @Get('/hello')
  async hello() {
    return { message: 'Hello world! '};
  }
}