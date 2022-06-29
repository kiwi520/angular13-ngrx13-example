import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {async_increment, increment} from "../actions/counter.actions";
import {map, mergeMap, timer} from "rxjs";



@Injectable()
export class CounterEffects {



  constructor(private actions$: Actions) {
    this.async_increment_effect.subscribe(console.log)
  }
  async_increment_effect = createEffect(() => {
    return this.actions$.pipe(
      ofType(async_increment),
      mergeMap(() => timer(200).pipe(
        map(() => increment({count: 10}))
      ))
    )
  })
}
