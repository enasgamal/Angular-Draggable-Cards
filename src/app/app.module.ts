import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import { FilterPeoplePipe } from './pipes/filter-people.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPeoplePipe,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule, BrowserAnimationsModule,DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
