import { ADD_ID, ADD_WEATHER, DELETE_CARD, START_WEATHER, UPDATE_DATA } from "./actionType"


type ArticleAction = {
    type: string
    payload: any
}

const defaultstate: any = {
    weatherData: [],
    idWeather: []
}


export const weatherReduser = (state = defaultstate, action: ArticleAction) => {

    switch (action.type) {
        case ADD_WEATHER:
            return {                
                weatherData: [action.payload, ...state.weatherData],
                idWeather: [action.payload.id, ...state.idWeather]
            }
        case START_WEATHER:
            return {
                ...state,
                weatherData: [...action.payload],
            }
        case ADD_ID:      
            return {
                ...state,
                idWeather: [...action.payload]
            }
        case UPDATE_DATA:      
                return {
               ...state,
               weatherData: [...action.payload,...state.weatherData.filter((weather:any) => weather.id !== action.payload[0].id)]
            }
           
        case DELETE_CARD:  
        console.log('DELETE_CARD');
          
            return {
                ...state,
                weatherData: state.weatherData.filter((card: any) => card.id !== action.payload),
                idWeather: state.idWeather.filter((cardId: number) => cardId !== action.payload)
            }

        default: return state
    }
}

