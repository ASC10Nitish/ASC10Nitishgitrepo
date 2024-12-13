import { Component, OnInit } from '@angular/core';
import { Review } from '../model/reviews.model';  
import { ReviewService } from '../service/review.service';  
import { Router } from '@angular/router';  

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
    // Fetch all reviews from the service on initialization
    this.reviewService.getReviews().subscribe((reviewData) => {
      this.reviews = reviewData;
    });
  }

  // Delete a review by its ID
  deleteReview(id: number): void {
    if (id !== undefined) {
      this.reviewService.deleteReview(id).subscribe(() => {
        // Filter out the deleted review from the list
        this.reviews = this.reviews.filter(review => review.id !== id);
      });
    }
  }

  // Navigate to Add Review page
  addReview() {
    this.router.navigate(['/add-review']);
  }

  // Navigate back to the application menu
  back() { 
    this.router.navigate(['/application-menu']);
  }

  // Navigate to Update Review page
  updateReview(id: number): void {
    if (id !== undefined) {
      this.router.navigate(['update-review', id]);
    } else {
      console.log('Review id is undefined');
    }
  }

  // Search for reviews by ID
  searchReviews() {
    // If no input is entered, show all reviews
    if (!this.searchInput) {
      this.reviewService.getReviews().subscribe((reviewData) => {
        this.reviews = reviewData;
      });
      return;
    }

    // Convert search input to number
    const searchId = Number(this.searchInput);

    // If the input is not a valid number, show an alert
    if (isNaN(searchId)) {
      alert('Please enter a valid numeric ID!');
      return;
    }

    // If it's a valid number, filter the reviews by ID
    this.reviewService.getReviews().subscribe((data) => {
      this.searchReview = data.filter(review => review.id === searchId);

      if (this.searchReview.length > 0) {
        // If review is found, display only the matching review
        this.reviews = this.searchReview;
      } else {
        // If no review found, alert the user and clear the table
        alert('Review Not Found!');
        this.reviews = []; // Optionally, you can leave this empty if no rows are displayed
      }
    });
  }

  // Logout function
  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}
