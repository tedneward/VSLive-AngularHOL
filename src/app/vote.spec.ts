import {Vote} from './vote';

describe('Vote', () => {
  it('should create an instance', () => {
    expect(new Vote(10)).toBeTruthy();
  });

  it('should remember the votes passed in on construction', () => {
    let v = new Vote(10);
    expect(v.voteCount).toEqual(10);
  });

  it('should increment a vote count and remember the new value', () => {
    let v = new Vote(10);
    expect(v.voteCount).toEqual(10);
    v.increment();
    expect(v.voteCount).toEqual(11);
  });
});
