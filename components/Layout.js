import Nav from "./Nav";
import Head from "next/head"
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Head><title>Next JS Albums</title></Head>
        <h1>Next JS Albums</h1>
        <hr className={styles.h1}></hr>
        {children}
      </div>
    </>
  );
};

export default Layout;
