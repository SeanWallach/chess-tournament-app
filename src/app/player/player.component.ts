import { Component, Input } from '@angular/core';

export interface Player {
  name: string;
  elo: number;
};

export type Players = Array<Player>

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input('currPlayer') currPlayer: Player;
}
