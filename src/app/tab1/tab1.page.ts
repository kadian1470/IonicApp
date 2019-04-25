import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  systems: { name: string,
  complete: string,
id: string}[];
  constructor() {
    this.systems = [{
      name: 'Install 1',
      complete: this.getCompletionIcon(true),
      id: '1'
    },{
      name: 'Install 2',
      complete: this.getCompletionIcon(true),
      id: '2'
    },{
      name: 'Install 3',
      complete: this.getCompletionIcon(false),
      id: '3'
    }];
  }
  private getCompletionIcon(value: boolean): string {
    if(value) {
    return 'checkmark-circle';
    }
    return 'close-circle';
  }
}
