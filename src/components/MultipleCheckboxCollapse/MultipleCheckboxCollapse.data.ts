import { TMultipleCheckboxCollapseData } from '@/components/MultipleCheckboxCollapse/MultipleCheckboxCollapse.types';

export const dataFilterCategoryOptions = [
  {
    key: '1',
    title: 'Angebotene Services',
    children: [
      {
        key: '1.1',
        title: 'Softcore',
        children: [
          {
            key: '1.1.1',
            title: 'Foto-Aufnahmen',
          },
          {
            key: '1.1.2',
            title: 'Striptease',
          },
          {
            key: '1.1.3',
            title: 'Kuscheln',
          }
        ],
      },
      {
        key: '1.2',
        title: 'Hardcore',
        children: [
          {
            key: '1.2.1',
            title: 'Foto-Aufnahmen',
          },
          {
            key: '1.2.2',
            title: 'Striptease',
          },
          {
            key: '1.2.3',
            title: 'Dirty Talk',
          },
        ],
      },
      {
        key: '1.3',
        title: 'Escort-Services',
        children: [
          {
            key: '1.3.1',
            title: 'Foto-Aufnahmen',
          },
        ],
      },
    ],
  },
  {
    key: '2',
    title: 'Herkunft',
    children: [
      {
        key: '2.1',
        title: 'Option 2.1',
        children: [
          {
            key: '2.1.1',
            title: 'Item 2.1.1',
          },
          {
            key: '2.1.2',
            title: 'Item 2.1.2',
          },
          {
            key: '2.1.3',
            title: 'Item 2.1.3',
          },
          {
            key: '2.1.4',
            title: 'Item 2.1.4',
          },
        ],
      },
      {
        key: '2.2',
        title: 'Option 2.2',
        children: [
          {
            key: '2.2.1',
            title: 'Item 2.2.1',
          },
          {
            key: '2.2.2',
            title: 'Item 2.2.2',
          },
        ],
      },
      {
        key: '2.3',
        title: 'Option 2.3',
        children: [
          {
            key: '2.3.1',
            title: 'Item 2.3.1',
          },
          {
            key: '2.3.2',
            title: 'Item 2.3.2',
          },
          {
            key: '2.3.3',
            title: 'Item 2.3.3',
          },
          {
            key: '2.3.4',
            title: 'Item 2.3.4',
          },
        ],
      },
    ],
  },
  {
    key: '3',
    title: 'Sprache',
    children: [
      {
        key: '3.1',
        title: 'Option 3.1',
        children: [
          {
            key: '3.1.1',
            title: 'Item 3.1.1',
          },
          {
            key: '3.1.2',
            title: 'Item 3.1.2',
          },
          {
            key: '3.1.3',
            title: 'Item 3.1.3',
          },
          {
            key: '3.1.4',
            title: 'Item 3.1.4',
          },
        ],
      },
      {
        key: '3.2',
        title: 'Option 3.2',
        children: [
          {
            key: '3.2.1',
            title: 'Item 3.2.1',
          },
          {
            key: '3.2.2',
            title: 'Item 3.2.2',
          },
        ],
      },
      {
        key: '3.3',
        title: 'Option 3.3',
        children: [
          {
            key: '3.3.1',
            title: 'Item 3.3.1',
          },
          {
            key: '3.3.2',
            title: 'Item 3.3.2',
          },
          {
            key: '3.3.3',
            title: 'Item 3.3.3',
          },
          {
            key: '3.3.4',
            title: 'Item 3.3.4',
          },
        ],
      },
    ],
  },
  {
    key: '4',
    title: 'Sexualität',
    children: [
      {
        key: '4.1',
        title: 'Option 4.1',
        children: [
          {
            key: '4.1.1',
            title: 'Item 4.1.1',
          },
          {
            key: '4.1.2',
            title: 'Item 4.1.2',
          },
          {
            key: '4.1.3',
            title: 'Item 4.1.3',
          },
          {
            key: '4.1.4',
            title: 'Item 4.1.4',
          },
        ],
      },
      {
        key: '4.2',
        title: 'Option 4.2',
        children: [
          {
            key: '4.2.1',
            title: 'Item 4.2.1',
          },
          {
            key: '4.2.2',
            title: 'Item 4.2.2',
          },
        ],
      },
      {
        key: '4.3',
        title: 'Option 4.3',
        children: [
          {
            key: '4.3.1',
            title: 'Item 4.3.1',
          },
          {
            key: '4.3.2',
            title: 'Item 4.3.2',
          },
          {
            key: '4.3.3',
            title: 'Item 4.3.3',
          },
          {
            key: '4.3.4',
            title: 'Item 4.3.4',
          },
        ],
      },
    ],
  },
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
