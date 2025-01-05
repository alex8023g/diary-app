import { fakerRU as faker } from '@faker-js/faker';
import { Post } from '../types/postTypes';
import { nanoid } from 'nanoid';
import { Preferences } from '@capacitor/preferences';

export async function seedPosts() {
  const posts: Post[] = [];

  for (let i = 0; i < 100; i++) {
    const tags = {
      red: faker.helpers.arrayElements([true, false], 1)[0],
      green: faker.helpers.arrayElements([true, false], 1)[0],
      blue: faker.helpers.arrayElements([true, false], 1)[0],
      yellow: faker.helpers.arrayElements([true, false], 1)[0],
      fuchsia: faker.helpers.arrayElements([true, false], 1)[0],
    };

    const post: Post = {
      id: nanoid(),
      text: faker.lorem.paragraph({ min: 1, max: 3 }),
      tags,
      date: faker.date.past(),
    };

    posts.push(post);
    posts.sort(
      (a: Post, b: Post) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );
  }

  await Preferences.set({
    key: 'posts',
    value: JSON.stringify(posts),
  });
}
