import { NewPostBlock } from '@/components/NewPostBlock';
import { PostList } from '@/components/PostList';
import { useOutletContext } from 'react-router';
import { OutletContext } from '@/components/RootLayout';

export default function HomePage() {
  const { posts, addPost, updatePost, deletePost }: OutletContext =
    useOutletContext();

  return (
    <main className='/px-5 mx-auto h-full max-w-[768px] overflow-y-auto'>
      <NewPostBlock posts={posts} addPost={addPost} />
      <PostList posts={posts} updatePost={updatePost} deletePost={deletePost} />
    </main>
  );
}
