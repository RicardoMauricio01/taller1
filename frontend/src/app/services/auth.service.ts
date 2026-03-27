import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(`${this.api}/login`, data).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
      }),
    );
  }

  register(data: any) {
    return this.http.post(`${this.api}/register`, data);
  }

  profile() {
    const token = localStorage.getItem('token');

    return this.http.get(`${this.api}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  logout() {
    localStorage.removeItem('token');
  }
}
