export const LayoutPaths = {};

export const ModulePaths = {};

export const Paths = {
  Home: '/',
  Login: '/login',
  SignUp: '/sign-up',
  StaticContent: '/static',
  ProfileDetail: (id?: string): string => `/profile/${id || ':id'}`,
};
