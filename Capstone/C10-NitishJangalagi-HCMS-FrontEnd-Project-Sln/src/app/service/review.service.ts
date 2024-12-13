import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../model/reviews.model'; // You should define this model

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl: string = 'http://localhost:3000/reviews'; // Replace with your backend URL

  constructor(private httpClient: HttpClient) {}

  // Get all reviews
  getReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.baseUrl);
  }

  // Get a review by ID
  getReviewById(id: number): Observable<Review> {
    return this.httpClient.get<Review>(`${this.baseUrl}/${id}`);
  }

  // Create a new review
  createReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(this.baseUrl, review);
  }

  // Update an existing review
  updateReview(id: number, review: Review): Observable<Review> {
    return this.httpClient.put<Review>(`${this.baseUrl}/${id}`, review);
  }

  // Delete a review
  deleteReview(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
