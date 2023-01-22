import { Component } from '@angular/core';
import { Player } from '../player/player.component';

@Component({
  selector: 'app-new-player-panel',
  templateUrl: './new-player-panel.component.html',
  styleUrls: ['./new-player-panel.component.css']
})
export class NewPlayerPanelComponent {
  player: Player = {
    name: "sean",
    elo: 1400,
  }
}
