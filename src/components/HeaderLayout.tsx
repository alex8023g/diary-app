import appLogo from '../assets/logo.svg';
import { Outlet } from 'react-router';
import { TabsView } from './TabsView';
import { Dispatch, useEffect, useState } from 'react';
import { Post } from '@/types/postTypes';
// import { Preferences } from '@capacitor/preferences';
// import { seedPosts } from '@/seed/seedPosts';
import { postActions } from '@/actions/postActions';
import { CalendarType } from '@/types/calendarType';
import { createCalendarList } from '@/actions/createCalendarList';

export type OutletContext = {
  posts: Post[];
  setPosts: Dispatch<React.SetStateAction<Post[]>>;
  calendarList: CalendarType[];
};

export function HeaderLayout() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [calendarList, setCalendarList] = useState<CalendarType[]>([]);

  useEffect(() => {
    console.log('useEffect in HeaderLayout');
    (async () => {
      const res = await postActions.getAllPosts();
      setPosts(res);
      const res2 = await createCalendarList();
      setCalendarList(res2);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res2 = await createCalendarList();
      setCalendarList(res2);
    })();
  }, [posts]);

  return (
    <div>
      <header className='sticky left-0 top-0 z-20 border-b bg-white'>
        <div className='mx-auto flex px-5 py-2 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]'>
          <img
            className='mr-auto dark:invert'
            src={appLogo}
            alt='Next1.js logo'
            width={110}
            height={50}
          />
          <TabsView />
        </div>
      </header>
      <Outlet context={{ posts, setPosts, calendarList }} />
    </div>
  );
}
