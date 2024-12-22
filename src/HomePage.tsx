import { NewPostBlock } from '@/components/NewPostBlock';
import { PostList } from '@/components/PostList';
import { useEffect, useState } from 'react';
import { Post } from './types/postTypes';
import { Preferences } from '@capacitor/preferences';

function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const res = await Preferences.get({ key: 'posts' });
      if (!res.value) {
        Preferences.set({ key: 'posts', value: JSON.stringify([]) });
        setPosts([]);
      } else {
        setPosts(JSON.parse(res.value));
      }
    })();
  }, []);

  return (
    <main className='mx-auto max-w-[768px] px-5'>
      <NewPostBlock posts={posts} setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} />
    </main>
  );
}

export default HomePage;
