// import Image from "next/image";
import Header from "./Components/Header"
import Category from "./Components/Category"
import TopRest from "./Components/TopRest";
import OnlineDelivery from './Components/onlineDelivery'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Category></Category>
      <TopRest></TopRest>
      <OnlineDelivery></OnlineDelivery>
    </>
  );
}
