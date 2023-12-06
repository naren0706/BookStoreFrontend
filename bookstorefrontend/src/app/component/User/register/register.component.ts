import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservices/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserserviceService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  onSubmit() {
    console.log("hi");
    
    console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
}
