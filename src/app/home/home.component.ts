import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  homeSection: boolean = false;
  searchSection: boolean = true;
  currentSearch: string = 'players';
  searchResults: any[] = [];
  player: any[] = [];

  players: any[] = [{
    player: {
      id: 276,
      name: "Neymar",
      firstname: "Neymar",
      lastname: "da Silva Santos Júnior",
      age: 29,
      nationality: "Brazil",
      height: "175 cm",
      weight: "68 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/276.png",
      birth: {
        date: "1992-02-05",
        place: "Mogi das Cruzes",
        country: "Brazil"
      }
    },
    statistics: {
      0: {
        team: {
          id: 85,
          name: "Paris Saint Germain",
          logo: "https://media.api-sports.io/football/teams/85.png"
        },
        league: {
          id: 61,
          name: "Ligue 1",
          country: "France",
          logo: "https://media.api-sports.io/football/leagues/61.png",
          flag: "https://media.api-sports.io/flags/fr.svg",
          season: 2020
        },
        games: {
          appearences: 13,
          lineups: 10,
          minutes: 975,
          number: 34,
          position: "Attacker",
          rating: "7.307692",
          captain: false
        },
        shots: {
          total: 39,
          on: 15
        },
        goals: {
          total: 6,
          conceded: 0,
          assists: 3,
          saves: null
        },
        passes: {
          total: 660,
          key: 35,
          accuracy: 68
        },
        tackles: {
          total: 8,
          blocks: null,
          interceptions: 6
        },
        duels: {
          won: 122,
          total: 247
        },
        dribbles: {
          attempts: 104,
          success: 60,
          past: null
        },
        fouls: {
          drawn: 51,
          committed: 22
        },
        cards: {
          yellow: 5,
          yellowred: 1,
          red: 1
        },
        penalty: {
          won: null,
          commited: null,
          scored: 3,
          missed: 0,
          saved: null
        }
      }
    }
  }];

  searchForm = new FormGroup({
    search: new FormControl('', {
      validators: [Validators.required]
    })
  });

  @ViewChild('playerDialog')
  playerDialog!: TemplateRef<any>;

  constructor(public dialog: MatDialog,) {
    setTimeout(() => {
      this.player = this.players[0];
      this.showPlayer(this.players[0]);
    }, 1000);
  }

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
  }

  searchCategory() {
    // console.log("Search triggered", this.searchForm.value);
    this.searchForm.reset();

    if (this.currentSearch === 'players') {
      this.searchResults = this.players;
    }
    console.log(this.searchResults);
  }

  selectPlayer(player: any) {
    this.player = player;
    console.log("Player selected", this.player);
    this.showPlayer(this.player);
  }

  //Opens dialog
  showPlayer(player: any) {
    this.dialog.open(this.playerDialog, { data: player });
  }
}
