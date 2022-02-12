import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
    console.log(this.form.value)
    this.router.navigate(['/home']);
  }

  navigate() {
    this.router.navigateByUrl('/');
  }

}
