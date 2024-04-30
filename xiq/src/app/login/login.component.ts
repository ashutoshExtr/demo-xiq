import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  emailActive = false;
  passwordActive = false;

  constructor(private authservice: Authservice, private router: Router) {}

  onSubmit() {
    let { username, password } = this.loginForm.value;

    username = username || '';
    password = password || '';
    
    if (this.authservice.validateUser(username, password)) {
      this.router.navigate(['/manage']);
      console.log(username, password);
      
    } else {
      console.log('Invalid credentials');
    }
  }
}
