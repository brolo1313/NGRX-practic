import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

export const increase = createAction('[Counter] increase');
export const decrease = createAction('[Counter] decrease');
export const clear = createAction('[Counter] clear');

export interface CounterState {
  count: number;
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
  }))
);

export const featureSelector = createFeatureSelector<CounterState>('counter');

export const countSelector = createSelector(
    featureSelector,
    state => state.count 
)