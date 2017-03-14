import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vote } from '../vote';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  @Input() private votes : number;
  private vote : Vote;

  constructor() { }

  ngOnInit() {
    this.vote = new Vote(this.votes);
  }

  clicked() : void {
    console.log("Clicked!");
    this.vote.increment();
  }
}
