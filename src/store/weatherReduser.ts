import { ADD_ID, ADD_WEATHER, DELETE_CARD, START_WEATHER } from "./actionType"


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
            console.log('ADD_WEATHER',action.payload.id, 'another',...state.idWeather);

            return {                
                weatherData: [action.payload, ...state.weatherData],
                idWeather: [action.payload.id, ...state.idWeather]
            }
        case START_WEATHER:
            console.log('START_WEATHER',action.payload);
            return {
                ...state,
                weatherData: [...action.payload],
            }
        case ADD_ID:      
        console.log('ADD_ID',...action.payload);
            return {
                ...state,
                idWeather: [...action.payload]
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

