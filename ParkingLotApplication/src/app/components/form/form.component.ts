import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() sectionName: string = 'Check-In';

  time: string = '';
  selectedVehicle: string = '';
  timeValid: boolean = true;
  carNumber: string = '';

  submitForm() {
    this.validateTime();

    if (this.timeValid) {
      if (this.sectionName === 'Check-In') {
        // Handle Check-In logic
      } else if (this.sectionName === 'Check-Out') {
        // Handle Check-Out logic
      }
    } else {
      // Handle invalid time input
      alert('Please enter a valid time in "hh:mm" format.');
    }
  }

  getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    this.time = `${hours}:${minutes}`;
  }

  validateTime() {
    const timePattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/;
    this.timeValid = timePattern.test(this.time);
  }
}
