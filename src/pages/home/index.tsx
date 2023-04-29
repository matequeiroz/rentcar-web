import Head from "next/head";

import Header from "@/components/Header/Header";
import { MenuNavigation } from "@/components/MenuNavigation/MenuNavigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>RentCar | Início</title>
      </Head>
      <Header />
      <MenuNavigation />
    </>
  );
}
