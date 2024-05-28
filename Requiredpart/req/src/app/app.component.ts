import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createAccountForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.createAccountForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]]
    });
  }

  get name() { return this.createAccountForm.get('name'); }
  get email() { return this.createAccountForm.get('email'); }
  get password() { return this.createAccountForm.get('password'); }

  onSubmit() {
    this.formSubmitted = true;

    if (this.createAccountForm.valid) {
      console.log('Form Submitted!', this.createAccountForm.value);
      // Perform the account creation logic here
    } else {
      console.log('Form not valid!');
    }
  }
}
