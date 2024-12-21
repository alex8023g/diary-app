'use client';
import { PostTags } from '@/types/postTypes';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  color: keyof PostTags;
  postTags: PostTags;
  setPostTags: Dispatch<SetStateAction<PostTags>>;
};

export function PostTagItem({ color, postTags, setPostTags }: Props) {
  return (
    <button
      className='p-1'
      onClick={() => {
        setPostTags({ ...postTags, [color]: !postTags[color] });
      }}
    >
      <div
        className={`h-3 w-3 rounded-full border border-white ring-2 ring-${color}-500 ${
          postTags[color] ? `bg-${color}-500` : ''
        }`}
      ></div>
    </button>
  );
}
