import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username": '',
    "password": '',
  }

  constructor(private _snack: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['user-dashboard']);
      location.replace('/user-dashboard');
    }
  }

  formSubmit() {
    if (this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      // this._snack.open('El username de usuario es requerido !!', 'Aceptar')
      Swal.fire(
        'Error',
        'El username de usuario es requerido !!',
        'warning'
      )
      return;
    }

    else if (this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {
      // this._snack.open('La password es requerida !!', 'Aceptar')
      Swal.fire(
        'Error',
        'La password es requerida !!',
        'warning'
      )
      return;
    } else (

      this.loginService.generateToken(this.loginData).subscribe(
        (data: any) => {
          console.log(data);
          this.loginService.loginUser(data.token);
          this.loginService.getCurrentUser().subscribe((user: any) => {
            this.loginService.setUser(user);
            console.log(user);

            if (this.loginService.getUserRole() == 'ADMIN') {
              //dashboard admin
              //window.location.href = '/admin';
              this.router.navigate(['user-dashboard']);
              location.replace('/user-dashboard');
              this.loginService.loginStatusSubjec.next(true);
            }
            else if (this.loginService.getUserRole() == 'RESPONSABLE') {
              //user dashboard
              //window.location.href = '/user-dashboard';
              this.router.navigate(['user-dashboard']);
              location.replace('/user-dashboard');
              this.loginService.loginStatusSubjec.next(true);
            }
            else if (this.loginService.getUserRole() == 'SUPERADMIN') {
              //user dashboard
              //window.location.href = '/user-dashboard';
              this.router.navigate(['dashboard']);
              location.replace('/dashboard');
              this.loginService.loginStatusSubjec.next(true);
            }
            else if (this.loginService.getUserRole() == 'AUTORIDAD') {
              //user dashboard
              //window.location.href = '/user-dashboard';
              this.router.navigate(['user-dashboard']);
              location.replace('/user-dashboard');
              this.loginService.loginStatusSubjec.next(true);
              window.location.reload();
            }
            else {
              this.loginService.logout();
            }
          })
        }, (error) => {
          Swal.fire(
            'Error',
            'Detalles inválidos , vuelva a intentar !!',
            'warning'
          )
          // this.open_snackBar('Detalles inválidos , vuelva a intentar !!', 'Aceptar')
        }
      )
    )
  }
}
