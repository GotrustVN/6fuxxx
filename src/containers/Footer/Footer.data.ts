import { Paths } from '@/routers/constants';

export const dataFooterMenu = (data?: any) => [
  {
    id: 'become-an-influencer',
    title: data?.trans?.footer?.becomeAnInfluencer,
    link: '',
    activePaths: [],
  },
  {
    id: 'faq',
    title: data?.trans?.footer?.faq,
    link: Paths.Faq,
    activePaths: [],
  },
  {
    id: 'support',
    title: data?.trans?.footer?.support,
    link: Paths.Support,
    activePaths: [],
  },
];
