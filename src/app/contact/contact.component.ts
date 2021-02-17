import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from '@angular/platform-browser';
import { style } from './data';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.less"]
})
export class ContactComponent implements OnInit {
  validateForm: FormGroup;

  lat: number = -23.503914;
  lng: number = -46.517722;
  zoom: number = 18;
  style: any[];

  constructor(private fb: FormBuilder, private title: Title) {
    Object.assign(this, { style });
  }

  ngOnInit() {
    this.title.setTitle('Contact');

    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [
        null,
        [Validators.compose([Validators.required, Validators.email])]
      ],
      subject: [null, [Validators.required]],
      message: [
        null,
        [Validators.compose([Validators.required, Validators.minLength(10)])]
      ]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
}
