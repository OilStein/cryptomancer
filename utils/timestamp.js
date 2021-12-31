const dateToUnixTimestamp = (date, to=0) => {
  const newDate = new Date(date)
  newDate.setHours(22 + to, 45)
  return newDate.getTime() / 1000
}

const unixToDate = (unix) => {
  return new Date(unix).toLocaleString('en-GB')
}

export {
  dateToUnixTimestamp,
  unixToDate
}