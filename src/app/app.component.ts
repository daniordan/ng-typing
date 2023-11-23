import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';
  // solved = false;

  onInput(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    this.enteredText = (<HTMLInputElement>event.target).value;

    // another way to do it
    // if ((<HTMLInputElement>event.target).value === this.randomText)
    //   this.solved = true
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return enteredLetter === randomLetter ? 'correct' : 'incorrect';
  }
}
