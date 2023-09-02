import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interfaces';
import { UsersDto } from './dto/create-user.dto';
import { NotificationsService } from 'src/notifications/notifications.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Post()
    createUser(@Body() user:UsersDto): any{
        this.usersService.create(user);
    }

    @Get()
    readAll():User[]{
        return this.usersService.readAll()
    }

    @Get(':id')
    readOne(@Param('id') id:string){
        return this.usersService.readOne(+id);
    }

    @Patch(':id')
    updateUser(@Param("id") id:string,@Body() user:UsersDto):any{
        return  this.usersService.update(+id ,user) ;
    }

    @Delete(':id')
    deleteUser(@Param ("id") id:string ): any{
        return   this.usersService.delete(+id );
        }


    
}
