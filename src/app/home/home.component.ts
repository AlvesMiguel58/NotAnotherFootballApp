import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Players, Teams, Leagues } from '../data';
import { HttpService } from '../services/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeSection: boolean = true;
  searchSection: boolean = false;
  currentSearch: string = '';
  searchResults: any[] = [];
  endpoint: string = '';
  isLoading: boolean = false;

  //Player variables
  player: any[] = [];
  players: any[] = Players;
  @ViewChild('playerDialog')
  playerDialog!: TemplateRef<any>;
  //Team variables
  team: any[] = [];
  teams: any[] = [];
  @ViewChild('teamDialog')
  teamDialog!: TemplateRef<any>;
  //League variables
  league: any[] = [];
  leagues: any[] = [];
  @ViewChild('leagueDialog')
  leagueDialog!: TemplateRef<any>;

  searchForm = new FormGroup({
    search: new FormControl('', {
      validators: [Validators.required]
    })
  });

  constructor(
    public dialog: MatDialog,
    public http: HttpService
  ) { }

  ngOnInit(): void { }

  //On the welcome section the user is propmted to select a category to search for
  pickOne(type: string) {
    this.currentSearch = type;
    this.homeSection = false;
    this.searchSection = true;
    // console.log(this.currentSearch);
  }

  //cancelSearch is called when the user clicks the cancel button
  cancelSearch() {
    this.homeSection = true;
    this.searchSection = false;
    this.currentSearch = '';
    this.searchResults = [];
    this.player = [];
    this.team = [];
    this.league = [];
  }

  //searchCategory is called when the user submits the search form
  searchCategory() {
    this.isLoading = true;
    console.log("Search triggered", this.searchForm.value);

    if (this.currentSearch === 'teams') {
      this.endpoint = 'teams';
    } else if (this.currentSearch === 'leagues') {
      this.endpoint = 'leagues';
    } else if (this.currentSearch === 'players') {
      this.endpoint = 'players';
      this.searchResults = Players;
      // Players section got scrapped because you need a team ID to get the players, so not possible by soley searching a player name
    }

    // this.http.getData(this.endpoint, this.searchForm.value) is calling the getData function in the httpservice.service.ts file
    this.http.getData(this.endpoint, this.searchForm.value)
      .subscribe((data: any) => {
        console.log(data);

        this.searchResults = data.response;
        // console.log('searchResults', this.searchResults);
        this.isLoading = false;
      },
        (error) => { console.log('Error', error) });

    this.searchForm.reset();
  }

  //------------------ PLAYERS SECTION ------------------
  //selectPlayer is called when a player is selected from the search results
  selectPlayer(player: any) {
    this.player = player;
    // console.log("Player selected", this.player);
    this.showPlayer(this.player);
  }

  //Opens dialog
  showPlayer(player: any) {
    this.dialog.open(this.playerDialog, { data: player });
  }
  //------------------ PLAYERS SECTION END ------------------
  //------------------ TEAMS SECTION ------------------
  //selectTeam is called when a team is selected from the search results
  selectTeam(team: any) {
    this.team = team;
    // console.log("team selected", this.team);
    this.showTeam(this.team);
  }

  //Opens dialog
  showTeam(team: any) {
    this.dialog.open(this.teamDialog, { data: team });
  }
  //------------------ TEAMS SECTION END ------------------
  //------------------ LEAGUE SECTION ------------------
  //selectleague is called when a league is selected from the search results
  selectLeague(league: any) {
    this.league = league;
    // console.log("league selected", this.league);
    this.showLeague(this.league);
  }

  //Opens dialog
  showLeague(league: any) {
    this.dialog.open(this.leagueDialog, { data: league });
  }
  //------------------ LEAGUE SECTION END ------------------
}

