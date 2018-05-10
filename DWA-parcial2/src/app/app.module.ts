import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ComicComponent } from './comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
