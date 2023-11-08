import { Category } from "../../models/category";

export const categories: Category[] = [
    {
      id: 1,
      name: 'Home',
      url: '/features',
      description: 'Home',
      title: 'Home',
      external: false
    },
    {
      id: 2,
      name: 'Personal',
      url: '/features/personal',
      description: 'Personal',
      title: 'Personal projects',
      external: false
    },
    // {
    //   id: 3,
    //   name: 'Experience',
    //   url: '/experience',
    //   description: 'Experience',
    //   title: 'Experience',
    //   external: false
    // },
    {
      id: 4,
      name: 'Post',
      url: '/features/post',
      description: 'Post',
      title: 'Post',
      external: false
    },
    {
      id: 6,
      name: 'Articles',
      url: '/features/article',
      description: 'Articles',
      title: 'Articles',
      external: false
    },
    // {
    //   id: 7,
    //   name: 'Pokemon',
    //   url: '/pokemons',
    //   description: 'Pokemon',
    //   title: 'Pokemon',
    //   external: false
    // },
    {
      id: 8,
      name: 'Resume',
      url: '/static/Resume.pdf',
      description: 'Resume',
      title: 'Resume',
      external: true
    },
    {
      id: 9,
      name: 'Contacts',
      url: '/features/contacts',
      description: 'Contacts',
      title: 'Contacts',
      external: false
    },
]