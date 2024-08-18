import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'; // If using Angular Material
import { MatNativeDateModule } from '@angular/material/core'; // Required for Angular Material Datepicker
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormDataService } from '../services/shared.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  myForm!: FormGroup;

  dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private fb: FormBuilder, private formDataService: FormDataService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      dropdown: ['', Validators.required],
      textbox: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]], // Set exact length to 9
      datepicker: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.formDataService.updateFormData(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
