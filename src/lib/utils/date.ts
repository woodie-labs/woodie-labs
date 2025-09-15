export const formatDate = (date: Date | string, format?: '-' | '.') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0'); // 일

  if (format === '.') {
    return `${year}.${month}.${day}`;
  } else {
    return `${year}-${month}-${day}`;
  }
};

export const getWeekDay = (date: number) => {
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  return weekDays[date];
};

export const getMealFormatDate = (date: string) => {
  const extractedMonthDate = date.split('-')[1];
  const extractedDayDate = date.split('-')[2];
  return `${extractedMonthDate}월 ${extractedDayDate}일`;
};

export const isNew = (dateString: string): boolean => {
  const createdDate = new Date(dateString);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - createdDate.getTime();
  const hoursInMs = 24 * 60 * 60 * 1000;

  return timeDiff <= hoursInMs;
};
