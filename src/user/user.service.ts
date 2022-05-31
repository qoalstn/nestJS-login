import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { user, users } from './dataset/user.dataset';
import * as bcrypt from 'bcrypt';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    // {
    //   userId: 1,
    //   name: 'john',
    //   password: 'changeme',
    // },
    {
      // userCode: '00000000001',
      id: 'asdf',
      password: '$2b$10$0uEUYM/Peu.P6iXqcOY6XOvT0WgMmAp0JgzdzALo6Mv1gQ1KYHol2',
      name: '북극코알라',
      phone: '010-0000-0000',
      email: 'mail@naver.com',
      isAdmin: false,
      created_at: new Date(),
    },
    {
      // userCode: '00000000002',
      id: 'asdffds',
      password: 'guess',
      name: '아프리카펭귄',
      phone: '010-0000-1111',
      email: 'email@naver.com',
      isAdmin: true,
      created_at: new Date(),
    },
    {
      // userCode: '00000000003',
      id: '12erew',
      name: '태평양고라니',
      phone: '010-2222-0000',
      email: 'mail_test@naver.com',
      isAdmin: false,
      created_at: new Date(),
    },
  ];

  async findOne(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async create(createUserDto: CreateUserDto) {
    const { id, name, password, phone, email } = createUserDto;

    const existUser = await this.findOne(name);

    if (existUser) return { status: 400, msg: 'already exist user' };

    const salt = await bcrypt.genSalt(10);
    const hashed_password = bcrypt.hashSync(password, salt);
    try {
      this.users.push({
        id,
        password: hashed_password,
        name,
        phone,
        email,
        isAdmin: false,
        created_at: new Date(),
      });

      return { status: 201, insertId: this.users[this.users.length - 1] };
    } catch (e) {
      return { status: 500, errorMsg: 'fail update' };
    }
  }

  findAll() {
    return users;
  }

  // findOne(id: number) {
  //   return user;
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  getHello() {
    return;
  }
}
