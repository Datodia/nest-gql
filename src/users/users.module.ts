import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/users.schema';
import { UserService } from './users.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'user', schema: userSchema}])],
    providers: [UserService]
})
export class UsersModule {}
