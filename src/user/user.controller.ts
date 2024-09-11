import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get("/signup")
  getSignup() {
    return "Page d'inscription"
  }

  @Get("/login")
  getLogin() {
    return "Page de connexion"
  }
}
