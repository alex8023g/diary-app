import { tagColors } from '@/consts/tagColors';
import { CalendarDay, CalendarType } from '@/types/calendarType';
import { Post, PostTags } from '@/types/postTypes';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import weekday from 'dayjs/plugin/weekday';
dayjs.locale('ru');
dayjs.extend(weekday);

export function createCalendarList(posts: Post[]) {
  // Don't rely on posts being sorted: find the oldest date explicitly.
  // Starting from today also keeps at least the current month.
  const oldestDate = posts.reduce((min, post) => {
    const date = dayjs(post.date);
    return date.isBefore(min) ? date : min;
  }, dayjs());
  let monthIndex = dayjs().month();
  // const postIndex = 0;
  const calendarList: CalendarType[] = [];

  while (true) {
    let isFirstDayInDaysMatrix = false;
    let day = 0;
    const daysMatrix: CalendarDay[] = new Array(42)
      .fill(0)
      .map((_, daysMatrixIndex) => {
        if (dayjs().month(monthIndex).date(1).weekday() === daysMatrixIndex) {
          isFirstDayInDaysMatrix = true;
        }

        let post: Post | undefined = undefined;

        if (
          isFirstDayInDaysMatrix &&
          day < dayjs().month(monthIndex).endOf('month').date()
        ) {
          post = posts.find(
            (item) =>
              dayjs(item.date).month() === dayjs().month(monthIndex).month() &&
              dayjs(item.date).year() === dayjs().month(monthIndex).year() &&
              dayjs(item.date).date() ===
                dayjs()
                  .month(monthIndex)
                  .date(day + 1)
                  .date(),
          );
        }

        const tags: (keyof PostTags)[] = [];

        if (post) {
          // console.log('🚀 ~ .map ~ post:', post);
          tagColors.forEach((color) => {
            if (post.tags![color]) {
              tags.push(color);
            }
          });

          // postIndex += 1;
        }

        return {
          index: daysMatrixIndex,
          date:
            isFirstDayInDaysMatrix &&
            dayjs().month(monthIndex).endOf('month').date() > day
              ? ++day
              : null,
          tags: tags,
        };
      });

    calendarList.unshift({
      year: dayjs().month(monthIndex).format('YYYY'),
      month: dayjs().month(monthIndex).format('MMMM'),
      days: daysMatrix,
    });

    if (!dayjs().month(monthIndex).isAfter(oldestDate, 'month')) {
      break;
    }
    monthIndex -= 1;
  }

  console.log('🚀 ~ createCalendarList ~ calendarList:', calendarList);
  return calendarList;
}
