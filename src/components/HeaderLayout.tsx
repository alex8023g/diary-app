import appLogo from '../assets/logo.svg';
import { Outlet } from 'react-router';
import { TabsView } from './TabsView';
import { useMemo } from 'react';
import { Post } from '@/types/postTypes';
import { CalendarType } from '@/types/calendarType';
import { createCalendarList } from '@/actions/createCalendarList';
import { usePosts } from '@/hooks/usePosts';

export type OutletContext = {
  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
  deletePost: (id: string) => void;
  calendarList: CalendarType[];
};

export function HeaderLayout() {
  const { posts, addPost, updatePost, deletePost } = usePosts();
  const calendarList = useMemo(() => createCalendarList(posts), [posts]);

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
      <Outlet
        context={
          {
            posts,
            addPost,
            updatePost,
            deletePost,
            calendarList,
          } satisfies OutletContext
        }
      />
    </div>
  );
}
