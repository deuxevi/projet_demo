import { Controller, Get, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notif } from './interfaces/notifications.interfaces';

@Controller('notifications')
export class NotificationsController {

    constructor(private readonly notificationsService:NotificationsService){}

    @Get()
    readAllNotif():Notif[]{
        return this.notificationsService.readAll()
    }

    @Get(':id')
    readOneNotif(@Param('id') id:string):Notif{
        return  this.notificationsService.readOne(+id);
    }

}
