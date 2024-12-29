import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule для использования директив (например, ngFor)
import { FormsModule } from '@angular/forms'; // Для ngModel
import { TodoService } from '../services/todoServise';  // Для работы с сервисами
import { Todo } from '../models/todo'; 
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  standalone: true,  // Указываем, что это standalone компонент
  imports: [HttpClientModule, CommonModule, FormsModule], // Добавляем FormsModule
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Partial<Todo> = { description: '', dueDate: '' };
  errorMessage: string = ''; // Поле для хранения ошибки

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  // addTodo(): void {
  //   this.todoService.createTodo(this.newTodo).subscribe(() => {
  //     this.loadTodos();
  //     this.newTodo = { description: '', dueDate: '' }; // Сбросить форму
  //   });
  // }

addTodo(): void {
  this.todoService.createTodo(this.newTodo).subscribe({
    next: () => {
      this.loadTodos();
      this.newTodo = { description: '', dueDate: '' }; // Сбросить форму
      this.errorMessage = ''; // Сбросить ошибку
    },
    error: (err) => {
      if (err.error && err.error.errors) {
        const descriptionError = err.error.errors.find(
          (e: any) => e.field === 'description'
        );
        if (descriptionError) {
          this.errorMessage = descriptionError.message;
        }
      } else {
        this.errorMessage = 'An unexpected error occurred.';
      }
    },
  });
}

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.loadTodos();
    });
  }

  // Метод для переключения статуса задачи
  toggleStatus(todo: Todo): void {
    if (todo.state === 'IN_PROGRESS') {
      todo.state = 'DONE';  // Если статус IN_PROGRESS, меняем на DONE
    } else if (todo.state === 'DONE') {
      todo.state = 'IN_PROGRESS';  // Если DONE, меняем на IN_PROGRESS
    }

    // Обновляем статус на сервере
    this.todoService.updateStatus(todo.id).subscribe({
      next: () => this.loadTodos(), // Загружаем обновленный список задач
      error: (err) => console.error('Error with updating status', err)
    });
  }
}
