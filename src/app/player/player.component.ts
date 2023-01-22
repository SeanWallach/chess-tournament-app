import { Component } from '@angular/core';

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
  player: Player = {
    name: "Sean",
    elo: 1400,
  }
}
