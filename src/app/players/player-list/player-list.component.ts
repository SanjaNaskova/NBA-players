import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';



export interface DataResponse {
  data: Player[],
  meta: any,
}

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {


  allPlayers: Player[] = [];
  players: Player[] = this.allPlayers;
  sort = false;

  


  constructor(private http: HttpClient, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.http.get<DataResponse>("https://www.balldontlie.io/api/v1/players").subscribe(res => {
      console.log(res);
      this.allPlayers = res.data.map(player => {
        return  new Player(player.id, player.first_name, player.last_name, player.position, player.team, player.city)
      });
      this.players = this.allPlayers;
    })
  }

  onSearchPlayer(searchName: string) {
    if(searchName) {
      this.players =   this.allPlayers.filter(player => player.first_name.toLowerCase().startsWith(searchName.toLowerCase()))
    }else {
      this.players = this.allPlayers;
    }    
  }

 
onSearchPosition(position: string) {
  if(!position) {
    this.players = this.allPlayers
  }else {
    this.players = this.allPlayers.filter(player =>  {
      if(player.position.length > 1) {
        let hasPosition = false;
        let playerPositions = player.position.split("-");

        playerPositions.forEach(pPosition => {
          if(pPosition.toLowerCase() === position.toLowerCase()) {
            hasPosition = true;
          }
           
        });

       return hasPosition; 
      }

      return player.position.toLowerCase() === position.toLowerCase()
    })
  }
  
}


onChangeOrder() {

  let sortFunct = (a:Player,b:Player) => {
    if (a.first_name > b.first_name) {
      return -1;
    }
  if (b.first_name > a.first_name) {
      return 1;
     }
   return 0;
  }


  if(this.sort) {
    this.players.sort(sortFunct)
  } else {
    this.players.sort(sortFunct).reverse();
  }

  this.sort = !this.sort;
 }

 addPlayerToMyTeam(player: Player) {
      this.playerService.addPlayer(player)
}  

}






