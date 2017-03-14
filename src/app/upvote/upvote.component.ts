import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vote } from '../vote';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  @Input() private model : number | Vote;

  @Output() private onIncrement = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    if (! (this.model instanceof Vote)) {
      this.model = new Vote(this.model);
    }
  }

  clicked() : void {
    console.log("Clicked!");
    (this.model as Vote).increment();
    this.onIncrement.emit((this.model as Vote).voteCount);
  }
}
