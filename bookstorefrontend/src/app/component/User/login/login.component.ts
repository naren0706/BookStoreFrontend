import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservices/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  inputform: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserserviceService,
    private router: Router, 
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    var values = this.loginForm.value;
    var url = '?email=' + values.email + '&password=' + values.password;
    console.log(url);

    this.userService.loginService(url).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.data);
      this.router.navigateByUrl('/dashboard/books');
    });
  }
}
