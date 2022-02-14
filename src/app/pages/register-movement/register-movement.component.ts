import { RegisterMovementService } from './register-movement.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-register-movement',
  templateUrl: './register-movement.component.html',
  styleUrls: ['./register-movement.component.scss']
})
export class RegisterMovementComponent implements OnInit {
  form!: FormGroup;
  isDisabled: boolean = true;

  minDate = new Date();
  maxDate!: Date;

  currentDate = new Date().toLocaleDateString();

  constructor(
    private formBuilder: FormBuilder,
    private registerMovementService: RegisterMovementService
  ) { }

  ngOnInit(): void {
    this.createForm();
    //this.getAnountOfBooks(4);
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
        this.isDisabled = false;
      }
      if(this.form.get('movement')?.value === '2' && this.form.valid) {
        this.isDisabled = false;
      }
    })
  }

  register() {
    let newMovement = this.form.value;
    let movement = this.form.get('movement')?.value;
    this.registerMovementService.registerMovement(newMovement).subscribe((resp) => {
      let idBook = resp.idBook;
      if(movement === '1') {
        this.getAnountOfBooks(idBook);
        this.registerMovementService.showMessage(`Empréstimo de livro registrado com sucesso!`);
      } else {
        //this.getAnountOfBooks(idBook);
        //this.registerMovementService.deleteBookWithId(idBook);
        this.registerMovementService.showMessage(`Devolução registrada com sucesso. Livro com ID:${idBook}`);
      }
    }, (error) => {
      this.registerMovementService.showMessage(`Ocorreu um problema ao realizar o registro.`);
    })
  }

  getAnountOfBooks(id: number) {
    let book;
    let repeatedBooks: Book[] = [];

    this.registerMovementService.getBooks(id).subscribe((resp: any) => {
      book = resp;
      this.registerMovementService.getRepeatedBooks(book.bookName).subscribe((resp: any) => {
        repeatedBooks = resp; 
        //this.registerMovementService.deleteBookWithId(id).subscribe();
        setTimeout(() => {
          window.location.reload();
        }, 1000)
      });
    })
  }

}
