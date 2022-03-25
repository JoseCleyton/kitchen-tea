import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private _router: Router, private _userService: UserService) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    const user = { ...this.formLogin.value };
    this._userService.authenticate(user).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      this._router.navigate(['feature/home']);
    });
  }
}
