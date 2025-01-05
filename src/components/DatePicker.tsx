import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CalendarCustom } from '@/components/CalendarCustom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import dayjs from 'dayjs';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
};

export function DatePicker({ date, setDate }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'ghost'}
          className={cn(
            'justify-start px-0 text-left font-normal',
            !date && 'text-muted-foreground',
          )}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
          {/* {date ? format(date, 'PPP') : <span>Pick a date</span>} */}
          {date ? dayjs(date).format('DD.MM.YYYY') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <CalendarCustom
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
          setIsOpen={setIsOpen}
        />
      </PopoverContent>
    </Popover>
  );
}
