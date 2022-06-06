import React,{PropsWithChildren, ReactElement} from 'react';
import Header from '../header/Header.component';
import styles from './Layout.module.css';

function Layout({children}: any) {
  return (
    <article id={styles.root}>
      <Header />
      <main>{children}</main>
    </article>
  )
}

export default Layout