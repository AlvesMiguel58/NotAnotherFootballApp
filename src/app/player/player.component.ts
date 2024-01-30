import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: any;

  constructor(private dialogRef: MatDialogRef<PlayerComponent>) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.player) {
      console.log('player card', this.player);
    }
  }

  closeDialog() {
    // Write your stuff here

    this.dialogRef.close(); // <- Close the mat dialog

  }
}
