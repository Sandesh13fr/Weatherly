let cityName;
const appKey = 'a0774e44b3162aadfc0f84fce0f6511c'
document.getElementById("submit").addEventListener("click", function() {
    cityName=document.getElementById("userInput").value.toLowerCase();
    const URL=`https:/api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appKey}`
     fetch(URL)
    .then((response) => {
        if (response.ok) {
            return response.json()  
        }
    })
    .then((data) => {
        console.log(data)
    document.getElementById("cityname").innerText=data.name;
    document.getElementById("temperature").innerText=`${((data.main.temp)-273.15).toFixed(0)}°C`
    document.getElementById("Humidity").innerText=`${data.main.humidity}%`
    document.getElementById("windSpeed").innerText=`${data.wind.speed}km/h`
    if (((data.main.temp - 273.15).toFixed(0)) < 15) {
        document.getElementById("icon").setAttribute("src", "./assets/cold.png");
        document.getElementById("bg").style.backgroundColor="lightblue"
        document.getElementById("forecast").style.background="linear-gradient(to right top, #055bda, #0085e8, #00a8e9, #72c7e6, #bbe2e9)"
    }else{
        document.getElementById("bg").style.backgroundColor="lightgoldenrodyellow"
        document.getElementById("forecast").style.background="linear-gradient(to left top, #70e000, #00d374, #00bfab, #00a6c0, #118ab2)"
    }
    }
     )
    .catch((error) =>{
         if (error)  {
        alert("Enter valid City Name")
    }});
});

