import dayjs from 'dayjs';

export const useDay = (date?: Date) => {
  return dayjs(date);
};
