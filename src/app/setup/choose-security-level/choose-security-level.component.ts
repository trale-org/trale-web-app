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
      description: 'Default encryption, message delivery over clear-net, delivery receipts, read receipts. Best option for casual users who want strong security.',
      recommended: false,
      selected: false,
    },
    {
      descriptive: 'opt-seclev-max',
      headline: 'Maximum Security',
      subHeadline: 'Best security, slower performance',
      description: 'Advanced encryption, message distribution over onion network. Best option for all users who want maximum security and protection against governments, public institutions, law enforcement and others.',
      recommended: true,
      selected: false,
    },
    {
      descriptive: 'opt-seclev-cus',
      headline: 'Custom Security',
      subHeadline: 'Custom',
      description: 'Customize Trale to your needs by choosing each security option by yourself. Recommended only for IT specialists who are familiar with IT security, encryption, network protocols and data protection.',
      recommended: false,
      selected: false,
      flex: true,
    }
  ];

  public selectedSecurityLevel!: Selectable;

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
    this.selectedSecurityLevel = selectedOption;
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

  public async navigateNextStep() {
    console.log(this.selectedSecurityLevel);

    if (this.selectedSecurityLevel.descriptive === 'opt-seclev-cus') {
      await this.router.navigateByUrl('setup/custom/connection-type');
    } else {
      // TODO redirect to setup complete
      await this.router.navigateByUrl('/');
    }
  }

}
