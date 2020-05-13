export default function dateConverter (str){ 
    const dates = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const arr = str.split('-').reverse();
    arr[1] = dates[+arr[1]-1];
    arr[0].charAt(0) == '0' ? arr[0] = arr[0].charAt(1) : 0;
    return arr.join(' ')
  }