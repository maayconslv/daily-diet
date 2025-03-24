import { UserModel } from "@/domain/model/user.model";
import { User } from "@prisma/client";

export function mapUserDataDto({ email, id, name, username }: User): UserModel {
  return {
    email,
    id: String(id),
    name,
    username
  }
}