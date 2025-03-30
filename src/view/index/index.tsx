import { NavLink } from 'react-router';
import type { Route } from './+types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '测试React Router V7' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export async function loader() {
  return { message: 'Hello, world!' };
}

export default function Home({ loaderData, params, matches }: Route.ComponentProps) {
  console.log(loaderData, params, matches)
  return (
    <div className=" items-center justify-center ">
      <h2>{loaderData.message}</h2>

      <NavLink to="/account">个人中心</NavLink>

      <NavLink
        to="/about-us"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isPending ? 'red' : 'black',
            viewTransitionName: isTransitioning ? 'slide' : '',
          };
        }}
      >
        关于我们
      </NavLink>
    </div>
  );
}
