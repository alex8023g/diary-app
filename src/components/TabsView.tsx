'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, List } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';

export function TabsView() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('🚀 ~ TabsView ~ pathname:', location.pathname);
  return (
    <Tabs
      className='ml-auto w-[80px]'
      defaultValue='/'
      // value={location.pathname}
      onValueChange={(e) => {
        // console.log(e);
        navigate(e);
      }}
    >
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='/'>
          <List className='h-4 w-4' />
        </TabsTrigger>
        <TabsTrigger value='/calendar'>
          <CalendarDays className='h-4 w-4' />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
