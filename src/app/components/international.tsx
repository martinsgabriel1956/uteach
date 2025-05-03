import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import heroImg from '../../../public/img/hero-2.png';
import airplaneIcon from '../../../public/img/icons/airplane.svg';

export function International() {
  return (
    <section className="mt-12 px-4 lg:px-20 lg:py-20 mb-8 flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-20">
      <div className="w-full">
        <div className="relative lg:max-w-[600px]">
          <h1 className="font-bold text-2xl leading-[26.4px] pb-6 lg:text-[3.5rem] lg:leading-[61.6px]">
            Meet international
            students & teachers
          </h1>
          <Image className="absolute left-1/2 lg:left-[64%] -top-[17px] lg:-top-[40px] -z-10 lg:w-16 lg:h-16" src={airplaneIcon} alt="" />
        </div>
        <p className="mb-6 lg:text-xl lg:leading-9 lg:max-w-[600px]">Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.</p>
        <button
          className="flex items-center gap-4 py-3 font-semibold text-blue-600 cursor-pointer lg:text-xl lg:leading-6"
          title="Find more about the app button"
          type="button"
        >
          Explore teachers and students
          <ArrowRight />
        </button>
      </div>
      <div className="">
        <Image src={heroImg} alt="" />
      </div>
    </section>
  )
}
