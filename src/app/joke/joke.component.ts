import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JokeService } from '../joke.service';
import { Joke } from '../joke';
import { Vote } from '../vote';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() private model: Joke;

  constructor(private jokeService: JokeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const jokeId: number = this.route.snapshot.params['jokeId'];
    console.log('Looking up joke', jokeId);
    this.model = this.jokeService.getJoke(jokeId);
  }

  public lolsUpvoted(): void {
    console.log('Cool! We made you LOL!', this.model);
  }
  public groansUpvoted(): void {
    console.log('Aw, sorry, we\'ll try harder next time. (Not really.)', this.model);
  }

}
