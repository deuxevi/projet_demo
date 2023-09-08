import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interfaces';
import { UsersDto } from './dto/create-user.dto';
import { NotificationsService } from 'src/notifications/notifications.service';
import { UserEntity } from './entities/users.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Post()
    async createUser(@Body() user:UserEntity): Promise<UserEntity>{
       return await this.usersService.create(user);
    }

    @Get()
    async readAll():Promise<UserEntity[]>{
        return await this.usersService.readAll()
    }

    @Get(':id')
    async readOne(@Param('id') id:string):Promise<UserEntity>{
        return await this.usersService.readOne(+id);
    }

    @Patch(':id')
    async updateUser(@Param("id") id:string,@Body() user:UsersDto):Promise<UpdateResult>{
        return await this.usersService.update(+id ,user) ;
    }

    @Delete(':id')
    async deleteUser(@Param ("id") id:string ): Promise<DeleteResult>{
        return await this.usersService.delete(+id );
        }


    
}
