import { Component } from '@angular/core';
import { Joke } from './joke';
import { Vote } from './vote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!';

  database : Joke[] = [
    new Joke("Why did the milennial chicken cross the road?",
      "Because it was his passion.",
      new Vote(1),
      new Vote(27))
  ];
}
