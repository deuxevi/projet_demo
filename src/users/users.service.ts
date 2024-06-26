import { Delete, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/users.interfaces';
import { NotificationsController } from 'src/notifications/notifications.controller';
import { NotificationsService } from 'src/notifications/notifications.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository <UserEntity>,  private readonly notifsService:NotificationsService){}
    /*users:User[]=[
        { id: 5, first_name: "David", last_name: "Wilson", sexe: "M", age: "55" },
        { id: 6, first_name: "Sarah", last_name: "Jones", sexe: "F", age: "42" },
        { id: 7, first_name: "Robert", last_name: "Davis", sexe: "M", age: "38" },
        { id: 8, first_name: "Lisa", last_name: "Miller", sexe: "F", age: "30" },
        { id: 9, first_name: "William", last_name: "Martinez", sexe: "M", age: "47" },
        { id: 10, first_name: "Michelle", last_name: "Garcia", sexe: "F", age: "31" },
        { id: 11, first_name: "James", last_name: "Anderson", sexe: "M", age: "60" },
        { id: 12, first_name: "Jennifer", last_name: "White", sexe: "F", age: "29" },
        { id: 13, first_name: "Charles", last_name: "Taylor", sexe: "M", age: "53" },
        { id: 14, first_name: "Amanda", last_name: "Lee", sexe: "F", age: "37" },
        { id: 15, first_name: "Thomas", last_name: "Harris", sexe: "M", age: "44" },


    ]*/

    description(user:User, opration:string){
        let description:string = user.first_name + " " + user.last_name + " " + opration
        this.notifsService.create(description)
    }

    async create(user:User):Promise<User>{
        //this.users= [... this.users , user];
        this.description(user, "has been created")
        return await this.userRepository.save(user)

    }

    async readAll():Promise<User[]>{
        //return this.users
        return await this.userRepository.find()

    }

    async readOne(id:number):Promise<User>{
        //return this.users[id-1]
        return await this.userRepository.findOneBy({id})

    }

    async update(id:number, user:User):Promise<UpdateResult>{
        /*const index = id-1
        let userToUpdate:User;
        if (index>=this.users.length){
            return new NotAcceptableException("User not found")
        }
        else{
            userToUpdate = this.users[index]
        }
        if (user.age){
            userToUpdate.age = user.age
        }
        if (user.first_name){
            userToUpdate.first_name = user.first_name
        }
        if (user.last_name){
            userToUpdate.last_name = user.last_name
        }
        if (user.sexe){
            userToUpdate.sexe = user.sexe
        }

        this.users[index] = userToUpdate*/
        this.description(user,"has been updated")
        return await this.userRepository.update(id, user)

    }

    async delete(id:number):Promise<DeleteResult>{
       /* const index = id-1
        if (index>this.users.length){
            return new NotFoundException("User not found")
        }
        else{
            this.description(this.users[index],"has been deleted")
            //this.users.splice(index, 1);
            this.userRepository.delete(id)
        }*/
        return await this.userRepository.delete(id)
    }


}
