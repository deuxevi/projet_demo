import { Injectable, NotFoundException } from '@nestjs/common';
import { Notif } from './interfaces/notifications.interfaces';
import { NotifDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {

    notifications:Notif[]=[
        { id: 1, date: "01/09/2023", description: "John Doe has been created" },
        { id: 2, date: "01/09/2023", description: "Jane Smith has been created" },
        { id: 3, date: "01/09/2023", description: "Michael Johnson has been created" },
        { id: 4, date: "01/09/2023", description: "Emily Brown has been created" },
        { id: 5, date: "01/09/2023", description: "David Wilson has been created" },
        { id: 6, date: "01/09/2023", description: "Sarah Jones has been created" },
        { id: 7, date: "01/09/2023", description: "Robert Davis has been created" },
        { id: 8, date: "01/09/2023", description: "Lisa Miller has been created" },
        { id: 9, date: "01/09/2023", description: "William Martinez has been created" },
        { id: 10, date: "01/09/2023", description: "Michelle Garcia has been created" },
        { id: 11, date: "01/09/2023", description: "James Anderson has been created" },
        { id: 12, date: "01/09/2023", description: "Jennifer White has been created" },
        { id: 13, date: "01/09/2023", description: "Charles Taylor has been created" },
        { id: 14, date: "01/09/2023", description: "Amanda Lee has been created" },
        { id: 15, date: "01/09/2023", description: "Thomas Harris has been created" }

    ]

    create(description:string){
        let newNotif:NotifDto ={id:this.notifications.length, date:"02/09/2023", description:description}
        this.notifications = [...this.notifications, newNotif]  

    }

    readAll():Notif[]{
        return this.notifications
    }

    readOne(id:number):any{
        const index = id-1
        if (index>this.notifications.length){
            return new NotFoundException("Notification not found")
        }
        else{
            return this.notifications[id-1]
        }
    }

    deleate(id:number){
        const index = id-1
        if (index>this.notifications.length){
            return new NotFoundException("Notification not found")
        }
        else{
            this.notifications.splice(index, 1);
        }
        return this.notifications

    }
}
