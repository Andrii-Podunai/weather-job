import { ADD_ID, ADD_WEATHER, DELETE_CARD, START_WEATHER, UPDATE_DATA } from "./actionType"

export const addWeather = (payload: {}) => ({ type: ADD_WEATHER, payload: payload })
export const startWeather = (payload: Array<any>) => ({ type: START_WEATHER, payload: payload })
export const addId = (payload: any) => ({ type: ADD_ID, payload: payload })
export const deleteWeather = (payload: any) => ({ type: DELETE_CARD, payload: payload })
export const updateWeather = (payload: any) => ({ type: UPDATE_DATA, payload: payload })
