import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<LeaguesComponent>) { }
  @Input() league: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.league) {
      console.log('league card', this.league);
    }
  }

  closeDialog() {
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
