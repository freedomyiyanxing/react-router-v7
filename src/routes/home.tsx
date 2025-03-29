import { NavLink } from "react-router";
import type { Route } from './+types/home';
import { Welcome } from '@/welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export async function loader() {
  return { message: "Hello, world!" };
}

export default function Home({ loaderData, params, matches }: Route.ComponentProps) {
  console.log(loaderData, params, matches)
  return (
    <div>
      <h2>{loaderData.message}</h2>

      <NavLink to="/test">测试页面</NavLink>

      <Welcome />
    </div>
  );
}
