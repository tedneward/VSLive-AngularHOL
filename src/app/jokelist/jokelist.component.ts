import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { JokeService } from '../joke.service';
import { Joke } from '../joke';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {

  @Input() private jokes: Array<Joke>;

  constructor(private jokeService: JokeService, private router: Router) {
  }

  ngOnInit() {
    this.jokes = this.jokeService.getJokes();
  }

  showJoke(joke: Joke) {
    this.router.navigate(['/jokes/' + joke.id]);
  }

}
