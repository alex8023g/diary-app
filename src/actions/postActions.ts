import { Post } from '@/types/postTypes';
import { Preferences } from '@capacitor/preferences';

export const postActions = {
  addPost: ({ id, text, tags }: Post, posts: Post[]) => {
    Preferences.set({
      key: 'posts',
      value: JSON.stringify([{ id, text, tags }, ...posts]),
    });
  },
  setPosts: (posts: Post[]) => {
    Preferences.set({
      key: 'posts',
      value: JSON.stringify(posts),
    });
  },
  updPost: (post: Post, posts: Post[]) => {
    const index = posts.findIndex((item) => item.id === post.id);
    posts[index] = post;
    Preferences.set({
      key: 'posts',
      value: JSON.stringify(posts),
    });
  },
};
