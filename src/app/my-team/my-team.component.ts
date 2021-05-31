import { Component, OnDestroy, OnInit } from '@angular/core';
import { Player } from '../players/player.model'
import { PlayerService } from '../players/player.service';


@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit, OnDestroy {


  myPlayers: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {

    this.playerService.player.subscribe(players => {
      this.myPlayers = players

    })
  }

  ngOnDestroy() {

  }

}
