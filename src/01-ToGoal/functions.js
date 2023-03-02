import { months } from "./data";

export  function addLeadingZeros(n) {
    if (n <= 9) {
      return "0" + n;
    }
    return n
}

export function dateFormatter(date){
    let due_date_list = date.split('-')
    let month = Number(due_date_list[1]-1)
    let  due_date = `${due_date_list[2]}/${months[month]}/${due_date_list[0]}`
    return due_date
}