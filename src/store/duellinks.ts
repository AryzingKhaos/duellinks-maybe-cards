/*
 * @Date: 2022-04-13 14:08:23
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-13 14:09:24
 * @FilePath: /generationNovel/Users/luoxiongze/code/duellinks-maybe-cards/src/store/duellinks.ts
 */

import { createModel } from '@rematch/core';
import type { RootModel } from '.';

export interface StoreState {
  userId: string;
}

const state: StoreState = {
  userId: '',
};

export const duellinks = createModel<RootModel>()({
  state,
  reducers: {
    setState: (state: StoreState, payload: string) => ({
      ...state,
      userId: payload,
    }),
  },
  effects: (dispatch) => {
    const { user } = dispatch;
    return {
      async incrementAsync(): Promise<void> {
        user.setState('111');
      },
    };
  },
});
