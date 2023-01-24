import { Component } from '@angular/core';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css']
})
export class ButtonPanelComponent {
  selection: string = "";

  newPlayerPanelOpen = false;

  onNewPlayerPress() {
    if (this.newPlayerPanelOpen) {
      this.newPlayerPanelOpen = false;
    } else {
      this.newPlayerPanelOpen = true;
    }
  }

  onRemovePlayerPress() {
    if (this.newPlayerPanelOpen) {
      this.newPlayerPanelOpen = false;
    } else {
      this.newPlayerPanelOpen = true;
    }
  }

  onNewRoundPress() {
    if (this.newPlayerPanelOpen) {
      this.newPlayerPanelOpen = false;
    } else {
      this.newPlayerPanelOpen = true;
    }
  }

  onEndTournamentPress() {
    if (this.newPlayerPanelOpen) {
      this.newPlayerPanelOpen = false;
    } else {
      this.newPlayerPanelOpen = true;
    }
  }

  // Received new player data, can close new player panel
  onNewPlayerData() {
    console.log('received new player data');
    this.newPlayerPanelOpen = false;
  }
}
