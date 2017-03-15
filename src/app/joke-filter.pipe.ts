import { Pipe, PipeTransform } from '@angular/core';
import { Joke } from './joke';

@Pipe({
  name: 'jokeFilter'
})
export class JokeFilterPipe implements PipeTransform {
  transform(value: Array<Joke>, args?: any): any {
    return value.filter(joke => joke.setup.includes(args) || joke.punchline.includes(args));
  }
}
