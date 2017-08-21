import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emuas-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItem implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit() {
  }

}
