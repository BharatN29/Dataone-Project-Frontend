import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Movie } from '../movie';

@Injectable()
export class MovieService {
  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private movie: Movie;

  constructor(private _http:Http, private _htp:HttpClient) { }

  getMovies(page: number){
    return this._htp.get(this.baseUrl+'/movies?page='+page);
  }

  getMovie(movieid: number){
    return this._http.get(this.baseUrl+'/movie/'+movieid, this.options).map((response: Response)=> response.json())
      .catch(this.errorHandler);
  }

  deleteMovie(movieid: number){
    return this._http.delete(this.baseUrl+'/movie/'+movieid, this.options).map((response: Response)=> response.json())
      .catch(this.errorHandler);
  }

  createMovie(movie: Movie){
    return this._http.post(this.baseUrl+'/movie', JSON.stringify(movie), this.options).map((response: Response)=> response.json())
      .catch(this.errorHandler);
  }

  updateMovie(movie: Movie){
    return this._http.put(this.baseUrl+'/movie', JSON.stringify(movie), this.options).map((response: Response)=> response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response){
    return Observable.throw(error || "SERVER ERROR");
  }

  setter(movie: Movie){
    this.movie=movie;
  }

  getter(){
    return this.movie;
  }

}
