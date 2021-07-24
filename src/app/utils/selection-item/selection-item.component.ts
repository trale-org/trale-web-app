import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss']
})
export class SelectionItemComponent implements OnInit {

  @Input() headline!: string;
  @Input() subHeadline!: string;
  @Input() description!: string;
  @Input() recommended!: boolean;
  @Input() selected!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
