import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // async create(createUserDto: CreateUserDto): Promise<User> {
    // const { username, email, password } = createUserDto;
    // const hashedPassword = await bcrypt.hash(password, 10);

    // const user = this.userRepository.create({ username, email, password: hashedPassword });
    // return await this.userRepository.save(user);
    // return await this.userRepository.save({"Should create a user"});
  // }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({id});
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({id}); 
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const updatedUser = Object.assign(user, updateUserDto);
    return await this.userRepository.save(updatedUser);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id); 
  }
}