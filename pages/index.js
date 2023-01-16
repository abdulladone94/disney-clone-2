import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Disney</title>
      </Head>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
