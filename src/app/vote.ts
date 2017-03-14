export class Vote {
  constructor(private votes : number) {

  }

  public get voteCount() : number {
    return this.votes;
  }

  public increment() : void {
    this.votes += 1;
  }
}
