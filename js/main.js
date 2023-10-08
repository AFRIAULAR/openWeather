const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)
const citySelect = $("#citySelect")
const weatherInfo = $("#weatherInfo")

citySelect.addEventListener("change", () => {
  fetchSelectedCity()
})

const renderInfo=(data)=>{
  const { sys: {sunset, country }, main: { temp, temp_min, temp_max, humidity, feels_like }, clouds: { all }, wind: { speed } } = data;
  const flagURL = `https://flagcdn.com/64x48/${country.toLowerCase()}.png`;
  $("#temperature").innerHTML=`${temp}`
  $("#feelsLike").innerHTML = `${feels_like}`
  $("#minTemp").innerHTML = `${temp_min}`
  $("#maxTemp").innerHTML = `${temp_max}`
  $("#humidity").innerHTML = `${humidity}`
  $("#sunset").innerHTML = `${sunset}`
  $("#wind").innerHTML = `${speed}`
  $("#clouds").innerHTML = `${all}`
  $("#flagCountry").src = `${flagURL}`
  console.log(data)
}

