import { Component } from '@angular/core';

@Component({
  selector: 'emuas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = [
    {
      icon: 'library_books',
      route: '/',
      title: 'Forum',
    },
    {
      icon: 'library_books',
      route: '/',
      title: 'Groups',
    },
    {
      icon: 'event_note',
      route: '.',
      title: 'Events',
    },
    {
      icon: 'today',
      route: '.',
      title: 'Bookings',
    },
    {
      icon: 'person',
      route: '.',
      title: 'Members',
    },
  ];
  usermenu: Object[] = [
    {
      icon: 'tune',
      route: '.',
      title: 'Account settings',
    },
    {
      icon: 'exit_to_app',
      route: '.',
      title: 'Sign out',
    },
  ];
}
