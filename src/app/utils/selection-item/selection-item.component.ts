import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Selectable} from "../../../models/Selectable";

@Component({
  selector: 'app-selection-item',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss']
})
export class SelectionItemComponent implements OnInit {

  @Input() selectable!: Selectable;

  @Output() onOptionSelected = new EventEmitter<Selectable>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
