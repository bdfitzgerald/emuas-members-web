import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
	  	path: '',
		children: [
			{
				path: 'bookings',
				loadChildren: './bookings/bookings.module#BookingsModule'
			},
			{
				path: 'events',
				loadChildren: './events/events.module#EventsModule'
			},
			{
				path: '',
				loadChildren: './forum/forum.module#ForumModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
