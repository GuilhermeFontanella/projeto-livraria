import { Book } from './../../models/book.model';
import { RegisterNewBookService } from './register-new-book.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/models/gender.model';

@Component({
  selector: 'app-register-new-book',
  templateUrl: './register-new-book.component.html',
  styleUrls: ['./register-new-book.component.scss']
})
export class RegisterNewBookComponent implements OnInit {
  form!: FormGroup;
  isDisabled: boolean = true;

  genders: Gender[] = [];

  currentDate = new Date().toLocaleDateString();

  constructor(
    private formBuilder: FormBuilder,
    private registerNewBookService: RegisterNewBookService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.populateGenderList();
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

  register() {
    let newBook: Book = this.form.value;
    let amount = this.form.get('amount')?.value;

    for(let index = 1; index <= amount; index++) {
      this.registerNewBookService.registerNewBook(newBook).subscribe((resp: any) => {
        this.registerNewBookService.showMessage('Livro cadastrado com sucesso!');
        setTimeout(() => {
          window.location.reload();
        }, 1000)
      }, (error) => {
        this.registerNewBookService.showMessage('Ocorreu um erro ao cadastrar um novo livro.');
      });
    }
  }

  populateGenderList() {
    this.registerNewBookService.getGender().subscribe((resp: any) => {
      this.genders = resp;
    })
  }

}
