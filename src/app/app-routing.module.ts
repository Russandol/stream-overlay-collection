import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {
  AnimatedBackgroundListComponent
} from "./components/animated-background-list/animated-background-list.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'animated-background-list', component: AnimatedBackgroundListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
