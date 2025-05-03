import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Globe } from "lucide-react";


import { Hero } from "./components/hero";
import { Statements } from "./components/statements";
import { International } from "./components/international";
import { SignUp } from "./components/sign-up";
import { Form } from "./components/form";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="w-full">
        <div className="px-4">
          <div className="relative">
            <h1 className="font-bold text-2xl leading-[26.4px] pb-6">
              An all-in-one app that makes it easier
            </h1>
            <Image className="absolute left-[35px] top-[17px] -z-10" src="/img/icons/write-2.svg" alt="" width={114} height={18} />
          </div>
          <p className="mt-6">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
            Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
          <ul className="my-8 space-y-4">
            <li className="flex gap-2">
              <Check size={20} />
              Est et in pharetra magna adipiscing ornare aliquam.
            </li>
            <li className="flex gap-2">
              <Check size={20} />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </li>
            <li className="flex gap-2">
              <Check size={20} />
              Ullamcorper ornare in et egestas dolor orci.
            </li>
          </ul>
          <button
            className="flex items-center gap-4 py-3 font-semibold text-blue-600 cursor-pointer"
            title="Find more about the app button"
            type="button"
          >
            Find more about the app
            <ArrowRight />
          </button>
        </div>
        {/* TODO: DO THIS PART SOON */}
        <div className="bg-[url('/img/mobile/blob.svg')] w-full h-80 bg-no-repeat -mt-34 z-20">
        </div>
      </section>
      {/* TODO: I need to add Carrousel */}
      <Statements />
      <International />
      <section className="w-full flex flex-col items-center bg-blue-950 px-4 py-12 space-y-12 lg:flex-row lg:py-20">
        <div className="flex flex-col items-center text-yellow-400 w-full space-y-2 lg:space-y-4">
          <Image src="/img/icons/heart.svg" alt="" width={65} height={65} />
          <span className="font-extrabold text-5xl">195</span>
          <span>user countries</span>
        </div>

        <div className="flex flex-col items-center text-yellow-400 w-full space-y-2 lg:space-y-4">
          <Image src="/img/icons/diamond.svg" alt="" width={65} height={65} />
          <span className="font-extrabold text-5xl">1M</span>
          <span>valued teachers</span>
        </div>

        <div className="flex flex-col items-center text-yellow-400 w-full space-y-2 lg:space-y-4">
          <Image src="/img/icons/student.svg" alt="" width={65} height={65} />
          <span className="font-extrabold text-5xl">17M</span>
          <span>happy students</span>
        </div>
      </section>

      {/* TODO: DO THIS SECTION SOON */}
      <section className="">

      </section>

      <section className="py-12">
        <div className="px-4 mb-[28.5px]">
          <div className="relative">
            <h1 className="font-bold text-2xl leading-[26.4px] pb-6">
              All the cool features
            </h1>
            <Image className="absolute left-[41%] top-[17px] -z-10" src="/img/icons/write-3.svg" alt="" width={93} height={10} />
          </div>
          <p className="mb-6">Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.</p>
          <button
            className="flex items-center gap-4 py-3 font-semibold text-blue-600 cursor-pointer"
            title="Find more about the app button"
            type="button"
          >
            View all the features
            <ArrowRight />
          </button>
        </div>
        {/* TODO: Refactor this container, change the image */}
        <div className="">
          <Image src="/img/hero-2.png" alt="" width={361} height={309.5} />
        </div>
      </section>
      <SignUp />
      <Form />
      <Footer />
    </main>
  );
}
