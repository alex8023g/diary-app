import { useOutletContext } from 'react-router';
import { OutletContext } from '../components/RootLayout';

import { MonthCalendar } from '@/components/MonthCalendar';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

const rowHeight = 280;

export function CalendarPage() {
  const { calendarList }: OutletContext = useOutletContext();
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: calendarList.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    initialOffset: calendarList.length * rowHeight,
  });

  return (
    <>
      <div
        ref={parentRef}
        className='List px-2'
        style={{
          height: `100%`,
          width: `100%`,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              className=''
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${rowHeight}px`,
                transform: `translateY(${virtualRow.index * rowHeight}px)`,
              }}
            >
              <MonthCalendar monthData={calendarList[virtualRow.index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
