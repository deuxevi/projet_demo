import { Delete, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/users.interfaces';
import { NotificationsController } from 'src/notifications/notifications.controller';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class UsersService {
    constructor(private readonly notifsService:NotificationsService){}
    users:User[]=[
        { id:1, first_name:"John", last_name:"Doe", sexe:"M", age:"50" },
        { id: 2, first_name: "Jane", last_name: "Smith", sexe: "F", age: "35" },
        { id: 3, first_name: "Michael", last_name: "Johnson", sexe: "M", age: "45" },
        { id: 4, first_name: "Emily", last_name: "Brown", sexe: "F", age: "28" },
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


    ]

    description(user:User, opration:string){
        let description:string = user.first_name + " " + user.last_name + " " + opration
        this.notifsService.create(description)
    }

    create(user:User){
        this.users= [... this.users , user];
        this.description(user, "has been created")

    }

    readAll():User[]{
        return this.users

    }

    readOne(id:number):User{
        return this.users[id-1]

    }

    update(id:number, user:User):any{
        const index = id-1
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

        this.users[index] = userToUpdate
        this.description(user,"has been updated")
        return userToUpdate

    }

    delete(id:number):any{
        const index = id-1
        if (index>this.users.length){
            return new NotFoundException("User not found")
        }
        else{
            this.description(this.users[index],"has been deleted")
            this.users.splice(index, 1);
        }
        return this.users
    }


}
