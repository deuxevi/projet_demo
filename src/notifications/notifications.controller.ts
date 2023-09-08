import { Controller, Get, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notif } from './interfaces/notifications.interfaces';
import { NotifEntity } from './entities/notifications.entity';

@Controller('notifications')
export class NotificationsController {

    constructor(private readonly notificationsService:NotificationsService){}

    @Get()
    async readAllNotif():Promise<NotifEntity[]>{
        return this.notificationsService.readAll()
    }

    @Get(':id')
    async readOneNotif(@Param('id') id:string):Promise<NotifEntity>{
        return await this.notificationsService.readOne(+id);
    }

}
