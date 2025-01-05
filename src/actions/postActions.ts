import { seedPosts } from '@/seed/seedPosts';
import { Post } from '@/types/postTypes';
import { Preferences } from '@capacitor/preferences';

export const postActions = {
  addPost: ({ id, text, tags, date }: Post, posts: Post[]) => {
    Preferences.set({
      key: 'posts',
      value: JSON.stringify(
        [{ id, text, tags, date }, ...posts].sort(
          (a: Post, b: Post) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
        )
      ),
    }) ; 
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

  getAllPosts: async () => {
    let res = await Preferences.get({ key: 'posts' });
    if (!res.value) {
      Preferences.set({ key: 'posts', value: JSON.stringify([]) });
      // setPosts([]);
      await seedPosts();
      res = await Preferences.get({ key: 'posts' });
      return JSON.parse(res.value!);
    } else {
      return JSON.parse(res.value);
    }
  },
};
