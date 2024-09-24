import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private userS: UserService, private router: Router) {}
  ngOnInit(): void {
    let tmpData = localStorage.getItem('isUserLoggedIn');
    console.log(tmpData);

    if (!tmpData) {
      this.router.navigate(['/signin']);
    }
  }
}
