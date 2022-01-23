import { Injectable } from '@nestjs/common';
import {Users,UsersDocument} from 'src/users/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose";

@Injectable()
export class UsersService {

  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>){}

  async create(users: Users): Promise<Users> {
    const newUsers = new this.usersModel(users);
    return newUsers.save();
}
}
 /* constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>
) { }

  createUser(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    await this.usersRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }

}*/
