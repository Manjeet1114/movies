import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Movie {
  id: number;
  title: string;
  year: number;
  rating?: number;
}

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  searchTerm = '';
  movies: Movie[] = []; // ✅ Correctly typed

  // Dummy methods to prevent other errors
  searchMovies() {}
  rateMovie(id: number, rating: number) {}
  addMovie(title: string, year: number) {}
}