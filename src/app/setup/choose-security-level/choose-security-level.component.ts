import { Component, OnInit } from '@angular/core';
import {SecurityLevel} from "../../../models/SecurityLevel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-choose-security-level',
  templateUrl: './choose-security-level.component.html',
  styleUrls: ['./choose-security-level.component.scss']
})
export class ChooseSecurityLevelComponent implements OnInit {

  public securityLevels: SecurityLevel[] = [
    {
      headline: 'Advanced Security',
      subHeadline: 'Strong security, great performance',
      description: 'Default encryption, delivery receipts, read receipts, lorem ipsum dolor sit amet et.',
      recommended: false,
      selected: false,
    },
    {
      headline: 'Maximum Security',
      subHeadline: 'Best security, slower performance',
      description: 'Advanced encryption, message distribution over onion netwerk, lorem ipsum dolor sit amet et.',
      recommended: true,
      selected: false,
    },
    {
      headline: 'Custom Security',
      subHeadline: 'Custom',
      description: 'Lorem ipsum dolor sit amet et.',
      recommended: false,
      selected: false,
    }

  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  /**
   * Update selected state on selected security level.
   * @param securityLevel - The clicked / selected security level.
   */
  public updateSelection(securityLevel: SecurityLevel) {
    this.securityLevels.forEach(value => value.selected = false);
    securityLevel.selected = !securityLevel.selected;
    const itemIndex = this.securityLevels.findIndex(value => value.headline === securityLevel.headline);
    this.securityLevels[itemIndex] = securityLevel;
    this.securityLevels.forEach(value =>
      console.log(value.headline, value.selected)
    );
  }

  /**
   * Navigates to the previous step in the setup (setup index component).
   */
  public async navigateSetupIndex() {
    await this.router.navigateByUrl('setup');
  }

}
