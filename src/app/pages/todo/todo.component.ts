import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store";
import {NgForm} from "@angular/forms";
import {addTodo, deleteTodo} from "../../store/actions/todo.actions";
import {Todo} from "../../store/reducers/todo.reducer";
import {selectTodo, selectTodoTotal} from "../../store/selectors/todo.selectors";
import {Observable} from "rxjs";
import { selectUrl } from "src/app/store/selectors/router.selectors"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Observable<Todo[]>
  todoTotal: Observable<number>
  currentRoute: Observable<string>
  constructor(private store: Store<AppState>) {
    this.todos = this.store.pipe(select(selectTodo))
    this.todoTotal = this.store.pipe(select(selectTodoTotal))
    this.currentRoute = this.store.pipe(select(selectUrl))
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(addTodo({title: form.value.title}) )
  }

  deleteTodo(id:string){
    this.store.dispatch(deleteTodo({id: id}) )
  }

}
