const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e699c7b903msh358292ec5cf9fb6p166b05jsn14f8424b2808',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWheather= (city)=>{
cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options) 
.then(response =>response.json()) 
.then(response =>{
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML=response.temp 
    temp1.innerHTML=response.temp 
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity1.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp 
    max_temp.innerHTML = response.max_temp
    wind_degrees.innerHTML = response.wind_degrees
    wind_degrees1.innerHTML = response.wind_degrees 
    sunrise.innerHTML = response.sunrise 
    sunset.innerHTML = response.sunset
  })
.catch(err =>console.error(err));
}
submit.addEventListener("click",(e)=>{
  e.preventDefault()
  getWheather(city.value)
})
getWheather("Hyderabad")
