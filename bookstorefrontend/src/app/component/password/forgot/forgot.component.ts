import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservices/userservice.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  Forgotform!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserserviceService
  ) {}
  ngOnInit(): void {
    this.Forgotform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    console.log(this.Forgotform.value);
    var url = '?email=' + this.Forgotform.value.email;
    this.userService.ForgotPassword(url).subscribe((res) => {
      console.log(res);
    });
  }
}
