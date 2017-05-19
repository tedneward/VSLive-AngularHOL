import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { JokeComponent } from './joke/joke.component';
import { JokelistComponent } from './jokelist/jokelist.component';
import { JokeFilterPipe } from './joke-filter.pipe';
import { JokeService } from './joke.service';

const appRoutes: Routes = [
  { path: 'jokes', component: JokelistComponent },
  { path: 'jokes/:jokeId', component: JokeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'jokes' }
];

@NgModule({
  declarations: [
    AppComponent,
    UpvoteComponent,
    JokeComponent,
    JokelistComponent,
    JokeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
