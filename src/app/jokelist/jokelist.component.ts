import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Joke } from '../joke';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {

  @Input() private jokes: Array<Joke>;

  constructor(route: ActivatedRoute, private router: Router) {
    this.jokes = route.snapshot.data[0]['jokes'];
  }

  ngOnInit() {
  }

  showJoke(joke: Joke) {
    console.log('You chose the joke that starts... ', joke.setup);
    this.router.navigate(['/jokes/' + joke.id]);
  }

}
