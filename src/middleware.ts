import { defineMiddleware } from 'astro:middleware';

// Language routes and legacy redirects are explicit static pages. Do not let
// automatic locale validation replace unprefixed legacy redirects with 404s.
export const onRequest = defineMiddleware((_context, next) => next());
