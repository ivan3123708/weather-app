const convertTemp = (data) => {
  if (data.tempUnit === 'C') {
    data.tempUnit = 'K';
    return data.days.map((day) => day.temp += 273.15);
  } else if (data.tempUnit === 'K') {
    data.tempUnit = 'C';
    return data.days.map((day) => day.temp -= 273.15);
  }
}

const convertWindSpeed = (data) => {
  if (data.windSpeedUnit === 'm/s') {
    data.windSpeedUnit = 'km/h';
    return data.days.map((day) => day.windSpeed *= 3.6);
  } else if (data.windSpeedUnit === 'km/h') {
    data.windSpeedUnit = 'm/s';
    return data.days.map((day) => day.windSpeed /= 3.6);
  }
}

export { convertTemp, convertWindSpeed };