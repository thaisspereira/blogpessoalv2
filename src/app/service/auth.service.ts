import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogar } from '../model/UsuarioLogar';
import { Usuario } from "../model/Usuario";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userlogin:UsuarioLogar):Observable<UsuarioLogar>{
    return this.http.post<UsuarioLogar>('http://localhost:8080/usuarios/logar',userlogin)

  }

  cadastrar(user:Usuario):Observable<Usuario>{
return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar',user)
  }


}





