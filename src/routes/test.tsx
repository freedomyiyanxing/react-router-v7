import React from 'react';
import { NavLink } from "react-router";
import type { Route } from './+types/test';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '测试页面' },
    { name: 'description', content: 'Welcome to 测试页面!' },
  ];
}

export async function loader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch('https://www.bomman.com/api/mall-search/category/menu?queryType=1');
  const result = await res.json();
  return result.data
}

export default function Product({ loaderData }: Route.ComponentProps) {
  console.log(loaderData)
  // const { name, description } = loaderData;
  return (
    <div>
      <NavLink to="/">回到首页</NavLink>
      <hr/>
      <div>
        {
          loaderData.map((v: any) => (
            <p key={v.id}>{v.name}</p>
          ))
        }
      </div>
      {/*<h1>{name}</h1>*/}
      {/*<p>{description}</p>*/}
    </div>
  );
}
