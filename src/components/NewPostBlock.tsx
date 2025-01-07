import React, { Dispatch, useState } from 'react';
import { IconEnter } from './Icons/IconEnter';
import { Post, PostTags } from '@/types/postTypes';
import { tagColors } from '@/consts/tagColors';
import { PostTagItem } from './PostTagItem';
import { nanoid } from 'nanoid';
import { DatePicker } from './DatePicker';
import { postActions } from '@/actions/postActions';
import { DateIsReserved } from './DateIsReserved';
import { CancelIcon } from './Icons/CancelIcon';

type Props = {
  posts: Post[];
  setPosts: Dispatch<React.SetStateAction<Post[]>>;
};

export function NewPostBlock({ posts, setPosts }: Props) {
  const [postText, setPostText] = useState('');
  const [postDate, setPostDate] = useState<Date | undefined>(new Date());
  const [postTags, setPostTags] = useState<PostTags>({
    red: false,
    green: false,
    blue: false,
    yellow: false,
    fuchsia: false,
  });
  const [isDateReserved, setIsDateReserved] = useState(false);

  return (
    <>
      <div className='flex gap-x-4 border-b border-gray-100 pb-1 pt-5'>
        <div className='flex-auto'>
          <form
            id='post-input-form'
            action=''
            onSubmit={async (e) => {
              e.preventDefault();
              console.log('submit');

              setPosts((st) =>
                [
                  {
                    id: nanoid(),
                    text: postText,
                    tags: postTags,
                    date: postDate ? postDate : new Date(),
                  },
                  ...st,
                ].sort(
                  (a: Post, b: Post) =>
                    new Date(b.date).valueOf() - new Date(a.date).valueOf(),
                ),
              );

              postActions.addPost(
                {
                  id: nanoid(),
                  text: postText,
                  tags: postTags,
                  date: postDate ? postDate : new Date(),
                },
                posts,
              );

              setPostText('');
              setPostDate(new Date());
              setPostTags({
                red: false,
                green: false,
                blue: false,
                yellow: false,
                fuchsia: false,
              });
            }}
          >
            <input
              type='text'
              className='mt-1 line-clamp-2 w-full text-base text-gray-950 focus:border-none focus:outline-none'
              // ref={inputRef}
              placeholder='добавьте новый пост'
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </form>

          {/* <div className="flex items-baseline justify-between gap-x-4"></div> */}
          <div className='mb-3 mt-3 flex space-x-6 sm:space-x-5'>
            <DatePicker date={postDate} setDate={setPostDate} />
            {tagColors.map((color) => (
              <PostTagItem
                key={color}
                color={color}
                postTags={postTags}
                setPostTags={setPostTags}
              />
            ))}
          </div>
        </div>
        {postText.length ||
        Object.values(postTags).some((postTag) => postTag) ? (
          isDateReserved ? (
            <button
              onClick={() => {
                setPostText('');
                setPostTags({
                  red: false,
                  green: false,
                  blue: false,
                  yellow: false,
                  fuchsia: false,
                });
              }}
            >
              <CancelIcon />
            </button>
          ) : (
            <button
              type='submit'
              value='Submit'
              form='post-input-form'
              className='flex'
              // onClick={async () => {

              // }}
            >
              <IconEnter className='my-auto size-5' />
            </button>
          )
        ) : null}
      </div>
      {(Boolean(postText.length) ||
        Object.values(postTags).some((postTag) => postTag)) && (
        <DateIsReserved
          posts={posts}
          postDate={postDate}
          setIsDateReserved={setIsDateReserved}
        />
      )}
    </>
  );
}
