import { JokeFilterPipe } from './joke-filter.pipe';

describe('JokeFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new JokeFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
