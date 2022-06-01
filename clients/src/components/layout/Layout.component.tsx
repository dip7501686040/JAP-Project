import React,{PropsWithChildren, ReactElement} from 'react';
import styles from './Layout.module.css';

function Layout({children}: any) {
  return (
    <article id={styles.root}>{children}</article>
  )
}

export default Layout