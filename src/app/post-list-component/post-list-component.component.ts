import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() PostListItemComponent: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };

  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.PostListItemComponent.loveIts = this.PostListItemComponent.loveIts + 1;
  }

  dontloveIt() {
    this.PostListItemComponent.loveIts = this.PostListItemComponent.loveIts - 1;
  }
}
