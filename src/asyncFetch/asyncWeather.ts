import { addWeather, startWeather } from "../store/actionCreater";

const KEY: string = 'a01be2ab8925ebff559e363c9193587e'

export const asyncWeather = (city: string) => {
        return async (dispatch: any) => {
            try{
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
                const data = await res.json(); 
                if(data.cod === '404'){
                    throw new Error
                }else {
                    dispatch(addWeather(data));
                }
            }catch (error) {
                alert('wrong city')
            }
        }

   
}

export const asyncUpdateCard = (arr: any) => {
    return async (dispatch: any) => {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/group?id=${arr}&units;=metric&appid=${KEY}&units=metric`)
        const data = await res.json();
        dispatch(startWeather(data.list));
    }
}