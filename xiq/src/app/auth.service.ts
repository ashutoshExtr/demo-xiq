import { Injectable } from "@angular/core";



@Injectable({
    providedIn: "root"
})
export class Authservice {
    private users = [
        {username: 'user1@gmail.com', password: 'pass1'},
        {username: 'user2@gmail.com', password: 'pass2'},
        {username: 'user3@gmail.com', password: 'pass3'},
        {username: 'user4@gmail.com', password: 'pass4'}
      ];
    
    validateUser(username: string, password: string): boolean {
        return this.users.some(user => user.username === username && user.password === password);
    }
}