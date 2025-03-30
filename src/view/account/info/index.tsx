import React from 'react';
import { NavLink } from "react-router";
import type { Route } from './+types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '个人中心 info' },
    { name: 'description', content: 'Welcome to 测试页面!' },
  ];
}

export default function Product({ loaderData }: Route.ComponentProps) {
  console.log(loaderData)
  return (
    <div>
      <NavLink to="/">回到首页</NavLink>
      <hr/>
      <div>
        info
      </div>
    </div>
  );
}
