import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  formSignUp: FormGroup;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  signUp(): void {
    const newUser = { ...this.formSignUp.value };
    console.log(newUser);
    this._userService.save(newUser).subscribe((data) => {
      console.log(data);
      this._router.navigate(['/login']);
    });
  }

  goBack(): void {
    this._location.back();
  }
}
