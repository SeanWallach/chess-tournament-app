import { Component } from '@angular/core';
import { Player } from './player/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'West End Chess Crew';

  players: Player[] = [];
  selectedPlayer: Player | undefined;
  
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
}
