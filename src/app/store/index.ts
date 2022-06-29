import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './reducers/counter.reducer';
import * as fromTodo from './reducers/todo.reducer';
import * as fromRouter from "@ngrx/router-store"
// store 中存储的状态类型接口
export interface AppState {

  [fromCounter.counterFeatureKey]: fromCounter.State;
  [fromTodo.todoFeatureKey]: fromTodo.State;
  [fromTodo.todoFeatureKey]: fromTodo.State;
  router: fromRouter.RouterReducerState;
}

// 状态名称和reducer对应关系
export const reducers: ActionReducerMap<AppState> = {

  [fromCounter.counterFeatureKey]: fromCounter.reducer,
  [fromTodo.todoFeatureKey]: fromTodo.reducer,
  [fromTodo.todoFeatureKey]: fromTodo.reducer,
  router: fromRouter.routerReducer
};


function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {

  return function (state, action) {
    console.log('上一次的状态:',state)
    let res = reducer(state,action)
    console.log('最新的状态：',res)
    console.log('action：',action)
    return res
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
