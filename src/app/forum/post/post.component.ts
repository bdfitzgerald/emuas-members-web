import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emuas-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class Post implements OnInit {

  post: any;
  comments: any[];

  constructor() { }

  ngOnInit() {
    this.post = {
      name: 'Accommodation Booking',
      user: 'Adjutant',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }

}
