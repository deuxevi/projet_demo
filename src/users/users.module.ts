import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { NotificationsController } from 'src/notifications/notifications.controller';
import { NotificationsService } from 'src/notifications/notifications.service';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Module({
  imports: [NotificationsModule],
  controllers: [UsersController],
  providers: [UsersService]
})

@Entity()
export class UsersModule {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  first_name:string;

  @Column()
  last_name:string;

  @Column()
  sexe:string;

  @Column()
  age:string;
}

