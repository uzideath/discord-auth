import { Controller, Get, UseGuards } from '@nestjs/common';
import { Routes } from 'src/utils/constants';
import { DiscordAuthGuard } from '../guards/auth.guard';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { AuthUser } from 'src/utils/decorators/auth.decorator';
import { Users } from 'src/modules/database/schemas/Users';

@Controller(Routes.AUTH)
export class AuthController {

    @Get('login')
    @UseGuards(DiscordAuthGuard)
    public login() { }

    @Get('status')
    @UseGuards(AuthenticatedGuard)
    public status(@AuthUser() user: Users) {
        return user;
    }

    @Get('redirect')
    @UseGuards(DiscordAuthGuard)
    public redirect() { }

    @Get('logout')
    public logout() { }
}
