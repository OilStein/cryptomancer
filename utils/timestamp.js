const dateToUnixTimestamp = (date) => {
  return new Date(date).getTime() / 1000
}

const unixToDate = (unix) => {
  return new Date(unix)
}

export {
  dateToUnixTimestamp,
  unixToDate
}