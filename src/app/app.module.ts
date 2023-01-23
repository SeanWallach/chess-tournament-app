import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { ScorePairingsTableComponent } from './score-pairings-table/score-pairings-table.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms';
import { ButtonPanelComponent } from './button-panel/button-panel.component';
import { RulesPanelComponent } from './rules-panel/rules-panel.component';
import { NewPlayerPanelComponent } from './new-player-panel/new-player-panel.component';
import { FooterComponent } from './footer/footer.component';
import { CdkColumnDef } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    ScorePairingsTableComponent,
    PlayerComponent,
    ButtonPanelComponent,
    RulesPanelComponent,
    NewPlayerPanelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [CdkColumnDef], // maybe unessesary
  bootstrap: [AppComponent]
})
export class AppModule { }
