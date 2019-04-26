import { Component } from '@angular/core';

@Component({
  selector: 'app-install',
  templateUrl: 'install.page.html',
  styleUrls: ['install.page.scss']
})
export class InstallPage {
  systems: { name: string,
  complete: string,
id: string}[];
  constructor() {
    this.systems = [{
      name: 'Install 1',
      complete: this.getCompletionIcon(true),
      id: '1'
    }, {
      name: 'Install 2',
      complete: this.getCompletionIcon(true),
      id: '2'
    }, {
      name: 'Install 3',
      complete: this.getCompletionIcon(false),
      id: '3'
    }];
  }
  private getCompletionIcon(value: boolean): string {
    if (value) {
    return 'checkmark-circle';
    }
    return 'close-circle';
  }
}
