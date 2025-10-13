import MainCarousel from '../components/MainCarousel';
import ActionButton from '../components/ActionButton';
// import { heroInfo } from '../importer/importer';
// import ArrowRight from "./src/assets/icons/arrow-right.svg";
// import ArrowRight from "../assets/icons/arrow-right.svg";


const Home = ({SectionInfo}) => {
  return (
    <div
      className="home-component flex min-h-[calc(100vh-45px)] items-center justify-between bg-gradient-to-r from-black via-gray-900 px-12"
      id="home"
    >
      {/* Left: Hero Section */}
      <div className="hero flex-1 pr-8">
        <h1 className="mb-6 text-5xl leading-tight font-extrabold text-[var(--color-primary-dark)]">
          {SectionInfo.section.heading}
        </h1>
        <p className="hero-description mb-10 max-w-md text-lg text-white">
          {SectionInfo.section.subHeading}
        </p>
        <div className="button-component">
          <ActionButton buttonText={SectionInfo?.section?.description?.buttons[0]}></ActionButton>
        </div>
      </div>

      {/* Right: Carousel */}
      <div className="main-carousel flex flex-1 justify-center overflow-hidden w-full max-w-screen-lg">
        <MainCarousel images = {SectionInfo?.section?.description?.imageURL}></MainCarousel>
      </div>
    </div>
  );
};

export default Home;
