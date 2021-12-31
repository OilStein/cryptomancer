const dateToUnixTimestamp = (date) => {
  return new Date(date).getTime() / 1000
}

const unixToDate = (unix) => {
  return new Date(unix).toLocaleString('en-GB')
}

export {
  dateToUnixTimestamp,
  unixToDate
}