import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

interface Genero {
  label: string,
  value: number
}

@Component({
  selector: 'app-register-new-book',
  templateUrl: './register-new-book.component.html',
  styleUrls: ['./register-new-book.component.scss']
})
export class RegisterNewBookComponent implements OnInit {
  form!: FormGroup;
  isDisabled: boolean = true;

  genders: Genero[] = [
    { label: 'Ação', value: 1 },
    { label: 'Ficção', value: 2 },
    { label: 'Fantasia', value: 3 },
    { label: 'História', value: 4 },
    { label: 'Romance', value: 5 },
    { label: 'Auto ajuda', value: 6 },
    { label: 'Culinário', value: 7 },
  ];

  minDate!: Date;
  maxDate!: Date;

  currentDate = new Date().toLocaleDateString();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      bookName:[, Validators.required],
      author: [null, Validators.required],
      gender: [,Validators.required],
      publishingCompany: [,Validators.required],
      edition: [, Validators.required],
      amount: [, Validators.required]
    });
  }

  registrar() {
    console.log(this.form.value);
  }

}
