import { type RouteConfig, index, route, layout, prefix } from '@react-router/dev/routes';

export default [
  index('view/index/index.tsx'),
  route("details/:id", "view/details/index.tsx"),
  route("about-us", "view/about-us/index.tsx"),
  ...prefix('account', [
    layout('view/account/layout.tsx', [
      index("view/account/index.tsx"),
      route("info", 'view/account/info/index.tsx'),
    ])
  ])
] satisfies RouteConfig;
