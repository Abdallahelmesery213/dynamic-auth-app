import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-login-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-logs.component.html',
  styleUrl: './login-logs.component.scss'
})
export class LoginLogsComponent implements OnInit{
  loginLogs: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loginLogs = this.userService.loginLogs$;
  }
  

}
