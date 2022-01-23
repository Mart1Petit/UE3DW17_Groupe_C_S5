import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from 'src/users/users.schema';

@Module({
  imports: [
    //TypeOrmModule.forFeature([Users])
    MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}])
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    
  ]
})
export class UsersModule {}