import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const increase = createAction('[Counter] increase');
export const decrease = createAction('[Counter] decrease');
export const clear = createAction('[Counter] clear');
export const changeUpdatedAt = createAction(
  '[Counter] change updated at',
  props<{ updatedAt: number }>()
);

export interface CounterState {
  count: number;
  updatedAt?: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(decrease, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(clear, (state) => ({
    ...state,
    count: 0,
  })),
  on(changeUpdatedAt, (state,action) => ({
    ...state,
    updatedAt :  action.updatedAt
  }))
);

export const featureSelector = createFeatureSelector<CounterState>('counter');

export const countSelector = createSelector(
  featureSelector,
  (state) => state.count
);


export const updatedAt = createSelector(
  featureSelector,
  state => state.updatedAt
)