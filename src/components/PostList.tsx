import { Post } from '@/types/postTypes';
import { Dispatch } from 'react';
import { PostItem } from './PostItem';

type Props = {
  posts: Post[];
  setPosts: Dispatch<React.SetStateAction<Post[]>>;
};

export function PostList({ posts, setPosts }: Props) {
  return (
    <ul role='list' className='grow divide-y divide-gray-100'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} posts={posts} setPosts={setPosts} />
      ))}
    </ul>
  );
}
