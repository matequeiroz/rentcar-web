import Head from "next/head";

import Header from "@/components/Header/header";
import * as S from "./styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>RentCar | Início</title>
      </Head>
      <Header />
    </>
  );
}
