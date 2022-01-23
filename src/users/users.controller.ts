import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus,Res} from '@nestjs/common';
import { UsersService } from './users.service';
import {Users} from "src/users/users.schema";
import { response } from 'express';


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
  @Get()
  async getUsers( @Res() response,@Body() users:Users){
    const utilisateurs = await this.usersService.read();
    return response.status(HttpStatus.OK).json({utilisateurs});
  }
  @Delete('/:id')
  async deleteUsers(@Res() response,@Param('id') id){
    const deleteutilisateurs = await this.usersService.delete(id);
    return response.status(HttpStatus.OK).json({deleteutilisateurs});


  }
  @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() users: Users) {
        const updatedutilisateur = await this.usersService.update(id, users);
        return response.status(HttpStatus.OK).json({
          updatedutilisateur
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

