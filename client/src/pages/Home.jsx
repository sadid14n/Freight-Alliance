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
        start: "top 10%",
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
      <section className="w-full h-screen px-10 py-8 relative">
        <div className="w-full  xl:mx-auto  mx-auto 2xl:flex 2xl:flex-col 2xl:justify-center h-full">
          {/* Background div */}
          <div
            className="absolute inset-0 bg-cover bg-center -z-10 h-full"
            style={{ backgroundImage: `url(${HeroBG})` }}
          >
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-white/70"></div>
          </div>

          {/* Text content */}
          <div className="relative z-10 h-full w-full flex flex-col justify-center mx-auto 2xl:w-[80vw]   5xl:gap-14">
            <h1 className="text-7xl 2xl:text-8xl 3xl:text-[100px] 4xl:text-[160px] 5xl:text-[250px] leading-20 2xl:leading-26 3xl:leading-28 4xl:leading-46  5xl:leading-70  font-bold  font-primary w-[80%]">
              <span className="text-primary font-primary">One Alliance.</span>{" "}
              <br />
              <span className="text-accent">
                Three Powerful Logistics Solutions.
              </span>
            </h1>

            <p className="text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-6xl leading-7 2xl:leading-8 3xl:leading-12 4xl:leading-14 5xl:leading-24 font-normal  text-gray-500 py-6">
              Streamline your shipping, fulfillment, and inventory with our
              cutting-edge software, global transportation network, and
              warehousing solutions.
            </p>

            <div className="py-7 flex gap-5">
              <button className="button1">Explore Our Solutions</button>
              <button className="button2 border-2">Get a Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="w-full h-full bg-gradient-to-b from-green-300/30 to-blue-300/30 px-10 py-8 ">
        <div className="w-full  mx-auto 2xl:w-[90vw] 3xl:w-[80vw]">
          {/* first product */}
          <div
            id="card1"
            className="info-card w-full  bg-gradient-to-tr from-blue-900 via-emerald-600 to-blue-900
    mx-auto rounded-4xl flex items-center justify-center overflow-hidden sticky top-10 px-10"
          >
            {/* Wrapper for mockup + content */}
            <div className="flex items-center justify-between w-full">
              {/* Laptop mockup */}
              <div className="relative">
                <img
                  src={LaptopMockup}
                  alt="Laptop Mockup"
                  className="w-[1000px] 2xl:w-[1200px] 3xl:w-[1600px] 4xl:w-[2100px] 5xl:w-[3000px]"
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
              <div className=" ml-10  text-white">
                <h2 className="text-5xl 2xl:text-[80px] 4xl:text-[120px] 5xl:text-[160px] 4xl:text-nowrap  font-mulish font-medium ">
                  FA Software
                </h2>
                <p className="text-xl 2xl:text-[24px] 3xl:text-[28px] 4xl:text-[34px] 5xl:text-[52px] mt-6 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tempora repudiandae atque. Harum, obcaecati!
                </p>
                <button className="button2 mt-10">Visit</button>
              </div>
            </div>
          </div>

          <div
            id="card2"
            className="w-full info-card sticky top-10 bg-gradient-to-br from-purple-900 via-purple-600 to-purple-900 mx-auto rounded-4xl mt-20"
          ></div>
          <div
            id="card3"
            className="w-full info-card  sticky top-10 bg-gradient-to-tr from-green-900 via-green-800 to-green-900 mx-auto rounded-4xl mt-20"
          ></div>
        </div>
      </section>

      {/* Integrations */}
      <section className="w-full h-screen flex items-center justify-center relative py-10 px-10 ">
        <div className="xl:w-[90vw] xl:mx-auto  mx-auto">
          <div
            className="absolute inset-0 bg-cover bg-center -z-10 h-full"
            style={{ backgroundImage: `url(${Texture1})` }}
          ></div>

          <div className="absolute inset-0 bg-white/70 h-full -z-5"></div>

          <div className="flex flex-col  justify-center">
            <h2 className="heading2 ">Seamless integration with other tools</h2>
            <p className="h2Para">
              150+ Pre Built Integrations For No Additional Cost
            </p>

            <div className="flex justify-center mt-10 gap-4 2xl:gap-6 3xl:gap-8 5xl:gap-12 flex-wrap">
              {company.map((c) => (
                <div
                  key={c.id}
                  className="h-24 2xl:h-[110px] 3xl:h-[130px] 4xl:h-[170px] 5xl:h-[230px] bg-gray-100  p-4 rounded-lg px-5"
                >
                  <img
                    src={c.logo}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-10 5xl:mt-28 4xl:mt-20 3xl:mt-16 2xl:mt-12 items-center">
              <button className=" text-xl 2xl:text-[25px] 3xl:text-[30px] 4xl:text-[38px] 5xl:text-[55px] font-medium text-primary cursor-pointer">
                Explore Integrations
              </button>
              <MoveRight color="#ff5533" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-screen relative bg-gradient-to-b from-green-50 to-pink-50 py-10 px-10 flex justify-center items-center ">
        <div className="xl:w-[90vw] xl:mx-auto 2xl:w-[80%] mx-auto ">
          <h2 className="heading2">Explore our amazing features</h2>
          <p className="h2Para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            eligendi. Lorem ipsum dolor sit amet.
          </p>

          <div className="flex flex-wrap justify-center  gap-4 pt-8 ">
            {[
              {
                title: "Import /Export",
                icon: (
                  <Import size={32} color="#ff5533" className="card-icon" />
                ),
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
              {
                title: "Warehousing Storage",
                icon: (
                  <Warehouse size={32} color="#ff5533" className="card-icon" />
                ),
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
              {
                title: "Fullfillment Services",
                icon: (
                  <TramFront size={32} color="#ff5533" className="card-icon" />
                ),
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
              {
                title: "Ocen Freight",
                icon: (
                  <Sailboat size={32} color="#ff5533" className="card-icon" />
                ),
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
              {
                title: "Air Freight",
                icon: (
                  <PlaneTakeoff
                    size={32}
                    color="#ff5533"
                    className="card-icon"
                  />
                ),
                desc: "Lorem, ipsum dolor. Lorem ipsum dolor sit",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg w-[200px] 2xl:w-[220px] 3xl:w-[270px] 4xl:w-[360px] 5xl:w-[600px] px-5 py-10 "
              >
                <div className="flex justify-center pb-4">
                  <div className="bg-gray-900 p-2 rounded-lg ">
                    {/* <Import color="#ff5533" size={32} /> */}
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg 2xl:text-[24px] 3xl:text-[28px] 4xl:text-[34px] 5xl:text-[50px] font-bold text-center text-primary 5xl:my-10 4xl:my-6 3xl:my-4 2xl:my-3 my-2">
                  {item.title}
                </h3>
                <p className="text-center text-black text-sm 2xl:text-[18px] 3xl:text-[22px] 4xl:text-[28px] 5xl:text-[42px] pt-2 ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="overflow-x-hidden bg-gradient-to-tr from-indigo-700 via-sky-600 to-cyan-500  h-screen flex flex-col justify-center items-center relative px-10 py-10 pt-20 "
      >
        <div className="w-full mx-auto ">
          <div className="text-center mb-10">
            <h2 className="heading2 font-primary font-bold text-white">
              Public Cheers for Us!
            </h2>
            <p className="text-xl text-gray-300 mt-4 h2Para">
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
                  className={`w-[300px] 2xl:w-[400px] 3xl:w-[500px] 4xl:w-[600px] 5xl:w-[700px] h-full px-10 py-4 bg-white rounded-4xl shadow-md relative ${
                    i === 6 ? "mr-48" : ""
                  }`}
                >
                  <div>
                    <p className="text-7xl font-bold text-black">“</p>
                  </div>
                  <div>
                    <p className="text-lg 2xl:text-[22px] 3xl:text-[26px] 4xl:text-[34px] 5xl:text-[44px]">
                      {item.message}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center pb-5 mt-10">
                    <div className="w-10 h-10 2xl:w-14 2xl:h-14 3xl:w-18 3xl:h-18 4xl:w-22 4xl:h-22 5xl:w-30 5xl:h-30">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-[43px]">
                        {item.name}
                      </h3>
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
