import { Component } from '@angular/core';
// import { random } from 'faker';
// import { faker } from '@faker-js/faker';
// import { simpleFaker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = this.generateRandomSentence();
  // randomText = simpleFaker.string.alphanumeric();
  // randomText = faker.lorem.sentence();
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

  generateRandomSentence() {
    const subjects = [
      'The cat',
      'Our neighbor',
      'A scientist',
      'The teacher',
      'A musician',
    ];
    const verbs = ['plays', 'runs', 'jumps', 'drives', 'sings', 'explores'];
    const objects = [
      'in the park',
      'a lovely melody',
      'every day',
      'the guitar',
      'a new theory',
      'at home',
    ];
    const adverbs = [
      'quickly',
      'musically',
      'enthusiastically',
      'nervously',
      'joyfully',
      'professionally',
    ];

    const randomElement = (array: string[]) =>
      array[Math.floor(Math.random() * array.length)];

    return `${randomElement(subjects)} ${randomElement(verbs)} ${randomElement(
      objects
    )} ${randomElement(adverbs)}.`;
  }
}
