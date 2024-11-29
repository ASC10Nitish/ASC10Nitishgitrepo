// review-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Review } from '../model/reviews.model';  // Import the Review model
import { ReviewService } from '../service/review.service';  // Import the Review Service
import { Router } from '@angular/router';  // Import Router to navigate between views

@Component({
  selector: 'app-review-list',
  templateUrl: './reviewslist.component.html',
  styleUrls: ['./reviewslist.component.css']
})
export class ReviewsListComponent implements OnInit {
  reviews: Review[] = [];
  searchInput: any;
  searchReview: Review[] = [];

  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit(): void {
    // Fetching reviews from the Review Service on component initialization
    this.reviewService.getReviews().subscribe((reviewData) => {
      this.reviews = reviewData;
    });
  }

  // Delete a review
  deleteReview(toDeleteReview: Review): void {
    if (toDeleteReview.review_id !== undefined) {
      this.reviewService.deleteReview(toDeleteReview.review_id).subscribe(() => {
        this.reviews = this.reviews.filter(review => review.review_id !== toDeleteReview.review_id);
      });
    }
  }

  // Navigate to Add Review page
  addReview() {
    this.router.navigate(['/add-review']);
  }

  // Navigate to Update Review page
  updateReview(reviewId: string | undefined): void {
    if (reviewId !== undefined) {
      this.router.navigate(['update-review', reviewId]);
    } else {
      console.log('Review id is undefined');
    }
  }

  // Search for reviews by review_id
  searchReviews() {
    this.reviewService.getReviews().subscribe((data) => {
      this.searchReview = data.filter(review => review.review_id === this.searchInput);
      if (this.searchReview.length > 0) {
        alert('Review Found!');
      } else {
        alert('Review Not Found!');
      }
    });
  }

  // Log out function
  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}
