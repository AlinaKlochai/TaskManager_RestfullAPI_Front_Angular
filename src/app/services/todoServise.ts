import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseApiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseApiUrl}/todos/`);
  }

  createTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseApiUrl}/todo/`, todo); // Исправленный путь
  }  

  deleteTodo(id: number): Observable<void> {
    console.log(`Deleting todo with id: ${id}`);
    return this.http.delete<void>(`${this.baseApiUrl}/todo/${id}`);
  }

  updateStatus(id: number): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseApiUrl}/todo/${id}`, null);
  }
  
}
