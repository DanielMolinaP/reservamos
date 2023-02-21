import axios from "axios";

export const GET_COORDINATES_BY_NAME = "GET_COORDINATES_BY_NAME";
export const GET_WEATHER = "GET_COORDINATES_BY_NAME";
export const CITIES_RENDER = "CITIES_RENDER";
export const NEW_CITIES = "NEW_CITIES";
export const ERROR = "ERROR";
export const ERROR1 = "ERROR1";
export const EXI = "EXI";
export const EXI1 = "EXI1";

const aux = async (lat, lon) => {
  const response = await axios
    .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=a5a47c18197737e8eeca634cd6acb581&units=metric`)
    .then((res) => res.data)
    // console.log(response)
  return response
}

const aux1 = async (city, name, id) => {
  const response = {
    name,
    id,
    daily: await city.daily?.map((e) => {
      let city = {
        min: Math.round(e.temp.min),
        max: Math.round(e.temp.max),
        img: e.weather[0].icon,
        temp: Math.round(e.temp.day),
        dt: e.dt,
        description: e.weather[0].description,
      }
      return city
    })
  }
  return response
}

export const getCoordinatesByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios
        .get(`https://search.reservamos.mx/api/v2/places?q=${name}`)
        .then((res) => res.data[0])
      const response1 = await aux(response.lat, response.long)
      const response2 = await aux1(response1, response.city_name, response.id)
      dispatch({
        type: GET_COORDINATES_BY_NAME,
        payload: response2
      })

    } catch (error) {
      dispatch({
        type: ERROR,
        payload: true
      })
    }
  };
}

export const filterB = (newCities) => {
  return async function (dispatch) {
    dispatch({
      type: NEW_CITIES,
      payload: newCities,
    });
  };
};

export const exiError = () => {
  return async function (dispatch) {
    dispatch({
      type: EXI,
      payload: false,
    });
  };
};

export const exiError1 = () => {
  return async function (dispatch) {
    dispatch({
      type: EXI1,
      payload: false,
    });
  };
};

export const erroRepeat = () => {
  return async function (dispatch) {
      dispatch({
        type: ERROR1,
        payload: true,
      });
  }
};