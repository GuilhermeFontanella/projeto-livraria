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
    private router: Router
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

  login() {
    if(!this.form.valid) {
      this.form.markAllAsTouched(); 
    } 
    
    console.log(this.form.value)
    //this.router.navigate(['/home']);
    
  }

  navigate() {
    this.router.navigateByUrl('/login');
  }

  
  

}
