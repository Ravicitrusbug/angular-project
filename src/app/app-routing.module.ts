import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'home', component: HomeComponent },
			{ path: 'search', component: SearchComponent },
			{ path: '**', redirectTo: 'home' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
