export const filterRoomList = (arr, filter) => {
    let arrFilter = []
    if (filter === 'kitchen') {
        arrFilter = arr.filter((item) => item.kitchen === true);
        return arrFilter
    }
    if (filter === 'elevator') {
        arrFilter = arr.filter((item) => item.elevator === true);
        return arrFilter
    }
    if (filter === 'pool') {
        arrFilter = arr.filter((item) => item.pool === true);
        return arrFilter
    }
    if (filter === 'hotTub') {
        arrFilter = arr.filter((item) => item.hotTub === true);
        return arrFilter
    }
    if (filter === 'indoorFireplace') {
        arrFilter = arr.filter((item) => item.indoorFireplace === true);
        return arrFilter
    }
    if (filter === 'gym') {
        arrFilter = arr.filter((item) => item.gym === true);
        return arrFilter
    }
    return arrFilter

}