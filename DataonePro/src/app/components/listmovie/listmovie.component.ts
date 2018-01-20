import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared-service/movie.service';
import { Movie } from '../../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})
export class ListmovieComponent implements OnInit {

  private movies: Array<any>; 
  private page: number=0;
  private pages: Array<number>;

  constructor(private _movieService: MovieService, private _router: Router) { }

  setPage(i, event: any){
    event.preventDefault();
    this.page=i;
    this.getMovies();
  }

  ngOnInit() {    
    this.getMovies();
  }

  getMovies(){
    this._movieService.getMovies(this.page).subscribe(
      data=>{
        // console.log(data);
        this.movies=data['content'];
        this.pages= new Array(data['totalPages']);
      },
      (error)=>{
        console.log(error.error.message);
      }
    )
  }

  deleteMovie(movie){
    this._movieService.deleteMovie(movie.movieid).subscribe((data)=> {
      this.movies.splice(this.movies.indexOf(movie), 1);
    }, (error)=> {
      console.log(error);
    });
  }
 
  updateMovie(movie){
    this._movieService.setter(movie);
    this._router.navigate(['/op']);
  }

  newMovie(){
    let movie = new Movie();
    this._movieService.setter(movie);
    this._router.navigate(['/op']);
  }
}

