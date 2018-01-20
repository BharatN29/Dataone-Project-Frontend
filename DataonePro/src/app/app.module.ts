import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { ListmovieComponent } from './components/listmovie/listmovie.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieService } from './shared-service/movie.service';

const appRoutes: Routes= [
  {path:'', component: ListmovieComponent}, 
  {path:'op', component: MovieFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListmovieComponent,
    MovieFormComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
