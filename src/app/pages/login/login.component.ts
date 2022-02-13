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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      user: [,[Validators.required, Validators.email]],
      password: [, Validators.required]
    })
  }

  login() {
    this.emitEventLogin.emit("Qualquer coisa")
    this.router.navigate(['/']);
  }

  navigate() {
    this.router.navigateByUrl('/sign-up');
  }

}
