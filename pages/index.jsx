import NavBar from "../src/components/NavBar";
import Slider from "../src/components/Slider"
import Categories from "../src/components/Categories";
import Products from '../src/components/Products'
import NewsLetter from '../src/components/NewsLetter'
import Footer from '../src/components/Footer'
import { Title } from "../src/styles/Home";



export default function Home() {
  return (
    <div>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Title>Mais Vendidos</Title>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  );

}
