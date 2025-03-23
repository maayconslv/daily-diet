export interface UserModel {
  id: string;
  username: string;
  name: string;
  email: string;
}

export interface CreateUserInputModel {
  name: string;
  username: string;
  password: string;
  email: string;
}

export interface AuthenticateUserInputModel {
  username: string;
  password: string;
}

export interface AuthenticateUserModel extends UserModel {
  token: string
}
