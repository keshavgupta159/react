import React from "react";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link href="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
