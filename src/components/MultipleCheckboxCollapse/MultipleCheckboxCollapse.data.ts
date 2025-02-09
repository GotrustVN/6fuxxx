import { TMultipleCheckboxCollapseData } from '@/components/MultipleCheckboxCollapse/MultipleCheckboxCollapse.types';

export const dataFilterCategoryOptions = [
  {
    key: '1',
    title: 'Escort Services',
    count: 512,
    children: [
      {
        key: '1.1',
        title: 'French Kissing',
        count: 512,
      },
      {
        key: '1.2',
        title: 'Video',
        count: 212,
      },
      {
        key: '1.3',
        title: 'Photo',
        count: 221,
      },
      {
        key: '1.4',
        title: 'Dirty Talk',
        count: 400,
      },
      {
        key: '1.5',
        title: 'Erotic Massage',
        count: 120,
      },
      {
        key: '1.5',
        title: 'Massage',
        count: 120,
        children: [
          {
            key: '1.5.1',
            title: 'Erotic Massage',
            count: 60,
          },
          {
            key: '1.5.2',
            title: 'Thai Massage',
            count: 60,
          },
        ],
      },
    ],
  },
  {
    key: '2',
    title: 'Type',
    count: 367,
    children: [
      {
        key: '2.1',
        title: 'Southern EU',
        count: 312,
      },
      {
        key: '2.2',
        title: 'Middle EU',
        count: 212,
      },
      {
        key: '2.3',
        title: 'Western EU',
        count: 123,
      },
      {
        key: '2.4',
        title: 'Mixed',
        count: 98,
      },
      {
        key: '2.5',
        title: 'Dark skinned',
        count: 32,
      },
      {
        key: '2.6',
        title: 'Asian',
        count: 46,
      },
      {
        key: '2.7',
        title: 'Latin American',
        count: 176,
      },
      {
        key: '2.8',
        title: 'Oriental',
        count: 122,
      },
      {
        key: '2.9',
        title: 'Other',
        count: 62,
      },
    ],
  },
  {
    key: '3',
    title: 'Language',
    count: 512,
    children: [
      {
        key: '3.1',
        title: 'German',
        count: 322,
      },
      {
        key: '3.2',
        title: 'English',
        count: 81,
      },
      {
        key: '3.3',
        title: 'Spanish',
        count: 19,
      },
      {
        key: '3.4',
        title: 'Italian',
        count: 19,
      },
      {
        key: '3.5',
        title: 'French',
        count: 201,
      },
      {
        key: '3.6',
        title: 'Portuguese',
        count: 32,
      },
      {
        key: '3.7',
        title: 'Hungarian',
        count: 32,
      },
      {
        key: '3.8',
        title: 'Russian',
        count: 32,
      },
      {
        key: '3.9',
        title: 'Arabic',
        count: 32,
      },
      {
        key: '3.10',
        title: 'Chinese',
        count: 32,
      },
    ],
  },
  {
    key: '4',
    title: 'Sexuality',
    count: 512,
    children: [
      {
        key: '4.1',
        title: 'Bísexual',
        count: 212,
      },
      {
        key: '4.2',
        title: 'Homosexual',
        count: 312,
      },
      {
        key: '4.3',
        title: 'Heterosexual',
        count: 123,
      },
    ],
  },
];

export const dataFaqOptions = [
  {
    key: '1',
    title: 'What should I include in my profile to make a good impression?',
    content: 'Focus on showcasing your personality, interests, and what you are looking for in a partner. Use clear and engaging language, highlight your hobbies and passions, and consider adding conversation starters to your profile. Be honest and authentic in your descriptions, as this will attract people who appreciate you for who you are.',
  },
  {
    key: '2',
    title: 'Is my profile information safe?',
    content: 'We take your privacy seriously. Your personal information is protected by industry-standard security measures, and only essential details, like your username and profile picture, are visible to other users. You have complete control over what information you share and can choose to keep certain details private.',
  },
  {
    key: '3',
    title: 'What are some tips for staying safe while online dating?',
    content: 'Never share personal information: This includes your address, phone number, or financial details.\
    Meet in public for your first date: Choose a well-lit and populated place for your initial meeting.\
    Trust your gut instinct: If something feels off about someone, don\'t hesitate to end the interaction.\
    Report any inappropriate behavior: The website should have reporting mechanisms for harassment or suspicious activity.',
  }
];

export const findChildrenOfOptions = (data: TMultipleCheckboxCollapseData): TMultipleCheckboxCollapseData[] => {
  const children: TMultipleCheckboxCollapseData[] = [];

  const parseOptions = (parseData: TMultipleCheckboxCollapseData): void => {
    if (parseData?.children) {
      parseData?.children.forEach((item) => parseOptions(item));
    } else {
      children.push(parseData);
    }
  };

  parseOptions(data);

  return children;
};
