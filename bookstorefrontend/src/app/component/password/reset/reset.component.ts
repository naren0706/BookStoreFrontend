import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservices/userservice.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  resetform!: FormGroup;
  token!: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserserviceService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    this.resetform = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    console.log('password');
    var form = this.resetform.value;
    if (form.password == form.confirmpassword) {
      var url = '?password=' + form.password;
      this.userService.resetPassword(url, this.token).subscribe((res) => {
        console.log(res);
      });
    } else {
      alert('Passwords do not match');
    }
  }
}
