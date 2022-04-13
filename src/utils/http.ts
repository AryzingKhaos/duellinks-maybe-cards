/*
 * @Date: 2022-04-13 14:06:10
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-13 14:06:10
 * @FilePath: /generationNovel/Users/luoxiongze/code/duellinks-maybe-cards/src/utils/http.ts
 */


export const isTestEnvironment = (): boolean => ['localhost'].some(item => `${location.hostname}${location.pathname}`.indexOf(item) > -1);
export const isDebugger = (): boolean => ['debugger'].some(item => location.search.indexOf(item) > -1);
