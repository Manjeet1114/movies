import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Movie {
  id: number;
  title: string;
  year: number;
  rating?: number;
}
@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrls: ['./movie-app.component.css']
})
@Component({
  selector: 'app-movie-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-app.component.html'
})
export class MovieAppComponent {
  movies: Movie[] = [];
  searchTerm = '';
  apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.http.get<Movie[]>(this.apiUrl).subscribe(data => {
      this.movies = data;
    });
  }

  addMovie(title: string, year: number) {
    this.http.post(this.apiUrl, { title, year }).subscribe(() => this.loadMovies());
  }

  rateMovie(id: number, rating: number) {
    this.http.post(`${this.apiUrl}/${id}/rate`, { rating }).subscribe(() => this.loadMovies());
  }

  searchMovies() {
    if (!this.searchTerm.trim()) {
      this.loadMovies();
      return;
    }

    this.http.get<Movie[]>(`${this.apiUrl}/search?query=${this.searchTerm}`).subscribe(data => {
      this.movies = data;
    });
  }
}