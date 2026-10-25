import { useCallback, useEffect, useState } from 'react';
import { Post } from '@/types/postTypes';
import { postActions } from '@/actions/postActions';

const sortByDateDesc = (posts: Post[]) =>
  [...posts].sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf(),
  );

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    (async () => {
      const res = await postActions.getAllPosts();
      if (!isCancelled) {
        setPosts(res);
        setIsLoaded(true);
      }
    })();
    return () => {
      isCancelled = true;
    };
  }, []);

  // Storage follows state, so it can't drift from what's on screen.
  useEffect(() => {
    if (isLoaded) {
      postActions.savePosts(posts);
    }
  }, [posts, isLoaded]);

  const addPost = useCallback((post: Post) => {
    setPosts((st) => sortByDateDesc([post, ...st]));
  }, []);

  const updatePost = useCallback((post: Post) => {
    setPosts((st) =>
      sortByDateDesc(st.map((item) => (item.id === post.id ? post : item))),
    );
  }, []);

  const deletePost = useCallback((id: string) => {
    setPosts((st) => st.filter((item) => item.id !== id));
  }, []);

  return { posts, isLoaded, addPost, updatePost, deletePost };
}
