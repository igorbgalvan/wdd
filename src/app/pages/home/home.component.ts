import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadComponent } from 'src/app/components/load/load.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.openLoad()
  }

  openLoad(){
    this.dialog.open(LoadComponent, {
      width: '500px'
    })
  }

}
