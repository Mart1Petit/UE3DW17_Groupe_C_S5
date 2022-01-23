import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus,Res} from '@nestjs/common';
import { UsersService } from './users.service';
import {Users} from "src/users/users.schema";


@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
    async createUsers(@Res() response, @Body() users: Users) {
      const newUsers = await this.usersService.create(users);
      return response.status(HttpStatus.CREATED).json({
          newUsers
      })
  }
  }
  /*@Post('createuser')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('user/:id')
  findOne(@Param('id') id: number) {
      return this.usersService.findOne(+id);
  }


  @Put('updateuser')
  update(@Body('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('deleteuser')
  remove(@Body('id') id: number) {
    return this.usersService.remove(+id);
  }*/

