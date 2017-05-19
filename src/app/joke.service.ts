import { Injectable } from '@angular/core';
import { Joke } from './joke';
import { Vote } from './vote';

@Injectable()
export class JokeService {
  public static database: Joke[] = [
    new Joke(1, 'Why did the milennial chicken cross the road?',
      'Because it was his passion.',
      new Vote(1),
      new Vote(27)),
    new Joke(2, 'Why did the political chicken cross the road?',
      'He didn\'t! ALTERNATIVE FACTS!',
      new Vote(0),
      new Vote(0)),
    new Joke(3, 'Why did the technical support chicken cross the road?',
      'Because he heard that it worked on the computer over there.',
      new Vote(0),
      new Vote(2)),
    new Joke(4, 'Why did the speaker chicken cross the road?',
      'I\'m sorry, we don\'t really have time to take that question now, but if you\'d like I can send you a consulting rate card...',
      new Vote(1),
      new Vote(27))
  ];

  constructor() { }

  getJokes(): Array<Joke> {
    return JokeService.database;
  }

  getJoke(jokeId: number) {
    console.log('Looking up joke #', jokeId);
    let joke: Joke = null;
    JokeService.database.forEach( (it) => {
      if (it.id == jokeId) {
        console.log('Found it!');
        joke = it;
      }
    });
    return joke;
  }
}
