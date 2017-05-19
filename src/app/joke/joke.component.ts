import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joke } from '../joke';
import { Vote } from '../vote';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() private model: Joke;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const jokeId: number = this.route.snapshot.params['jokeId'];
    const jokes = this.route.snapshot.data[0]['jokes'];

    jokes.forEach( (it) => {
      if (it.id == jokeId) {
        this.model = it;
      }
    });
  }

  public lolsUpvoted(): void {
    console.log('Cool! We made you LOL!', this.model);
  }
  public groansUpvoted(): void {
    console.log('Aw, sorry, we\'ll try harder next time. (Not really.)', this.model);
  }

}
