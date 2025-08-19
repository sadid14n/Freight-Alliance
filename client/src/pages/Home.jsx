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
        markers: true,
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
        markers: true,
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
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full h-full px-24 pt-38 pb-20 relative">
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
      </section>

      {/* Product Section */}
      <section className="w-full h-full bg-gradient-to-b from-green-300/30 to-blue-300/30 py-20">
        {/* first product */}
        <div
          id="card1"
          className="w-[95%] h-[700px] bg-gradient-to-tr from-blue-900 via-emerald-600 to-blue-900
 mx-auto rounded-4xl flex items-start justify-center  overflow-hidden sticky top-10"
        >
          {/* Laptop mockup */}
          <div className="relative ">
            <img
              src={LaptopMockup}
              alt="Laptop Mockup"
              className="max-w-[500px] mx-auto "
            />

            {/* Image inside laptop screen */}
            <div className="absolute top-[27%] left-[14%] w-[72%] h-[45%] overflow-hidden rounded-md ">
              <img
                src={FASoftware}
                alt="App Preview"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-105 left-1/2 -translate-x-1/2 flex justify-center flex-col">
              <h2 className="text-center text-5xl text-white font-mulish font-medium">
                FA Software
              </h2>
              <p className="w-[600px]  text-center text-xl text-white pt-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora repudiandae atque. Harum, obcaecati!
              </p>
              <button className="w-70 mx-auto rounded-full text-md py-1 bg-white mt-10 font-medium font-outfit cursor-pointer">
                Visit
              </button>
            </div>
          </div>
        </div>

        <div
          id="card2"
          className="w-[95%] h-[800px] sticky top-10 bg-gradient-to-br from-purple-900 via-purple-600 to-purple-900 mx-auto rounded-4xl mt-20"
        ></div>
        <div
          id="card3"
          className="w-[95%] h-[800px]  sticky top-10 bg-gradient-to-tr from-green-900 via-green-800 to-green-900 mx-auto rounded-4xl mt-20"
        ></div>
      </section>

      <section className="w-full h-screen relative ">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10 h-full"
          style={{ backgroundImage: `url(${Texture1})` }}
        ></div>

        <div className="absolute inset-0 bg-white/70 h-full -z-5"></div>

        <div>
          <h2 className="text-center mt-34 text-6xl max-w-[60%] mx-auto font-bold leading-18 text-accent font-primary ">
            Seamless integration with other great tools
          </h2>
          <p className="text-center text-2xl mt-10 text-gray-500">
            150+ Pre Built Integrations For No Additional Cost
          </p>

          <div className="flex justify-center mt-10 gap-4  max-w-[70%] mx-auto flex-wrap">
            {company.map((c) => (
              <div key={c.id} className="h-20 bg-gray-100  p-4 rounded-lg px-5">
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
      </section>

      <section className="w-full h-full relative bg-gradient-to-b from-green-50 to-pink-50 py-34">
        <h2 className="text-center font-primary font-bold text-6xl  text-accent">
          Explore our amazing features
        </h2>
        <p className="text-center max-w-[60%] mx-auto text-xl text-gray-500 pt-8 leading-9">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          eligendi. Lorem ipsum dolor sit amet.
        </p>

        <div className="flex flex-wrap justify-center max-w-[70%] mx-auto gap-4 pt-8">
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
      </section>

      <section className="w-full h-full relative py-34 bg-gradient-to-br from-blue-50 to-white">
        <h2 className="text-center text-6xl font-primary font-bold text-accent">
          Public Cheers for Us!
        </h2>
        <p className="text-xl text-gray-500 text-center py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          aliquam.
        </p>

        <div className="max-w-[80%] mx-auto flex flex-wrap gap-4 justify-center items-center">
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
          ].map((item, i) => (
            <div key={i} className=" w-[300px] px-4 py-4 bg-white rounded-lg">
              <div className="flex gap-4 items-center pb-5">
                {/* image */}
                <div className="w-10 h-10 ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* name and id */}
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                </div>
              </div>
              {/* message */}
              <div>
                <p className="">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
