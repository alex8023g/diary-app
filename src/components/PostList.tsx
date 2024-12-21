import { Post } from '@/types/postTypes';
import { Dispatch } from 'react';

type Props = {
  posts: Post[];
  setPosts: Dispatch<React.SetStateAction<Post[]>>;
};

// @ts-expect-error sadfafd
// eslint-disable-next-line
export function PostList({ posts, setPosts }: Props) {
  return (
    <>
      <h2>PostList</h2>
      <ul>
        {posts.map((post) => (
          <li>{post.text}</li>
        ))}
      </ul>
    </>
  );
}
