import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Players, Teams, Leagues } from '../data';

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

  //Player variables
  player: any[] = [];
  players: any[] = Players;
  @ViewChild('playerDialog')
  playerDialog!: TemplateRef<any>;
  //Team variables
  team: any[] = [];
  teams: any[] = Teams;
  @ViewChild('teamDialog')
  teamDialog!: TemplateRef<any>;
  //League variables
  league: any[] = [];
  leagues: any[] = Leagues;
  @ViewChild('leagueDialog')
  leagueDialog!: TemplateRef<any>;

  searchForm = new FormGroup({
    search: new FormControl('', {
      validators: [Validators.required]
    })
  });


  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void { }

  //On the welcome section the user is propmted to select a category to search for
  pickOne(type: string) {
    this.currentSearch = type;
    this.homeSection = false;
    this.searchSection = true;
    // console.log(this.currentSearch);
  }

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
    console.log("Search triggered", this.searchForm.value);
    this.searchForm.reset();

    if (this.currentSearch === 'players') {
      this.searchResults = this.players;
    } else if (this.currentSearch === 'teams') {
      this.searchResults = this.teams;
    } else if (this.currentSearch === 'leagues') {
      this.searchResults = this.leagues;
    }

    console.log(this.searchResults);
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

