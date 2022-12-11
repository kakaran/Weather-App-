let day = document.getElementById("day");
let date = document.getElementById("date");
let cityname = document.getElementById("city_name");
let citynameprint = document.getElementById("city_name_print");
let submit = document.getElementById("submitbtn");
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");
let visibilty = document.getElementById("weathervisiblty");
let time = '';

const apicall = async () => {
  let citynmaevalue = cityname.value;
  if (citynmaevalue == "") {
    citynameprint.innerHTML = "Plz write the name before search";
  } else {
    let API = `http://api.openweathermap.org/data/2.5/weather?q=${citynmaevalue}&units=metric&APPID=39c5728a5e1d4d8ee880d367a6b62b1a`;
    let data = await fetch(API);
    visibilty.style.visibility = "visible";
    let jsondata = await data.json();
    citynameprint.innerHTML = `${jsondata.name},${jsondata.sys.country}`;
    temp.innerHTML = `${jsondata.main.temp} <sup>o</sup>C`;
    weatherdata = jsondata.weather[0].main;
    console.log(weatherdata);
    if (weatherdata == "Clear") {
      if (time > 18 || time < 5) {
        weather.innerHTML ='<i class="fa-solid fa-moon"></i>';
      } else {
        weather.innerHTML =
          '<i class="fa-solid fa-sun" style ="color: #eccc68"></i>';
      }
    } else if (weatherdata == "Clouds") {
      weather.innerHTML =
        '<i class="fa-solid fa-cloud" style="colot:#f1f2f6"></i>';
    } else if (weatherdata == "Rain") {
      weather.innerHTML =
        '<i class="fa-solid fa-cloud-rain" style = "color : #a4b0be"></i>';
    } else {
      weather.innerHTML =
        '<i class="fa-solid fa-cloud" style= "color : #fff"></i>';
    }
  }
};

const gettodayday = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //get the day //
  let todaydate = new Date();
  let getDay = todaydate.getDay();
  let today_Day = days[getDay];
  //parse the day in html//
  day.innerHTML = today_Day;

  //get the date and month//
  let getDate = todaydate.getDate();
  let getMonth = todaydate.getMonth();
  let today_month = months[getMonth];
  //parse the date and month//
  date.innerHTML = `${getDate} ${today_month}  `;
  time = todaydate.getHours();
};
submit.addEventListener("click", apicall);
gettodayday();
