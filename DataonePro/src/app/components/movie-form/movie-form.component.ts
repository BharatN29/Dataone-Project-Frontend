import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { Router } from '@angular/router';
import { MovieService } from '../../shared-service/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  private movie: Movie;

  constructor(private _movieService: MovieService, private _router: Router) { }

  ngOnInit() {
    this.movie=this._movieService.getter();
  }

  processForm(){
    if(this.movie.movieid == undefined){
      this._movieService.createMovie(this.movie).subscribe((movie)=> {
        console.log(movie);
        this._router.navigate(['/']);
      }, (error)=>{
        alert("please fill the required field.");
      });
    }else{
      this._movieService.updateMovie(this.movie).subscribe((movie)=> {
        console.log(movie);
        this._router.navigate(['/']);
      }, (error)=> {
        alert("please fill the required field.");
      });
    }
  }
  
}
