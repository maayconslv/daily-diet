import { Service } from "typedi";
import { Repository } from "typeorm";
import { prisma } from "../db/db.config";
import { User } from "@prisma/client";

interface CreateUserDataInput {
  name: string;
  email: string;
  passwordHash: string;
  username: string;
}

@Service()
export class UserDataSource {
  findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  findByUsername(username: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { username } });
  }

  save(input: CreateUserDataInput): Promise<User> {
    return prisma.user.create({ data: { ...input } });
  }

  findById(id: number): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }
}