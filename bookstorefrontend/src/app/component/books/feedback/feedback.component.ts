import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  @Input() feedback: any;
  symbol: any;
  ngOnInit(): void {
    console.log(this.feedback);
    this.symbol = this.getInitials(this.feedback.user.fullName);
  }
  getInitials(name: string): string {
    const words = name.split(' ');
    const initials = words.map((word) => word[0].toUpperCase()).join('');
    return initials.slice(0, 2);
  }
  // stars: any;
  stars: boolean[] = Array(5).fill(false);
  getStarsFromRating(rating: number): boolean[] {
    const starsArray: boolean[] = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
      starsArray[i] = true;
    }
    return starsArray;
  }
}
