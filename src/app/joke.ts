import { Vote } from './vote';

export class Joke {
  constructor(private _setup : string, private _punchline: string, private _lols: Vote, private _groans: Vote) {
  }

  public get setup() : string { return this._setup; }
  public get punchline() : string { return this._punchline; }
  public get lols() : number { return this._lols.voteCount; }
  public get groans() : number { return this._groans.voteCount; }

  public incrementLol() { this._lols.increment(); }

  public incrementGroan() { this._groans.increment(); }
}
