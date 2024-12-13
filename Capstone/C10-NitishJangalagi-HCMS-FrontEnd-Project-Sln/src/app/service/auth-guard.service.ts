import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

//authguard helps in disabling directing through https://localhost/login

@Injectable({
    providedIn:'root'
})

export class AuthGuardService implements CanActivate{
    

  isAuthenticated(): boolean {
    // For now, we're checking if the user has a token in local storage
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Login logic (set authenticated state)
  login(): void {
    localStorage.setItem('isLoggedIn', 'true');
  }

  // Logout logic (remove authenticated state)
  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }



    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
    { 
      if(sessionStorage.getItem('loggedIn')=='yes'){
        return true;
      }
      else{ 
        this.router.navigate(['/login']);
        return false;
      }
    
    }

    
}
