import { Outlet } from 'react-router';
import { useMemo } from 'react';
import { Post } from '@/types/postTypes';
import { CalendarType } from '@/types/calendarType';
import { createCalendarList } from '@/actions/createCalendarList';
import { usePosts } from '@/hooks/usePosts';
import { Header } from './Header';

export type OutletContext = {
  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
  deletePost: (id: string) => void;
  calendarList: CalendarType[];
};

export function RootLayout() {
  const { posts, addPost, updatePost, deletePost } = usePosts();
  const calendarList = useMemo(() => createCalendarList(posts), [posts]);

  return (
    <div className='flex h-dvh flex-col overflow-y-hidden'>
      <Header />
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
