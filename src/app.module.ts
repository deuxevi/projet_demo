import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, NotificationsModule,TypeOrmModule.forRoot({type:"sqlite", database:"projet_demoDB",entities:[__dirname + "/**/*.entity{.ts,.js}"],synchronize:true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
