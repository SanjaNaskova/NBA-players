import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-players-edit',
  templateUrl: './players-edit.component.html',
  styleUrls: ['./players-edit.component.css']
})

export class PlayersEditComponent implements OnInit {

  @Output() searchPlayer = new EventEmitter();
  @Output() playerPosition = new EventEmitter();
  @Output() changeOrder = new EventEmitter();
  playerName: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  onSearchPalyer() {
    this.searchPlayer.emit(this.playerName);
  }

  seachByPosition(position: string) {
    this.playerPosition.emit(position);
  }

  changeOrderBy() {
    this.changeOrder.emit();
  }



}
