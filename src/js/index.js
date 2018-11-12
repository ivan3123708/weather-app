import weatherData from './weatherData';
import '../styles/index.sass';

const days = document.getElementById('days');
const widgetToggle = document.getElementById('widget-toggle');
const widget = document.getElementById('widget');
const widgetDay = document.getElementById('dayName');
const widgetIcon = document.getElementById('dayIcon');
const widgetTemp = document.getElementById('dayTemp');
const widgetWindDir = document.getElementById('dayWindDir');
const widgetWindSpeed = document.getElementById('dayWindSpeed');
const widgetType = document.getElementById('dayType');

// CLOSE WIDGET
widgetToggle.onclick = () => {
  widget.classList.remove('widget-open');
  widget.classList.add('widget-closed');
}

// RENDER ALL DAYS FROM WEATHERDATA TO A LIST
weatherData.days.map((day) => {
  let dayDiv = document.createElement('div');
  dayDiv.classList.add('day');

  let dayName = document.createElement('p');
  dayName.classList.add('dayName');
  dayName.innerText = day.day;

  let dayIcon = document.createElement('img');
  let icon;
  switch(day.type) {
    case 'sunny':
      icon = 'img/sunny.png';
      break;
    case 'rainy':
      icon = 'img/rainy.jpg';
      break;
    case 'cloudy':
      icon = 'img/cloudy.png';
  }
  dayIcon.setAttribute('src', icon);

  let dayTemp = document.createElement('p');
  dayTemp.classList.add('dayTemp');
  dayTemp.innerText = `${day.temp} °${weatherData.tempUnit}`;

  dayDiv.appendChild(dayName);
  dayDiv.appendChild(dayIcon);
  dayDiv.appendChild(dayTemp);

  // SET WIDGET DATA & TOGGLE IT
  dayDiv.onclick = () => {
    widgetDay.innerText = day.day;
    widgetIcon.setAttribute('src', icon);
    widgetTemp.innerHTML = `Temperature: <b>${day.temp} °C</b>`;
    widgetWindDir.innerHTML = `Wind Direction: <b>${day.windDirection}</b> <img src="img/${day.windDirection}.png">`;
    widgetWindSpeed.innerHTML = `Wind Speed: <b>${day.windSpeed} m/s</b>`;
    widgetType.innerHTML = `Type: <b>${day.type}</b>`;

    widget.classList.remove('widget-closed');
    widget.classList.add('widget-open');
  }

  days.appendChild(dayDiv);
});