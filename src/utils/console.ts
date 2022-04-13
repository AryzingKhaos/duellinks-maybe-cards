/*
 * @Date: 2021-11-18 11:19:32
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-01-19 11:21:48
 * @FilePath: /video-recommending-commodities/src/pages/video-recommending-commodities/utils/console.ts
 */

import { isTestEnvironment, isDebugger } from '@/utils/http';

export const consoleLog = (...args: any[]) => {
  if (isTestEnvironment() || isDebugger()) {
    console.log(...args);
  }
};

export const consoleError = (...args: any[]) => {
  if (isTestEnvironment() || isDebugger()) {
    console.error(...args);
  }
};
