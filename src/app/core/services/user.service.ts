import { Injectable, computed, signal } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Injectable({ providedIn: 'root' })

export class UserService {
  private users = signal<User[]>([]);
  private loginLogs = signal<{ email: string; timestamp: string }[]>([]);

  users$ = computed(() => this.users());
  loginLogs$ = computed(() => this.loginLogs());

  private idCounter = 1;

  register(user: User) {
    user.id = this.idCounter++;
    this.users.update(u => [...u, user]);
  }

  login(email: string, password: string): boolean {
    const found = this.users().find(u => u.email === email && u.password === password);
    if (found) {
      this.loginLogs.update(logs => [...logs, { email, timestamp: new Date().toLocaleString() }]);
      return true;
    }
    return false;
  }

  deleteUser(id: number) {
    this.users.update(users => users.filter(u => u.id !== id));
  }

  updateUser(updated: User) {
    this.users.update(users => users.map(u => (u.id === updated.id ? updated : u)));
  }
}