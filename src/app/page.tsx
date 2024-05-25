"use client";
import { store } from "@/stores";
import Image from "next/image";
import Login from "@/Component/Login/index";
import About from "../Component/About/About";
import MBrowseByCategory from "@/Component/BrowseByCategory";

import MButton from "@/Component/Buttons/MButton";
import Enhance from "@/Component/Enhance";
import MInput from "@/Component/Input/MInput";
import Service from "@/Component/Service";
import Section from "@/Component/Section";
import SectionSlider from "@/Component/SectionSlider";
import Sidenav from "@/Component/SideNav";

import NewArrival from "@/Component/NewArrival";
import BannerSlider from "@/Component/BannerSlider";
import { Images } from "@/constants";

import {
  browseByCategory,
  ourProducts,
  thisMonth,
  todays,
} from "@/data/homePage";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{},[])
  return (
    <main className=""> 
      {/* <About /> */}
      {/* <div className="text-red-500">hello</div> */}

      <div className="px-24 w-full">
        <div className="flex gap-10 px-10 mb-16">
          <Sidenav />
          <BannerSlider
            list={[
              { name: "phone", img: Images.banner1 },
              { name: "phone", img: Images.banner1 },
              { name: "phone", img: Images.banner1 },
              { name: "phone", img: Images.banner1 },
              { name: "phone", img: Images.banner1 },
            ]}
          />
        </div>
        <SectionSlider
          title="Flash Sale"
          subTitle="Today's"
          buttonText="View More"
          data={todays}
        />

        <hr className="border" />
        <div className="!px-10 !py-6 my-10 w-full ">
          <MBrowseByCategory
            className=""
            title="Browse By Category"
            subTitle="Categories"
            data={browseByCategory}
          />
        </div>
        <Section
          title="Best Selling Products"
          subTitle="This Month"
          buttonText="View More"
          data={thisMonth}
        />
        <div className="px-10 w-full my-16">
          <Enhance />
        </div>
        <Section
          title="Explore Our Products"
          subTitle="Our Products"
          buttonText="View More"
          data={ourProducts}
          // isMinimalCard={true}
        />
        <NewArrival
          title="New Arrival"
          subTitle="Featured"
          showButton={false}
          buttonText=""
        />
        <hr className="my-3" />
        <Service />
      </div>
    </main>
  );
}
