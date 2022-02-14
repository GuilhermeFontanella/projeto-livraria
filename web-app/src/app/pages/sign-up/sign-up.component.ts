import { SignUpService } from './sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signUpService: SignUpService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name:[, [Validators.required]],
      lastName: [,Validators.required],
      user: [,[Validators.required, Validators.email]],
      password: [, Validators.required],
      level: [, Validators.required]
    })

    //this.formValidator();
  }

  signUp() {
    const newUser = this.form.value;
    this.signUpService.signUp(newUser).subscribe(() => {
      this.signUpService.showMessage('Usuário cadastrado com sucesso!')
      this.router.navigateByUrl('/login');
    }, (error) => {
      this.signUpService.showMessage('Ocorreu um erro ao cadastrar o usuário.');
    })
  }

  navigate() {
    this.router.navigateByUrl('/login');
  }

  
  

}
