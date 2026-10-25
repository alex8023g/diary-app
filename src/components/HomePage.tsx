import { NewPostBlock } from '@/components/NewPostBlock';
import { PostList } from '@/components/PostList';
import { useOutletContext } from 'react-router';
import { OutletContext } from './HeaderLayout';

export default function HomePage() {
  const { posts, addPost, updatePost, deletePost }: OutletContext =
    useOutletContext();

  return (
    <main className='mx-auto max-w-[768px] px-5'>
      <NewPostBlock posts={posts} addPost={addPost} />
      <PostList posts={posts} updatePost={updatePost} deletePost={deletePost} />
    </main>
  );
}
