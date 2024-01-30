import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: any;
  players: any[] = [];

  constructor(private dialogRef: MatDialogRef<TeamComponent>) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.team) {
      console.log('team card', this.team);
    }
  }

  selectPlayer(player: any) {
    console.log('player selected on teams', player);
  }

  closeDialog() {
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
