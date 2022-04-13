/*
 * @Date: 2022-04-13 14:07:50
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-13 14:08:58
 * @FilePath: /generationNovel/Users/luoxiongze/code/duellinks-maybe-cards/src/store/index.ts
 */
import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core';
import { duellinks } from './duellinks';

export interface RootModel extends Models<RootModel> {
  duellinks: typeof duellinks;
};

const models: RootModel = { duellinks };

export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
