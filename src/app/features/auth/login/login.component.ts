import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DynamicFormComponent } from '../../../shared/components/dynamic-form/dynamic-form.component';
import { FormFieldConfig } from '../../../shared/models/form-field-config.model';
import { UserService } from '../../../core/services/user.service';
// import { ToastService } from '../../../core/services/toast.service'; // Optional for feedback

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formConfig: FormFieldConfig[] = [
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  onLogin(formData: any) {
    const success = this.userService.login(formData.email, formData.password);
    if (success) {
      alert('Login Successful!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
