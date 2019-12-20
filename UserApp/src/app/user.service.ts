import {Injectable} from '@angular/core';
import {User} from './user';
import {USERS} from './mock-users';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*' })

};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /* Chatapp draaide op Poort 8081, dit gewijzgid worden voor het runnen van de userapp*/
  userUrl = 'http://localhost:8080/DeClercqTibo_Chattapp_Web_exploded/Controller?action=';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getUsers(): Observable<User[]> {
    /*this.messageService.add('UserService: fetched users');
    return of(USERS);*/
    /*return this.http.get<User[]>(this.userUrl).pipe(catchError(this.handleError< User[]>('getUsers')));*/
    return this.http.get<User[]>(this.userUrl + 'GetUsers');
  }
  getUser(id: string): Observable<User> {
    const param = new HttpParams().set('userId', id);
    return this.http.get<User>(this.userUrl + 'GetUser', {params: param});
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
