import { Controller, Get, UseGuards, HttpStatus, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('client id',process.env.APP_ID)
    console.log('client secret',process.env.SECRET_ID)
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    console.log('client id',process.env.APP_ID)
    console.log('client secret',process.env.SECRET_ID)

    return HttpStatus.OK;

  }

  @Get("/facebook/redirect")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }
}