import {Joke} from './joke';
import {Vote} from './vote';

describe('Joke', () => {
  const setup = 'Why did the chicken cross the road?';
  const punchline = 'Because it was a milennial and "just had to be me"';
  const lol = new Vote(1);
  const groan = new Vote(1);

  it('should create an instance', () => {
    expect(new Joke(1, setup, punchline, lol, groan)).toBeTruthy();
  });

  it ('should store the constructor parameters as properties', () => {
    const joke = new Joke(1, setup, punchline, lol, groan);

    expect(joke.setup).toEqual(setup);
    expect(joke.punchline).toEqual(punchline);
    expect(joke.lols).toEqual(1);
    expect(joke.groans).toEqual(1);
  });

  it('should increment Votes and recognize the results', () => {
    const joke = new Joke(1, setup, punchline, lol, groan);

    joke.incrementLol();
    expect(joke.lols).toEqual(2);

    joke.incrementGroan();
    expect(joke.groans).toEqual(2);
  });
});
