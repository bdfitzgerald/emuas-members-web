import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emuas-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class Category implements OnInit {
  
  category: any;
  posts: any;

  constructor() { }

  ngOnInit() {
    this.category = {
      icon: 'error',
      color: 'tc-red-700',
      name: 'Need To Know',
      author: 'The really important stuff. If it\'s in here, you need to read it.',
      notifications: 3
    };

    this.posts = [
      {
        icon: 'error',
        name: 'Accommodation Booking',
        author: {
          name: 'Adjutant'
        },
        date: '2017/07/01',
        unread: true,
        messages: 1
      },
      {
        icon: 'error',
        name: 'UAS Muster - MISSING MEMORABILIA',
        author: {
          name: 'Adjutant'
        },
        date: '2017/07/01',
        unread: false,
        messages: 0
      },
      {
        icon: 'error',
        name: 'UAS Bursary Enhancement Eng O',
        author: {
          name: 'Adjutant'
        },
        date: '2017/07/01',
        unread: true,
        messages: 0
      },
      {
        icon: 'error',
        name: '6FTS UAS 2017 Muster',
        author: {
          name: 'Adjutant'
        },
        date: '2017/07/01',
        unread: true,
        messages: 1
      },
      {
        icon: 'error',
        name: 'Final Freedom of the City Pointers',
        author: {
          name: 'Adjutant'
        },
        date: '2017/07/01',
        unread: false,
        messages: 3
      }
    ]
  }

}
