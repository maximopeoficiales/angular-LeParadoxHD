import { Component, OnInit } from '@angular/core';
import { IClient, UserType } from 'src/app/others/IClient';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  isLogged: boolean = false;
  nivel = 0;
  constructor() {}

  ngOnInit(): void {}
  users: IClient[] = [
    {
      id: 1,
      name: 'maximo',
      age: 4,
      hobby: 'Jugar',
      type: UserType.Admin,
    },
    {
      id: 2,
      name: 'maximo2',
      age: 55,
      hobby: 'Jugar 2',
      type: UserType.Client,
    },
  ];
  user: IClient = <IClient>{
    id: 1,
    name: 'maximo',
    age: 4,
    hobby: 'Jugar',
    type: UserType.Admin,
  };
  mostrar(): void {
    console.log(this.user);
  }
}
