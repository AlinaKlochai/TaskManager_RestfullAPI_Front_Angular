// // import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { RouterModule } from '@angular/router';
// // import { FormsModule } from '@angular/forms';
// // import { CommonModule } from '@angular/common';

// // // Импортируем standalone компоненты
// // import { AppComponent } from './app.component';  // Ваш главный компонент
// // import { TodoListComponent } from './todo-list/todo-list.component';  // Ваш компонент списка дел
// // import { routes } from './app.routes';  // Ваши маршруты

// // @NgModule({
// //   imports: [
// //     BrowserModule,      // Для работы с браузером
// //     FormsModule,        // Для работы с ngModel
// //     CommonModule,       // Для использования директив Angular
// //     RouterModule.forRoot(routes),  // Подключаем маршруты
// //     AppComponent,  // Импортируем главный компонент как standalone
// //     TodoListComponent  // Импортируем компонент списка дел как standalone
// //   ],
// //   bootstrap: [AppComponent]  // Задаем главный компонент, с которого начинается приложение
// // })
// // export class AppModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { TodoListComponent } from './todo-list/todo-list.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     TodoListComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Для ngModel
import { AppComponent } from './app.component';  // Импортируем компонент AppComponent
import { TodoListComponent } from './todo-list/todo-list.component';  // Импортируем компонент TodoListComponent

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,  // Добавляем FormsModule для ngModel
    AppComponent,  // Standalone компонент
    TodoListComponent  // Standalone компонент
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

