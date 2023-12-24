import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomepageComponent } from './components/homepage/homepage.component';
import { AnimatedBackgroundComponent } from './components/animated-background/animated-background.component';
import { AnimatedBackgroundListComponent } from './components/animated-background-list/animated-background-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    AnimatedBackgroundComponent,
    AnimatedBackgroundListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
