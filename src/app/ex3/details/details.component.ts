import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit{
  slug: string = '';

  constructor(private readonly route: ActivatedRoute){}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? ''
  }
}
