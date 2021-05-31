import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Player } from "./player.model";

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

players: Player[] = [];    
player : BehaviorSubject<Player[]> = new BehaviorSubject(this.players);

addPlayer(player: Player) {
   this.players.push(player);
   this.player.next(this.players);
  }
}