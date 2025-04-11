import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldConfig } from '../../../shared/models/form-field-config.model';
import { DynamicFormComponent } from '../../../shared/components/dynamic-form/dynamic-form.component';
import { UserService } from '../../../core/services/user.service';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  formConfig: FormFieldConfig[] = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'address', label: 'Address', type: 'text' },
    { name: 'phone', label: 'Phone Number', type: 'text' },
    { name: 'dob', label: 'Date of Birth', type: 'date' },
  ];

  constructor(private userService: UserService, private toastr: ToastrService) {}

  onRegister(formData: any) {
    this.userService.register(formData);
    this.toastr.success('Register Successful!');
  }
  
}
