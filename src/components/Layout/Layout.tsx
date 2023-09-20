import React from "react";
import classes from "./layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classNames from "classnames";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

function Layout({ children, className }: LayoutProps) {
  return (
    <div role="document" className={classNames(className, classes["container"])} key="layout">
      <Header key="header" />
      <main role="main" className={classes["main"]} key="main">
        {children}
      </main>
      <Footer key="footer" />
    </div>
  );
}

export default Layout;
