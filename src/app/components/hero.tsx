import { CirclePlay, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import logoImg from '../../../public/img/logo.svg';
import heroImg from '../../../public/img/hero.png';
import firstIcon from '../../../public/img/icons/icon-1.svg';
import secondIcon from '../../../public/img/icons/icon-2.svg';
import thirdIcon from '../../../public/img/icons/icon-3.svg';
import fourthIcon from '../../../public/img/icons/icon-4.svg';
import fiftyIcon from '../../../public/img/icons/icon-5.svg';

export function Hero() {
  return (
    <section className="px-4 lg:px-20 ">
      <header>
        <nav className="flex items-center justify-between py-4 lg:py-6">
          <div className="flex items-center gap-12">
            <Image src={logoImg} alt="uTeach logo" />
            <nav className="max-md:sr-only flex items-center gap-18">
              <Link
                href="#"
                className="text-base font-medium leading-6"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-base font-medium leading-6"
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="text-base font-medium leading-6"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-base font-medium leading-6"
              >
                Resources
              </Link>
            </nav>
          </div>
          <nav className="max-md:sr-only flex items-center gap-4">
            <Link
              href="#"
              className="text-base font-medium leading-6"
            >
              Log In
            </Link>
            <Link
              href="#"
              className="text-base font-medium leading-6 border-2 border-gray-950 p-3 rounded-lg hover:bg-gray-900 transition-colors delay-100 hover:text-white"
            >
              Sign Up Now
            </Link>
          </nav>

          <nav className="lg:hidden">
            <button
              type="button"
              title="Menu Hamburguer icon"
              className="cursor-pointer"
            >
              <Menu />
            </button>
          </nav>
        </nav>
      </header>
      <div className="flex flex-col lg:flex-row lg:justify-between pt-12 lg:py-20">
        <div className="max-w-[575px]">
          <div className="relative">
            <h1 className="font-bold text-[40px] leading-11 pb-6 lg:pb-8 lg:text-7xl">
              Teach students worldwide
            </h1>
            <Image className="absolute top-[29px] -z-10" src="/img/icons/mobile/write-1.svg" alt="" width={114} height={18} />
          </div>
          <p className="lg:text-2xl lg:leading-[38.4px] leading-[22.4px]  font-normal text-base">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
          <div className="mt-6 lg:mt-8 flex items-center gap-6">
            <button
              className="bg-orange-500 p-3 rounded-lg text-white font-bold text-base cursor-pointer max-w-60 w-full hover:bg-orange-800 transition-colors delay-100 lg:text-2xl lg:py-5 lg:px-6"
            >
              Sign Up Now
            </button>
            <button className="text-blue-600 font-semibold text-base flex items-center gap-4 cursor-pointer max-w-60 w-full lg:py-4 lg:px-2 lg:text-xl">
              <CirclePlay />
              View Demo
            </button>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <span className="inline lg:flex lg:flex-col">
              <span>Trusted by </span>
              <span>leading companies</span>
            </span>
            <div className="mt-4 flex items-center gap-6">
              <Image src={firstIcon} alt="" height={32} width={25.28} />
              <Image src={secondIcon} alt="" height={32} width={28.85} />
              <Image src={thirdIcon} alt="" height={32} width={32} />
              <Image src={fourthIcon} alt="" height={32} width={27.85} />
              <Image src={fiftyIcon} alt="" height={32} width={33.25} />
            </div>
          </div>
        </div>
        <div className="my-12 lg:my-0">
          <Image src={heroImg} alt="" className="lg:w-[624px]" />
        </div>
      </div>
    </section>
  )
}
