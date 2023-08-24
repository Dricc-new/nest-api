import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserShema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserShema
      }
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule { }
