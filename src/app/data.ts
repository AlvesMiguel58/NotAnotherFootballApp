export const Players: any[] = [{
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

export const Teams: any[] = [
    {
        team: {
            country: "England",
            founded: 1878,
            id: 33,
            logo: "https://media.api-sports.io/football/teams/33.png",
            name: "Manchester United",
            national: false
        },
        venue: {
            address: "Sir Matt Busby Way",
            capacity: 76212,
            city: "Manchester",
            id: 556,
            image: "https://media.api-sports.io/football/venues/556.png",
            name: "Old Trafford",
            surface: "grass"
        },
        players: [
            {
                id: 882,
                name: "David de Gea",
                firstname: "David",
                lastname: "de Gea Quintana",
                age: 31,
                nationality: "Spain",
                height: "192 cm",
                weight: "76 kg",
                injured: false,
                photo: "https://media.api-sports.io/football/players/882.png"
            },
            {
                id: 883,
                name: "L. Grant",
                firstname: "Lee",
                lastname: "Grant",
                age: 38,
                nationality: "England",
                height: "193 cm",
                weight: "83 kg",
                injured: false,
                photo: "https://media.api-sports.io/football/players/883.png"
            },
            {
                id: 884,
                name: "S. Romero",
                firstname: "Sergio Germán",
                lastname: "Romero",
                age: 34,
                nationality: "Argentina",
                height: "192 cm",
                weight: "87 kg",
                injured: false,
                photo: "https://media.api-sports.io/football/players/884.png"
            },
            {
                id: 885,
                name: "E. Bailly",
                firstname: "Eric Bertrand",
                lastname: "Bailly",
                age: 27,
                nationality: "Côte d'Ivoire",
                height: "187 cm",
                weight: "77 kg",
                injured: false,
                photo: "https://media.api-sports.io/football/players/885.png"
            },
            {
                id: 886,
                name: "Diogo Dalot",
                firstname: "José Diogo",
                lastname: "Dalot Teixeira",
                age: 22,
                nationality: "Portugal",
                height: "183 cm",
                weight: "76 kg",
                injured: false,
                photo: "https://media.api-sports.io/football/players/886.png"
            }
        ]
    },
    {
        team: {
            country: "England",
            founded: 1880,
            id: 50,
            logo: "https://media.api-sports.io/football/teams/50.png",
            name: "Manchester City",
            national: false
        },
        venue: {
            address: "Rowsley Street",
            capacity: 55097,
            city: "Manchester",
            id: 555,
            image: "https://media.api-sports.io/football/venues/555.png",
            name: "Etihad Stadium",
            surface: "grass",
        }
    },
    {
        team: {
            country: "England",
            founded: null,
            id: 1854,
            logo: "https://media.api-sports.io/football/teams/1854.png",
            name: "Manchester City W",
            national: false
        },
        venue: {
            address: null,
            capacity: null,
            city: null,
            id: null,
            image: null,
            name: null,
            surface: null
        }
    },
    {
        team: {
            country: "England",
            founded: null,
            id: 4898,
            logo: "https://media.api-sports.io/football/teams/4898.png",
            name: "Manchester United W",
            national: false
        },
        venue: {
            address: null,
            capacity: null,
            city: null,
            id: null,
            image: null,
            name: null,
            surface: null
        }
    },
    {
        team: {
            country: "England",
            founded: null,
            id: 7197,
            logo: "https://media.api-sports.io/football/teams/7197.png",
            name: "Manchester City U21",
            national: false
        },
        venue: {
            address: "Grange Road",
            capacity: 4100,
            city: "Hyde, Cheshire",
            id: 3543,
            image: "https://media.api-sports.io/football/venues/3543.png",
            name: "Ewen Fields",
            surface: "grass",
        }
    },
    {
        team: {
            country: "England",
            founded: null,
            id: 7198,
            logo: "https://media.api-sports.io/football/teams/7198.png",
            name: "Manchester United U21",
            national: false
        },
        venue: {
            address: "Moss Lane",
            capacity: 6085,
            city: "Altrincham, Cheshire",
            id: 3549,
            image: "https://media.api-sports.io/football/venues/3549.png",
            name: "The J. Davidson Stadium",
            surface: "grass"
        }
    }
];

export const Leagues: any[] = [
    {
        league: {
            id: 253,
            name: "Major League Soccer",
            type: "League",
            logo: "https://media.api-sports.io/football/leagues/253.png"
        },
        country: {
            name: "USA",
            code: "US",
            flag: "https://media.api-sports.io/flags/us.svg"
        },
        seasons: {
            year: 2021,
            start: "2021-04-17",
            end: "2021-11-07",
            current: true
        },
        standings: [
            {
                team: {
                    id: 50,
                    name: "Manchester City",
                    logo: "https://media.api-sports.io/football/teams/50.png"
                },
                all: {
                    played: 31,
                    win: 23,
                    draw: 5,
                    lose: 3
                },
                rank: 1,
                points: 74,
                goalsDiff: 45,
                group: "Premier League",
                form: "WWWLW",
                status: "same",
                description: "Promotion - Champions League (Group Stage)"
            },
            {
                rank: 2,
                team: {
                    id: 33,
                    name: "Manchester United",
                    logo: "https://media.api-sports.io/football/teams/33.png"
                },
                all: {
                    played: 30,
                    win: 17,
                    draw: 9,
                    lose: 4
                },
                points: 60,
                goalsDiff: 25,
                group: "Premier League",
                form: "WWWDD",
                status: "same",
                description: "Promotion - Champions League (Group Stage)"
            }
        ]
    }
];