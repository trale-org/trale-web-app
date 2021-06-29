import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-settings-menu-item',
  templateUrl: './settings-menu-item.component.html',
  styleUrls: ['./settings-menu-item.component.scss']
})
export class SettingsMenuItemComponent implements OnInit {

  @Input() name: string | undefined;
  @Input() icon: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
