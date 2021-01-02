export interface IClient {
  id: number;
  name: string;
  age: number;
  hobby: string;
  type: UserType;
}
export enum UserType {
  Admin,
  Client,
  Programmer,
}
