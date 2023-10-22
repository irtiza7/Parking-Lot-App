import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public checkInName: string = 'Check-In Section';
  public checkOutName: string = 'Check-Out Section';
}
