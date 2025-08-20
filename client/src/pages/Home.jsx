import React from "react";
import Layout from "../components/Layout";
import {
  AppWindowIcon,
  BoxIcon,
  Container,
  Import,
  MoveRight,
  PlaneTakeoff,
  Sailboat,
  TramFront,
  TruckElectric,
  Warehouse,
  Workflow,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import HeroBG from "../assets/hero-bg.jpg";
import Texture1 from "../assets/texture-1.jpg";
import Texture2 from "../assets/texture-2.jpg";
import Texture3 from "../assets/texture-3.jpg";
import Texture4 from "../assets/texture-4.jpg";

import Man1 from "../assets/man1.jpg";
import Man2 from "../assets/man2.jpg";
import Man3 from "../assets/man3.jpg";
import Women1 from "../assets/women1.jpg";
//
import FASoftware from "../assets/FA-Software.png";

import LaptopMockup from "../assets/laptop-mockup.png";

import company from "../data/company";

const Home = () => {
  useGSAP(() => {
    gsap.to("#card1", {
      scale: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: "#card1",
        start: "top 15%",
        end: "bottom 15%",
        scrub: true,
      },
    });
    gsap.to("#card2", {
      scale: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: "#card2",
        start: "top 15%",
        end: "bottom 15%",
        scrub: true,
      },
    });
    gsap.to("#card3", {
      scale: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: "#card3",
        start: "top 15%",
        end: "bottom 15%",
        scrub: true,
      },
    });

    gsap.to("#testimonials", {
      x: () => {
        let racesWidth = document.querySelector("#testimonials").scrollWidth;
        return -(racesWidth - window.innerWidth + 500); // Calculate the scroll amount dynamically
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#reviews",
        start: "top 0%",
        end: () => {
          let racesWidth = document.querySelector("#testimonials").scrollWidth;
          return `+=${racesWidth - window.innerWidth + 1000}`; // Adjust end dynamically based on scroll amount
        },
        pin: true,
        scrub: 2,
        invalidateOnRefresh: true, // Recalculate values on refresh
      },
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full h-full px-10 py-8 relative ">
        <div className="xl:w-[90vw] xl:mx-auto 2xl:w-[80%] mx-auto">
          {/* Background div */}
          <div
            className="absolute inset-0 bg-cover bg-center -z-10 h-full"
            style={{ backgroundImage: `url(${HeroBG})` }}
          >
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-white/70"></div>
          </div>

          {/* Text content */}
          <div className="relative z-10">
            <h1 className="text-7xl font-bold leading-20 font-primary w-[80%]">
              <span className="text-primary font-primary">One Alliance.</span>{" "}
              <br />
              <span className="text-accent">
                Three Powerful Logistics Solutions.
              </span>
            </h1>

            <p className="text-xl font-normal leading-7 text-gray-500 py-6">
              Streamline your shipping, fulfillment, and inventory with our
              cutting-edge software, global transportation network, and
              warehousing solutions.
            </p>

            <div className="py-7 flex gap-5">
              <button className="border-2 px-5 py-2 text-lg rounded-full bg-primary text-white cursor-pointer">
                Explore Our Solutions
              </button>
              <button className="border-2 px-5 py-2 text-lg rounded-full bg-white text-accent border-accent cursor-pointer">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="w-full h-full bg-gradient-to-b from-green-300/30 to-blue-300/30 px-10 py-8 ">
        <div className="xl:w-[90vw] xl:mx-auto 2xl:w-[80%] mx-auto">
          {/* first product */}
          <div
            id="card1"
            className="w-full h-[500px] bg-gradient-to-tr from-blue-900 via-emerald-600 to-blue-900
    mx-auto rounded-4xl flex items-center justify-center overflow-hidden sticky top-10 px-10"
          >
            {/* Wrapper for mockup + content */}
            <div className="flex items-center justify-between w-full max-w-6xl">
              {/* Laptop mockup */}
              <div className="relative">
                <img
                  src={LaptopMockup}
                  alt="Laptop Mockup"
                  className="max-w-[550px]"
                />

                {/* Image inside laptop screen */}
                <div className="absolute top-[27%] left-[14%] w-[72%] h-[45%] overflow-hidden rounded-md">
                  <img
                    src={FASoftware}
                    alt="App Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="ml-10 max-w-xl text-white">
                <h2 className="text-5xl font-mulish font-medium">
                  FA Software
                </h2>
                <p className="text-xl mt-6 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tempora repudiandae atque. Harum, obcaecati!
                </p>
                <button className="mt-10 px-6 py-2 bg-white text-blue-900 rounded-full text-md font-medium font-outfit cursor-pointer hover:bg-gray-200 transition">
                  Visit
                </button>
              </div>
            </div>
          </div>

          <div
            id="card2"
            className="w-full h-[500px] sticky top-10 bg-gradient-to-br from-purple-900 via-purple-600 to-purple-900 mx-auto rounded-4xl mt-20"
          ></div>
          <div
            id="card3"
            className="w-full h-[500px]  sticky top-10 bg-gradient-to-tr from-green-900 via-green-800 to-green-900 mx-auto rounded-4xl mt-20"
          ></div>
        </div>
      </section>

      {/* Integrations */}
      <section className="w-full h-full relative py-10 px-10">
        <div className="xl:w-[90vw] xl:mx-auto 2xl:w-[80%] mx-auto">
          <div
            className="absolute inset-0 bg-cover bg-center -z-10 h-full"
            style={{ backgroundImage: `url(${Texture1})` }}
          ></div>

          <div className="absolute inset-0 bg-white/70 h-full -z-5"></div>

          <div>
            <h2 className="text-center text-nowrap text-6xl w-full mx-auto font-bold leading-18 text-accent font-primary ">
              Seamless integration with other tools
            </h2>
            <p className="text-center text-2xl my-8 text-gray-500">
              150+ Pre Built Integrations For No Additional Cost
            </p>

            <div className="flex justify-center mt-10 gap-4  flex-wrap">
              {company.map((c) => (
                <div
                  key={c.id}
                  className="h-20 bg-gray-100  p-4 rounded-lg px-5"
                >
                  <img
                    src={c.logo}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-10 items-center">
              <button className="font-medium text-primary cursor-pointer">
                Explore Integrations
              </button>
              <MoveRight color="#ff5533" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full relative bg-gradient-to-b from-green-50 to-pink-50 py-10 px-10">
        <div className="xl:w-[90vw] xl:mx-auto 2xl:w-[80%] mx-auto">
          <h2 className="text-center font-primary font-bold text-6xl  text-accent">
            Explore our amazing features
          </h2>
          <p className="text-center max-w-[60%] mx-auto text-xl text-gray-500 pt-8 leading-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            eligendi. Lorem ipsum dolor sit amet.
          </p>

          <div className="flex flex-wrap justify-center  gap-4 pt-8">
            {[
              {
                title: "Import /Export",
                icon: <Import size={32} color="#ff5533" />,
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
              {
                title: "Warehousing Storage",
                icon: <Warehouse size={32} color="#ff5533" />,
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
              {
                title: "Fullfillment Services",
                icon: <TramFront size={32} color="#ff5533" />,
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
              {
                title: "Ocen Freight",
                icon: <Sailboat size={32} color="#ff5533" />,
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
              {
                title: "Air Freight",
                icon: <PlaneTakeoff size={32} color="#ff5533" />,
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
              {
                title: "Drayage",
                icon: <Container size={32} color="#ff5533" />,
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
            ].map((item, i) => (
              <div key={i} className=" w-[200px] px-5 py-4">
                <div className="flex justify-center pb-4">
                  <div className="bg-gray-200 p-2 rounded-lg">
                    {/* <Import color="#ff5533" size={32} /> */}
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center text-accent">
                  {item.title}
                </h3>
                <p className="text-center text-gray-500 text-sm pt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="overflow-x-hidden bg-gradient-to-tr from-indigo-700 via-sky-600 to-cyan-500  h-full flex flex-col justify-center items-center relative px-10 py-10 pt-20 "
      >
        <div className="xl:w-[90vw] xl:mx-auto 2xl:w-[80%] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-6xl font-primary font-bold text-white">
              Public Cheers for Us!
            </h2>
            <p className="text-xl text-gray-300 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, aliquam.
            </p>
          </div>

          {/* Cards wrapper */}
          <div className="w-full overflow-hidden">
            <div
              id="testimonials"
              className="w-fit flex flex-nowrap gap-10 items-center px-20 ml-32"
            >
              {[
                {
                  name: "Hikmet Atch",
                  image: Man1,
                  message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa itaque soluta",
                },
                {
                  name: "Arda Gular",
                  image: Man2,
                  message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa itaque soluta lorem shd aksjd dsknf ashd rem ipsum dolor sit amet consectetur adipisicing elit",
                },
                {
                  name: "Maria Ancelotie",
                  image: Women1,
                  message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa itaque soluta",
                },
                {
                  name: "Ragip Diler",
                  image: Man3,
                  message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa itaque soluta ",
                },
                {
                  name: "Hikmet Atch",
                  image: Man1,
                  message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa itaque soluta",
                },
                {
                  name: "Arda Gular",
                  image: Man2,
                  message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa itaque soluta lorem shd aksjd dsknf ashd rem ipsum dolor sit amet consectetur adipisicing elit",
                },
                {
                  name: "Maria Ancelotie",
                  image: Women1,
                  message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa itaque soluta",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`w-[300px] h-full px-10 py-4 bg-white rounded-4xl shadow-md relative ${
                    i === 6 ? "mr-48" : ""
                  }`}
                >
                  <div>
                    <p className="text-7xl font-bold text-black">“</p>
                  </div>
                  <div>
                    <p>{item.message}</p>
                  </div>
                  <div className="flex gap-4 items-center pb-5 mt-10">
                    <div className="w-10 h-10">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Heading stays fixed */}
      </section>
    </Layout>
  );
};

export default Home;
