import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from "react-router";

export default function AccountLayout() {
  return (
    <div className="flex">
      <div>
        <div><NavLink to="/account">会员中心</NavLink></div>
        <div><NavLink to="/account/info">账户信息</NavLink></div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
