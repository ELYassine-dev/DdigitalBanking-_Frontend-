import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl:'./navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  constructor(public authservice:LoginService,private route:Router) {
  }
  ngOnInit() {
  }
  handleLogout() {
    this.authservice.logout();
  }
}
