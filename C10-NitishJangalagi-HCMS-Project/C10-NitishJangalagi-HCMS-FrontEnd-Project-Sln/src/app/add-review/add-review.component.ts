import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  addReviewForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.addReviewForm = this.formBuilder.group({
      review_id: ['',Validators.required],
      doctor_id: ['', Validators.required],
      patient_id: ['', Validators.required],
      review_text: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      date: ['', Validators.required]
    });
  }

  // Method to check if a field is invalid and touched
  isFieldInvalid(field: string): boolean {
    const control = this.addReviewForm.get(field);
    return control?.invalid && (control?.touched || control?.dirty);
  }

  back()
{ 
  this.router.navigate(['/reviews']);
}
  onSubmit(): void {
    if (this.addReviewForm.valid) {
      this.reviewService.createReview(this.addReviewForm.value).subscribe(
        data => {
          alert('Review Added Successfully');
          this.router.navigate(['/review-list']);
        },
        error => {
          alert('Error: ' + error.message);
        }
      );
    } else {
      // alert('Please fill in all required fields');
      this.addReviewForm.markAllAsTouched(); // Mark all fields as touched to show validation messages
    }
  }
}
