import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/schemas/user.schema';
import { Model } from 'mongoose';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(jwtPayload: JwtPayload) {
    const user = await this.userModel.findOne({
      _id: jwtPayload.userId,
    });
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }

  async createAccessToken(jwtPayload: JwtPayload) {
    return this.jwtService.sign(jwtPayload);
  }
}
