import { Component, OnInit } from '@angular/core';

//models
import { User } from "../../model/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private user:User = {
    nombre:"Matias",
    apellido:"Silva",
    rol:"Usuario Web",
    image:"../../assets/img/avatar-2.jpg"
  }

  constructor() { }

  ngOnInit() {
  }

}
