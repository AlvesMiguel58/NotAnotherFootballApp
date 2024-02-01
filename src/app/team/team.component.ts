import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../services/httpservice.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: any;
  couches: any[] = [];
  players: any[] = [];
  isLoading: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<TeamComponent>,
    public http: HttpService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.team) {
      console.log('team card', this.team);
      this.getCoaches(this.team.team.id);
      this.getPlayers(this.team.team.id);
    }
  }

  selectPlayer(player: any) {
    console.log('player selected on teams', player);
  }

  getCoaches(teamId: any) {
    let data = {
      team: teamId,
    }

    // console.log('search params', data);
    this.http.getData('coachs', data)
      .subscribe((res: any) => {
        this.couches = res.response;
        // console.log('couches', this.couches);
      },
        (error) => {
          console.log('Error', error)
        });
  }

  //gets the players for the team via the api with teamId
  getPlayers(teamId: any) {
    this.isLoading = true;
    let data = {
      team: teamId,
      season: 2023
    }

    // console.log('search params', data);
    this.http.getData('players', data)
      .subscribe((res: any) => {
        this.players = res.response;
        this.isLoading = false;
        // console.log('players', this.players);
      },
        (error) => {
          console.log('Error', error)
        });
  }

  closeDialog() {
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
