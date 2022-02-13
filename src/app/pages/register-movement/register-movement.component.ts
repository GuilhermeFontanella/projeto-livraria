import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-movement',
  templateUrl: './register-movement.component.html',
  styleUrls: ['./register-movement.component.scss']
})
export class RegisterMovementComponent implements OnInit {
  form!: FormGroup;
  isDisabled: boolean = true;

  minDate!: Date;
  maxDate!: Date;

  currentDate = new Date().toLocaleDateString();

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      movement:[, Validators.required],
      idBook: [null, Validators.required],
      date: [this.currentDate],
      deadline: [],
      nameWhoTookBook: [, Validators.required],
      telephone: [, Validators.required]
    })
    
    this.form.valueChanges.subscribe(() => {
      this.isDisabled = true;
      if(this.form.get('movement')?.value === '1' && this.form.get('deadline')?.value) {
        console.log("Entrou no if");
        this.isDisabled = false;
      }
      if(this.form.get('movement')?.value === '2' && this.form.valid) {
        this.isDisabled = false;
      }
    })
  }

  registrar() {
    console.log(this.form.value);
  }

}
