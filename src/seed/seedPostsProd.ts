// import { fakerRU as faker } from '@faker-js/faker';
import { Post } from '../types/postTypes';
import { nanoid } from 'nanoid';
import { Preferences } from '@capacitor/preferences';
import dayjs from 'dayjs';

export async function seedPostsProd() {
  const posts: Post[] = [
    {
      id: nanoid(),
      text: 'собирайте статистику по любым событиям из жизни',
      tags: {
        red: false,
        green: false,
        blue: false,
        yellow: true,
        fuchsia: false,
      },
      date: new Date(),
    },
    {
      id: nanoid(),
      text: 'можно прикрепить к событию цвет и не писать событие',
      tags: {
        red: false,
        green: true,
        blue: false,
        yellow: false,
        fuchsia: false,
      },
      date: new Date(dayjs().subtract(2, 'd').format()),
    },
    {
      id: nanoid(),
      text: '',
      tags: {
        red: false,
        green: false,
        blue: false,
        yellow: false,
        fuchsia: true,
      },
      date: new Date(dayjs().subtract(20, 'd').format()),
    },
    {
      id: nanoid(),
      text: 'шел дождь',
      tags: {
        red: false,
        green: false,
        blue: true,
        yellow: false,
        fuchsia: false,
      },
      date: new Date(dayjs().subtract(42, 'd').format()),
    },
    {
      id: nanoid(),
      text: 'катались на лыжах',
      tags: {
        red: false,
        green: true,
        blue: false,
        yellow: false,
        fuchsia: false,
      },
      date: new Date(dayjs().subtract(55, 'd').format()),
    },
    {
      id: nanoid(),
      text: '',
      tags: {
        red: true,
        green: true,
        blue: false,
        yellow: false,
        fuchsia: false,
      },
      date: new Date(dayjs().subtract(76, 'd').format()),
    },
    {
      id: nanoid(),
      text: '',
      tags: {
        red: false,
        green: false,
        blue: false,
        yellow: false,
        fuchsia: true,
      },
      date: new Date(dayjs().subtract(97, 'd').format()),
    },
    {
      id: nanoid(),
      text: '',
      tags: {
        red: false,
        green: true,
        blue: false,
        yellow: true,
        fuchsia: true,
      },
      date: new Date(dayjs().subtract(126, 'd').format()),
    },
    {
      id: nanoid(),
      text: '',
      tags: {
        red: true,
        green: false,
        blue: false,
        yellow: false,
        fuchsia: true,
      },
      date: new Date(dayjs().subtract(197, 'd').format()),
    },
    {
      id: nanoid(),
      text: '',
      tags: {
        red: false,
        green: false,
        blue: true,
        yellow: false,
        fuchsia: false,
      },
      date: new Date(dayjs().subtract(254, 'd').format()),
    },
  ];

  posts.sort(
    (a: Post, b: Post) =>
      new Date(b.date).valueOf() - new Date(a.date).valueOf(),
  );

  await Preferences.set({
    key: 'posts',
    value: JSON.stringify(posts),
  });
}
