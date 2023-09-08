import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { NotificationsModule } from 'src/notifications/notifications.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserEntity } from './entities/users.entity';
@Module({
  imports: [NotificationsModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule {}

