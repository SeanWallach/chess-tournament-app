import { Component } from '@angular/core';
import { PLAYERS } from '../mock-players';
import { Player } from '../player/player.component';

@Component({
  selector: 'app-score-pairings-table',
  templateUrl: './score-pairings-table.component.html',
  styleUrls: ['./score-pairings-table.component.css']
})

export class ScorePairingsTableComponent{
  // players: Player[] = [];
  players = PLAYERS;
  selectedPlayer: Player | undefined;

  tableData = []; 

  columndefs : any[] = ['names','round1','score'];

  // constructor(private service: PlayerService) { }

  // ngOnInit() {
  //   this.players = this.service.getHeroes();
  // }

  // selectPlayer(player: Player) { this.selectedPlayer = player; }
}
