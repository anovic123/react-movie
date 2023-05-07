export const ROUTES = {
  HOME: '/',
  MOVIES_DETAIL: '/:category/:id',
  NOT_FOUND: '*',
  CATEGORIES: '/categories/:type',
  ACTORS: '/actor/:id'
} as const