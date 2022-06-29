import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store";
import {selectCount} from "../../store/selectors/counter.selectors";
import {Observable} from "rxjs";
import {async_increment, decrement, increment} from '../../store/actions/counter.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count: Observable<number>
  // count: Observable<{ count: number }>
  constructor(private store: Store<AppState>) {
    this.count = this.store.pipe(select(selectCount))
    // this.count = this.store.pipe(select("counter"))
  }

  ngOnInit(): void {
  }
  increment() {
    this.store.dispatch(increment({count: 5}))
  }
  decrement() {
    this.store.dispatch(decrement())
  }

  async_increment(){
    console.log('async_increment')

    this.store.dispatch(async_increment())
  }
}
