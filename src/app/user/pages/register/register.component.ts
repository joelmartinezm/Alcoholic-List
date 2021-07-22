import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/User';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  template: `<app-register-form
  [formGroup]='formGroup'
  (submitEvt)=registerUser($event)></app-register-form>`
})
export class RegisterComponent implements OnInit {


  formGroup!:FormGroup;
  user!:User;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

              registerUser(user:User){
                this.authService.registerUser$(user).subscribe(data =>
                  {
                 console.log('user registered',data)
                  this.authService.setToken(data.accessToken);
                  this.router.navigate(['/profile'])
                })}

  passwordValidator(): ValidatorFn {

    return (ctrl: AbstractControl): ValidationErrors | null =>
       this.formGroup?.get('password')?.value !== ctrl?.value?{mismatch: true}:null;
}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['', Validators.required],
        confirmPassword:['',[Validators.required,this.passwordValidator().bind(this)]]
        });
}

}
