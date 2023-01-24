import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-new-player-panel',
  templateUrl: './new-player-panel.component.html',
  styleUrls: ['./new-player-panel.component.css']
})
export class NewPlayerPanelComponent implements OnInit{
  @Output() newPlayerData = new EventEmitter<{elo: number, name: string}>();

  name: FormControl;
  elo: FormControl;
  newPlayerForm: FormGroup;


  ngOnInit(): void {
    this.name = new FormControl('');
    this.elo = new FormControl('');

    // Example: subscribe to this observable. Term being the value put for name
    // Add a debounce time if you want it to look cooler
    // this.name.valueChanges.subscribe(term => {
    //   this.newPlayers.push(term);
    // })  

    this.newPlayerForm = new FormGroup({
      elo: this.elo,
      name: this.name,
    })
  }

  onSubmit() {
    // let player = {
    //   elo: this.newPlayerForm.elo,
    //   name: this.newPlayerForm.name
    // }

    this.newPlayerData.emit({elo: this.newPlayerForm.value.elo, name: this.newPlayerForm.value.name });
    console.log("emitted form data");

    // reset form after submission
    this.newPlayerForm.reset();
  }
}
