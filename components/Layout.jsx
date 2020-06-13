import React from "react";
import Link from "next/link";

export default (props) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <Link href="/">
            <a className="navbar-brand">Next Auth sample</a>
          </Link>
        </nav>
      </header>

      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};
