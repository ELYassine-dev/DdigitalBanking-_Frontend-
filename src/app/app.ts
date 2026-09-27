import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { LoginService } from './services/login-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(public authservice:LoginService) {
  }
  ngOnInit() {
// this.authservice.loadjwttokenfromlocalstorage();

  }
}

