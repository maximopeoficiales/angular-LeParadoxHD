export class RamdomUser {
  gender: string = '';
  email: string = '';
  phone: string = '';
  name: NameRamdomUser;
  picture: PictureRamdomUser;
  getName(): string {
    return `${this.name.title} ${this.name.first} ${this.name.last}`;
  }
  constructor(
    gender: string,
    email: string,
    phone: string,
    name: NameRamdomUser,
    picture: PictureRamdomUser
  ) {
    this.gender = gender;
    this.email = email;
    this.phone = phone;
    this.name = name;
    this.picture = picture;
  }
}
export class NameRamdomUser {
  title: string = '';
  first: string = '';
  last: string = '';
  constructor(title: string, first: string, last: string) {
    this.title = title;
    this.first = first;
    this.last = last;
  }
}
export class PictureRamdomUser {
  large: string = '';
  medium: string = '';
  thumbnail: string = '';
  constructor(large: string, medium: string, thumbnail: string) {
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;
  }
}
