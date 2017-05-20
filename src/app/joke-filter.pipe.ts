import { Pipe, PipeTransform } from '@angular/core';
import { Joke } from './joke';

@Pipe({
  name: 'jokeFilter'
})
export class JokeFilterPipe implements PipeTransform {
  transform(value: Array<Joke>, args?: any): any {
    if (value) {
      return value.filter(joke => joke.setup.includes(args) || joke.punchline.includes(args));
    } else {
      return [];
    }
  }
}
