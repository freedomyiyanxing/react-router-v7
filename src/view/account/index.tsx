import React from 'react';
import { NavLink } from "react-router";
import type { Route } from './+types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: '个人中心' },
    { name: 'description', content: 'Welcome to 测试页面!' },
  ];
}

export default function Product({ loaderData }: Route.ComponentProps) {
  console.log(loaderData)
  // const { name, description } = loaderData;
  return (
    <div>
      <NavLink to="/">回到首页</NavLink>
      <hr/>
      <NavLink to="/account/info">请信息页面</NavLink>
      <div>
        个人中心
      </div>
    </div>
  );
}
