import { Post } from '@/types/postTypes';
import dayjs from 'dayjs';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  posts: Post[];
  postDate: Date | undefined;
  setIsDateReserved: Dispatch<SetStateAction<boolean>>;
};
export function DateIsReserved({ posts, postDate, setIsDateReserved }: Props) {
  const postAtDate = posts.find(
    (post) =>
      dayjs(post.date).format('YYYY-MM-DD') ===
      dayjs(postDate).format('YYYY-MM-DD'),
  );
  if (postAtDate) {
    setIsDateReserved(true);
    return (
      <p className='text-left text-orange-500'>
        на эту дату уже есть запись, внесите изменения в существующую запись или
        измените дату
      </p>
    );
  } else {
    setIsDateReserved(false);
    return null;
  }
}
