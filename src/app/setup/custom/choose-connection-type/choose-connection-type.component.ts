import { Component, OnInit } from '@angular/core';
import {Selectable} from "../../../../models/Selectable";
import {Router} from "@angular/router";

@Component({
  selector: 'app-choose-connection-type',
  templateUrl: './choose-connection-type.component.html',
  styleUrls: ['./choose-connection-type.component.scss']
})
export class ChooseConnectionTypeComponent implements OnInit {

  public connectionTypes: Selectable[] = [
    {
      descriptive: 'opt-conn-direct',
      headline: 'Direct server connections',
      subHeadline: 'Trale protocol, fast delivery times (<1s)',
      description: 'Direct data transfers via clear-net. Strong transport security and fast delivery times.',
      recommended: false,
      selected: false,
    },
    {
      descriptive: 'opt-conn-tunneled',
      headline: 'Tunneled server connections',
      subHeadline: 'Enhanced Trale protocol, slower delivery times (<5s)',
      description: 'Tunneled data transfers via Onion (TOR) network. Maximum transport security, messages need longer to arrive and receive.',
      recommended: true,
      selected: false,
    }
  ];

  public selectedConnectionType!: Selectable;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  /**
   * Update state of selected connection type.
   * @param selectedOption - The selected connection type.
   */
  public updateSelection(selectedOption: Selectable) {
    this.selectedConnectionType = selectedOption;
    selectedOption.selected = true;
    this.connectionTypes = this.connectionTypes.map(x => {
      x.selected = false;
      if (x.descriptive !== selectedOption.descriptive) {
        return x;
      }
      x.selected = true;
      return x;
    });
  }

  /**
   * Navigates back to choose security level component.
   */
  public async navigatePreviousStep() {
    await this.router.navigateByUrl('setup/security-level');
  }

  /**
   * Navigates to XXXXXXXXXXXXXX.
   */
  public async navigateNextStep() {
    // TODO replace with proper url
    await this.router.navigateByUrl('');
  }


}
