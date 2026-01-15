import { CalendarDay, CalendarType } from '@/types/calendarType';
import dayjs from 'dayjs';
import { twJoin } from 'tailwind-merge';

export function MonthCalendar({ monthData }: { monthData: CalendarType }) {
  return (
    <div key={monthData.year + monthData.month} className='container'>
      <div className='mb-2 grid grid-cols-7 text-center'>
        <div className='relative h-5'>
          <span className='absolute left-[calc(50%-9px)] top-0 overflow-visible text-nowrap font-semibold'>
            {monthData.year} {monthData.month}
          </span>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='grid grid-cols-7 text-center text-sm font-medium'>
        <div>Пн</div>
        <div>Вт</div>
        <div>Ср</div>
        <div>Чт</div>
        <div>Пт</div>
        <div>Сб</div>
        <div>Вс</div>
      </div>
      <div className='grid grid-cols-7 rounded-lg bg-white text-sm'>
        {monthData.days.map((item: CalendarDay) => {
          return (
            <div key={item.index} className='bg-white py-2 text-center'>
              <div
                className={twJoin(
                  item.date === dayjs().date() &&
                    monthData.month === dayjs().format('MMMM') &&
                    Number(monthData.year) === dayjs().year() &&
                    'font-bold text-blue-500',
                )}
              >
                {item.date}
              </div>
              <ul className='flex justify-center space-x-1'>
                {item.tags.map((color) => (
                  <li
                    key={color}
                    className={`h-[5px] w-[5px] rounded-full bg-${color}-500`}
                  ></li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
