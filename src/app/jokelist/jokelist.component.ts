import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-jokelist',
  templateUrl: './jokelist.component.html',
  styleUrls: ['./jokelist.component.css']
})
export class JokelistComponent implements OnInit {

  @Input() private jokes : Array<Joke>;

  constructor() { }

  ngOnInit() {
  }

}
