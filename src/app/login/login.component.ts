import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private sa: AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  login(f){
    let data=f.value
    this.sa.signIn(data.email,data.password)
    .then((user)=>{
     console.log("login")
  })
    .catch(()=>{
    })

  }
}
