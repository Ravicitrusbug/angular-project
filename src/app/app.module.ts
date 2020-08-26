import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './section/header/header.component';
import { FooterComponent } from './section/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

import { SliderFeaturedComponent } from './pages/section/slider-featured/slider-featured.component';
import { SliderHomeComponent } from './pages/section/slider-home/slider-home.component';
import { SliderNewestComponent } from './pages/section/slider-newest/slider-newest.component';
import { SliderCommunityComponent } from './pages/section/slider-community/slider-community.component';
import { SearchFormComponent } from './pages/section/search-form/search-form.component';
import { CommunityComponent } from './pages/section/community/community.component';
import { ContentLibraryComponent } from './pages/section/content-library/content-library.component';
import { SwitchModeComponent } from './section/switch-mode/switch-mode.component';
import { NotificationComponent } from './section/notification/notification.component';
import { ProfileComponent } from './section/profile/profile.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		SearchComponent,
		SliderFeaturedComponent,
		SliderHomeComponent,
		SliderNewestComponent,
		SliderCommunityComponent,
		SearchFormComponent,
		CommunityComponent,
		ContentLibraryComponent,
		SwitchModeComponent,
		NotificationComponent,
		ProfileComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		CommonModule,
		CarouselModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
