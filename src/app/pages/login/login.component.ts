import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  value?: string
  password?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
