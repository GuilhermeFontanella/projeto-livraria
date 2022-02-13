import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-movement',
  templateUrl: './register-movement.component.html',
  styleUrls: ['./register-movement.component.scss']
})
export class RegisterMovementComponent implements OnInit {
  form!: FormGroup;

  minDate!: Date;
  maxDate!: Date;

  currentDate = new Date().toLocaleDateString();

  constructor(
    private formBuilder: FormBuilder
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      movement:[, Validators.required],
      idBook: [null, Validators.required],
      date: [this.currentDate],
      deadline: [, Validators.required],
      nameWhoTookBook: [, Validators.required],
      telephone: [, Validators.required]
    })    
  }

  registrar() {
    console.log(this.form.value);
  }

}
