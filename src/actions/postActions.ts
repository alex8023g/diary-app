// import { seedPostsFaker } from '@/seed/seedPostsFaker';
import { seedPostsProd } from '@/seed/seedPostsProd';
import { Post } from '@/types/postTypes';
import { Preferences } from '@capacitor/preferences';

export const postActions = {
  savePosts: (posts: Post[]) =>
    Preferences.set({
      key: 'posts',
      value: JSON.stringify(posts),
    }),

  getAllPosts: async (): Promise<Post[]> => {
    let res = await Preferences.get({ key: 'posts' });
    if (!res.value) {
      // await seedPostsFaker();
      await seedPostsProd();
      res = await Preferences.get({ key: 'posts' });
    }
    return JSON.parse(res.value ?? '[]');
  },
};
