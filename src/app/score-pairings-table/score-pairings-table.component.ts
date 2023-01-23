import { Component, OnInit } from '@angular/core';
import { PLAYERS } from '../mock-players';
import { Player } from '../player/player.component';

@Component({
  selector: 'app-score-pairings-table',
  templateUrl: './score-pairings-table.component.html',
  styleUrls: ['./score-pairings-table.component.css']
})

export class ScorePairingsTableComponent{
  players = PLAYERS;
  selectedPlayer: Player | undefined;

  dataSource = PLAYERS; 

  displayedColumns : string[] = ['names','score'];

  // constructor(private service: PlayerService) { }

  // ngOnInit() {
  //   this.players = PLAYERS;
  //   this.columndefs = ['names','round1','score'];
  // }

  // selectPlayer(player: Player) { this.selectedPlayer = player; }
}
