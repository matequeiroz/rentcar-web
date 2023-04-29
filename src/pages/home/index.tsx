import Head from "next/head";

import Header from "@/components/Header/Header";
import { MenuNavigation } from "@/components/MenuNavigation/MenuNavigation";
import CardCar from "@/components/CardCar/CardCar";

export default function Home() {
  return (
    <>
      <Head>
        <title>RentCar | Início</title>
      </Head>
      <Header />
      <main>
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
      </main>
      <MenuNavigation />
    </>
  );
}
