import { Post } from '@/types/postTypes';
import { PostItem } from './PostItem';

type Props = {
  posts: Post[];
  updatePost: (post: Post) => void;
  deletePost: (id: string) => void;
};

export function PostList({ posts, updatePost, deletePost }: Props) {
  return (
    <ul role='list' className='grow divide-y divide-gray-100'>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      ))}
    </ul>
  );
}
