import format from 'date-format'

export const formatDateDayMonthYear = (date) => {
    return format("dd/MM/yyyy", new Date(date))
}