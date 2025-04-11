import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../core/services/user.service';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-grid.component.html',
  styleUrl: './user-grid.component.scss'
})
export class UserGridComponent implements OnInit{

  users :any;
  editingUserId: number | null = null;
  editModel: any = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.users$;
  }


  deleteUser(id: number) {
    if (confirm('Are you sure?')) {
      this.userService.deleteUser(id);
    }
  }

  editUser(user: any) {
    this.editingUserId = user.id;
    this.editModel = { ...user };
  }

  saveEdit() {
    this.userService.updateUser(this.editModel);
    this.editingUserId = null;
  }

  cancelEdit() {
    this.editingUserId = null;
  }
  
}
