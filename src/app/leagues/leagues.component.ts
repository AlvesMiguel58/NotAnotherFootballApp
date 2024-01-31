import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../services/httpservice.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  @Input() league: any;
  standings: any[] = [];
  isLoading: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<LeaguesComponent>,
    public http: HttpService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.league) {
      console.log('league card', this.league);
      this.getStandings(this.league.league.id);
    }
  }

  getStandings(leagueId: any) {
    this.isLoading = true;
    let data = {
      league: leagueId,
      season: 2023
    }

    // console.log('search params', data);
    this.http.getData('standings', data)
      .subscribe((res: any) => {
        this.standings = res.response[0].league.standings[0];
        console.log('standings', this.standings);
        this.isLoading = false;
      },
        (error) => {
          console.log('Error', error)
        });
  }

  selectTeam(team: any) {
    console.log('team selected', team);
  }

  closeDialog() {
    this.dialogRef.close(); // <- Close the mat dialog
  }
}
