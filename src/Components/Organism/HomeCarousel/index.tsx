// Kullanım örneği
import { first, second, third } from "../../../assets/Organism/HomeSection";
import Carousel from "../../Molecul/Carousel";

const images = [first, second, third];
const captions = [
  "Qui irure aliquip consectetur excepteur.",
  "Culpa dolor id reprehenderit dolor.",
  "Exercitation deserunt quis.",
];

const HomeCarousel = () => {
  return (
    <section className="relative w-full h-[600px] py-20 items-center flex justify-center">
      <Carousel images={images} captions={captions} />
    </section>
  );
};

export default HomeCarousel;
