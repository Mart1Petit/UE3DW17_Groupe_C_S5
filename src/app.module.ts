import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './users/users.schema';
import {UsersService} from './users/users.service';
import {UsersController} from './users/users.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://chaima:chaimaabradi@cluster0.3sjpe.mongodb.net/Chaima_Abradi?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}]),
    UsersModule

  ],
  controllers: [AppController,UsersController],
  providers: [AppService,UsersService],
})
export class AppModule {}
