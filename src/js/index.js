import weatherData from './weatherData';
import '../styles/index.sass';

const days = document.getElementById('days');

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

  days.appendChild(dayDiv);
});