import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/User';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  template: `<app-login-form [formGroup]='formGroup'
                         (submitEvt)=loginUser($event)>
             </app-login-form>`
})

export class LoginComponent implements OnInit {

  user!:User;
  formGroup!:FormGroup;
  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.user = new User();

  }

  loginUser(user:User){
    this.authService.loginUser$(user).subscribe(data =>
      {
      console.log('user logged',data)
      this.authService.setToken(data.accessToken);
      this.router.navigate(['/profile'])
    })
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.user);
    Object.keys(this.formGroup.controls).map(ctrl =>{
      this.formGroup.controls[ctrl].setValidators(Validators.required)
    })
  }

}
