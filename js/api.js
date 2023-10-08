const apiKey = "1c5d676ae469235d8f36c9eac3b343cf"

const fetchSelectedCity = () => {
  const selectedCity = citySelect.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      renderInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
