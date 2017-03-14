import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { Vote } from '../vote';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() private model : Joke;

  constructor() { }

  ngOnInit() {
    /* This code is only necessary if the Joke is not passed in from the view; it is only in use in the first part of Lab 3.
    this.model = new Joke(
      "Why did the milennial chicken cross the road?",
      "Because it was his passion.",
      new Vote(1),
      new Vote(27)
    );
    */
  }

  public lolsUpvoted() : void {
    console.log("Cool! We made you LOL!", this.model);
  }
  public groansUpvoted() : void {
    console.log("Aw, sorry, we'll try harder next time. (Not really.)", this.model);
  }

}
