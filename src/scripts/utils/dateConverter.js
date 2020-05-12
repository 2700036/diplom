export default function dateConverter (str){ 
    const dates = {
      '01': 'января,',
      '02': 'февраля,',
      '03': 'марта,',
      '04': 'апреля,',
      '05': 'мая,',
      '06': 'июня,',
      '07': 'июля,',
      '08': 'августа,',
      '09': 'сентября,',
      '10': 'октября,',
      '11': 'ноября,',
      '12': 'декабря,'
    }
    const arr = str.split('-').reverse();
    arr[1] = dates[arr[1]];
    arr[0].charAt(0) == '0' ? arr[0] = arr[0].charAt(1) : 0;
    return arr.join(' ')
  }