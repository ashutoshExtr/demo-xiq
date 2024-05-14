import { Injectable } from "@angular/core";



@Injectable({
    providedIn: "root"
})
export class Authservice {

    private loggedIn = false;

    private users = [
        {username: 'user1@gmail.com', password: 'pass1'},
        {username: 'user2@gmail.com', password: 'pass2'},
        {username: 'user3@gmail.com', password: 'pass3'},
        {username: 'user4@gmail.com', password: 'pass4'}
      ];
    
    validateUser(username: string, password: string): boolean {
        const isValidUser = this.users.some(user => user.username === username && user.password === password);

        if (isValidUser) {
            this.loggedIn = true;
            // localStorage.setItem('loggedIn', 'true');
        }
        
        return isValidUser;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
        // return localStorage.getItem('loggedIn') === 'true';
    }
}