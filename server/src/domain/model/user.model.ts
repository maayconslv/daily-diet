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
