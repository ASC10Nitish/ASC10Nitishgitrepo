
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
  
    this.reviewService.getReviews().subscribe((reviewData) => {
      this.reviews = reviewData;
    });
  }

  
  deleteReview(toDeleteReview: Review): void {
    if (toDeleteReview.review_id !== undefined) {
      this.reviewService.deleteReview(toDeleteReview.review_id).subscribe(() => {
        this.reviews = this.reviews.filter(review => review.review_id !== toDeleteReview.review_id);
      });
    }
  }

  
  addReview() {
    this.router.navigate(['/add-review']);
  }
  back()
  { 
    this.router.navigate(['/application-menu']);
  }

  
  updateReview(reviewId: string | undefined): void {
    if (reviewId !== undefined) {
      this.router.navigate(['update-review', reviewId]);
    } else {
      console.log('Review id is undefined');
    }
  }

  
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


  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}
