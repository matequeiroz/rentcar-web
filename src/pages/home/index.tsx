import Head from "next/head";
import { useState } from "react";

import Header from "@/components/Header/Header";
import MenuNavigation  from "@/components/MenuNavigation/MenuNavigation";
import CardCarList from "@/components/CardCarList/CardCarList";
import Audi from '../../../public/images/cars/Audi.svg'
import Corvete from '../../../public/images/cars/Corvete Z06.svg'
import Fastback from '../../../public/images/cars/Fastback.png'
import Lambo from '../../../public/images/cars/Lambo.svg'
import Porche from '../../../public/images/cars/Porche.svg'

export default function Home() {
  const [cars, setCars] = useState([
    {
      brand: "Audi",
      carName: "RS 5 Coupé",
      priceToDay: 190,
      photoUrl: Audi,
    },
    {
      brand: "Porche",
      carName: "Panamera",
      priceToDay: 340,
      photoUrl: Porche,
    },
    {
      brand: "Fiat",
      carName: "Fastback",
      priceToDay: 289,
      photoUrl: Fastback,
    },
    {
      brand: "Chevrolet",
      carName: "Corvette Z06",
      priceToDay: 340,
      photoUrl: Corvete,
    },
    {
      brand: "Lamborghini",
      carName: "Huracan",
      priceToDay: 400,
      photoUrl: Lambo,
    },
  ]);

  return (
    <>
      <Head>
        <title>RentCar | Início</title>
      </Head>
      <Header />
      <main>
        <CardCarList cars={cars} />
      </main>
      <MenuNavigation />
    </>
  );
}
