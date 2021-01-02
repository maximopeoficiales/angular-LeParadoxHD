import { Component, OnInit } from '@angular/core';
import { RamdomUser } from 'src/app/models/RamdomUser';
import { RamdomUserService } from 'src/app/services/ramdomuser.service';

@Component({
  selector: 'app-ramdom-user',
  templateUrl: './ramdom-user.component.html',
  styleUrls: ['./ramdom-user.component.css'],
})
export class RamdomUserComponent implements OnInit {
  ramdomUsers: RamdomUser[] = [];
  constructor(private ramdomUserService: RamdomUserService) {}
  ngOnInit(): void {
    this.ramdomUserService.getRamdomUser().subscribe((ru) => {
      ru.forEach((e) => {
        let data = new RamdomUser(
          e.gender,
          e.email,
          e.phone,
          e.name,
          e.picture
        );
        this.ramdomUsers.push(data);
      });
    });
  }
}
