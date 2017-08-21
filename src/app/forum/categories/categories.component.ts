import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emuas-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class Categories implements OnInit {

  categories: any;

  constructor() { }

  ngOnInit() {
    this.categories = [
      {
        icon: 'error',
        color: 'tc-red-700',
        name: 'Need To Know',
        description: 'The really important stuff. If it\'s in here, you need to read it.',
        notifications: 3
      },
      {
        icon: 'chat',
        color: 'tc-indigo-700',
        name: 'General Notices',
        description: 'For anything that doesn\'t fit anywhere else.',
        notifications: 0
      },
      {
        icon: 'directions_run',
        color: 'tc-blue-700',
        name: 'Sports',
        description: 'Any sporting events and training coming up.',
        notifications: 2
      },
      {
        icon: 'flight',
        color: 'tc-black',
        name: 'Flying',
        description: 'All information or notices regarding flying',
        notifications: 1
      },
      {
        icon: 'near_me',
        color: 'tc-green-600',
        name: 'Force Development',
        description: 'All information or notices regarding force development',
        notifications: 0
      },
      {
        icon: 'local_bar',
        color: 'tc-yellow-700',
        name: 'Ents',
        description: 'All ents news and events',
        notifications: 2
      }
    ]
  }



}
