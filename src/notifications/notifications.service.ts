import { Injectable, NotFoundException } from '@nestjs/common';
import { Notif } from './interfaces/notifications.interfaces';
import { NotifDto } from './dto/create-notification.dto';
import { NotifEntity } from './entities/notifications.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class NotificationsService {
    constructor(@InjectRepository(NotifEntity) private readonly notifRepository: Repository<NotifEntity> ){}

    async create(description:string): Promise<NotifEntity>{
        let newNotif ={description:description}
        //this.notifications = [...this.notifications, newNotif]  
        return await this.notifRepository.save(newNotif)

    }

    async readAll():Promise<NotifEntity[]>{
        //return this.notifications
        return this.notifRepository.find()
    }

    async readOne(id:number):Promise<NotifEntity>{
       /* const index = id-1
        if (index>this.notifications.length){
            return new NotFoundException("Notification not found")
        }
        else{
            return this.notifications[id-1]
        }*/
        return await this.notifRepository.findOneBy({id})
    }

    async delete(id:number):Promise<DeleteResult>{
        /*const index = id-1
        if (index>this.notifications.length){
            return new NotFoundException("Notification not found")
        }
        else{
            this.notifications.splice(index, 1);
        }
        return this.notifications*/
        return await this.notifRepository.delete(id)

    }
}
