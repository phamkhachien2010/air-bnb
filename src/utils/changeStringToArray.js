export const changeStringToArray = (string) => {
    return string.split("")
}

export const getYearFromString = (string) => {
    const arrayString = changeStringToArray(string);
    let year = ''
    for (let index = 0; index < 4; index++) {
        year += arrayString[index]
    }
    return year
}

export const getMonthFromString = (string) => {
    const arrayString = changeStringToArray(string);
    let month = ''
    for (let index = 5; index < 7; index++) {
        month += arrayString[index]
    }
    return month
}

export const getDayFromString = (string) => {
    const arrayString = changeStringToArray(string);
    let day = ''
    for (let index = 8; index < 10; index++) {
        day += arrayString[index]
    }
    return day
}