import { LoginService } from './login.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() emitEventLogin = new EventEmitter();
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigateByUrl('/');
    } else {
      this.createForm();
    }
  }

  createForm() {
    this.form = this.formBuilder.group({
      user: [,[Validators.required, Validators.email]],
      password: [, Validators.required]
    })
  }

  login() {
    const userEmail = this.form.get('user')?.value;
    const userPassword = this.form.get('password')?.value;
    let user: any;

    if(this.form.valid) {
      this.loginService.getUser(userEmail, userPassword).subscribe((resp: any) => {
        user = resp;
  
        if(user.length) {
          localStorage.setItem('user', user[0].name);
          localStorage.setItem('email', user[0].user);
          localStorage.setItem('level', user[0].level);
          this.router.navigateByUrl('/')
          // *** SIMULANDO O ERRO NA RESPOSTA DO BACK-END
        } else {
          this.loginService.showMessage('Usuário não encontrado!')
        }
      });
    }
  }

  navigate() {
    this.router.navigateByUrl('/sign-up');
  }

}
