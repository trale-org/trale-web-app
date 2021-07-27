import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Selectable} from '../../../models/Selectable';

@Component({
  selector: 'app-choose-security-level',
  templateUrl: './choose-security-level.component.html',
  styleUrls: ['./choose-security-level.component.scss']
})
export class ChooseSecurityLevelComponent implements OnInit {

  public securityLevels: Selectable[] = [
    {
      descriptive: 'opt-seclev-adv',
      headline: 'Advanced Security',
      subHeadline: 'Strong security, great performance',
      description: 'Default encryption, delivery receipts, read receipts, lorem ipsum dolor sit amet et.',
      recommended: false,
      selected: false,
    },
    {
      descriptive: 'opt-seclev-max',
      headline: 'Maximum Security',
      subHeadline: 'Best security, slower performance',
      description: 'Advanced encryption, message distribution over onion netwerk, lorem ipsum dolor sit amet et.',
      recommended: true,
      selected: false,
    },
    {
      descriptive: 'opt-seclev-cus',
      headline: 'Custom Security',
      subHeadline: 'Custom',
      description: 'Lorem ipsum dolor sit amet et.',
      recommended: false,
      selected: false,
    }

  ]

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  /**
   * Update state of selected security level.
   * @param selectedOption - The selected security level.
   */
  public updateSelection(selectedOption: Selectable) {
    selectedOption.selected = true;
    this.securityLevels = this.securityLevels.map(x => {
      x.selected = false;
      if (x.descriptive !== selectedOption.descriptive) {
        return x;
      }
      x.selected = true;
      return x;
    });
  }

  /**
   * Navigates to the previous step in the setup (setup index component).
   */
  public async navigateSetupIndex() {
    await this.router.navigateByUrl('setup');
  }

}
