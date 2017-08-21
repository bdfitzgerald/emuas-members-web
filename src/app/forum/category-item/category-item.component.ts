import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'emuas-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItem implements OnInit {

  @Input() category: any;

  constructor() { }

  ngOnInit() {
  }

}
