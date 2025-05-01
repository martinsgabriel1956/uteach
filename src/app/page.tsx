import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CirclePlay, Globe, Menu } from "lucide-react";

import logoImg from '../../public/img/logo.svg';
import logoAltImg from '../../public/img/logo-alt.svg';
import heroImg from '../../public/img/hero.png';
import firstIcon from '../../public/img/icons/icon-1.svg';
import secondIcon from '../../public/img/icons/icon-2.svg';
import thirdIcon from '../../public/img/icons/icon-3.svg';
import fourthIcon from '../../public/img/icons/icon-4.svg';
import fiftyIcon from '../../public/img/icons/icon-5.svg';
import accessibilityIcon from '../../public/img/icons/accessibility.svg'

export default function Home() {
  return (
    <main className="">
      <section className="px-4">
        <header>
          <nav className="flex items-center justify-between py-4 lg:justify-start">
            <Image src={logoImg} alt="uTeach logo" />
            <nav className="lg:hidden">
              <button
                type="button"
                title="Menu Hamburguer icon"
                className="cursor-pointer"
              >
                <Menu />
              </button>
            </nav>
            <nav className="max-md:sr-only">
              <Link href="#">Products</Link>
              <Link href="#">Solutions</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Resources</Link>
            </nav>
          </nav>
          <nav className="max-md:sr-only">
            <Link href="#">Log In</Link>
            <Link href="#">Sign Up Now</Link>
          </nav>
        </header>
        <div className="">
          <div className="pt-12">
            <div className="relative">
              <h1 className="font-bold text-[40px] leading-11 pb-6">
                Teach students worldwide
              </h1>
              <Image className="absolute top-[29px] -z-10" src="/img/icons/write-1.svg" alt="" width={114} height={18} />
            </div>
            <p>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
            <div className="mt-6 flex items-center gap-6">
              <button
                className="bg-orange-500 p-3 rounded-lg text-white font-bold text-base cursor-pointer max-w-60 w-full hover:bg-orange-800 transition-colors delay-100"
              >
                Sign Up Now
              </button>
              <button className="text-blue-600 font-semibold text-base flex items-center gap-4 cursor-pointer max-w-60 w-full">
                <CirclePlay />
                View Demo
              </button>
            </div>
            <div className="mt-8">
              <span>
                Trusted by
                leading companies
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
          <div className="my-12">
            <Image src={heroImg} alt="" width={361} height={329} />
          </div>
        </div>
      </section>
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
      <section className="bg-yellow-400 pt-12 flex flex-col">
        <div className="px-4">
          <p>Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.</p>

          <span className="mt-4 inline-flex flex-col">
            Marie Poirot,
            <strong>Bigapp</strong>
          </span>
        </div>
        <div className="-mb-12">
          <Image src="/img/picture-1.svg" alt="" width={434} height={455} />
        </div>
      </section>

      <section className="mt-12 px-4 mb-8">
        <div className="">
          <div className="relative">
            <h1 className="font-bold text-2xl leading-[26.4px] pb-6">
              Meet international students
              & teachers
            </h1>
            <Image className="absolute left-1/2 -top-[17px] -z-10" src="/img/icons/airplane.svg" alt="" width={24} height={24} />
          </div>
          <p className="mb-6">Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.</p>
          <button
            className="flex items-center gap-4 py-3 font-semibold text-blue-600 cursor-pointer"
            title="Find more about the app button"
            type="button"
          >
            Explore teachers and students
            <ArrowRight />
          </button>
        </div>
        <div className="">
          <Image src="/img/hero-2.png" alt="" width={361} height={309.5} />
        </div>
      </section>

      <section className="w-full flex flex-col items-center bg-blue-950 px-4 py-12 space-y-12">
        <div className="flex flex-col items-center text-yellow-400 w-full space-y-2">
          <Image src="/img/icons/heart.svg" alt="" width={65} height={65} />
          <span className="font-extrabold text-5xl">195</span>
          <span>user countries</span>
        </div>

        <div className="flex flex-col items-center text-yellow-400 w-full space-y-2">
          <Image src="/img/icons/diamond.svg" alt="" width={65} height={65} />
          <span className="font-extrabold text-5xl">1M</span>
          <span>valued teachers</span>
        </div>

        <div className="flex flex-col items-center text-yellow-400 w-full space-y-2">
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
      <section className="bg-yellow-400 p-4 space-y-8">
        <div className="">
          <Image src="/img/mobile/people-1.png" alt="" width={361} height={167.12} />
        </div>
        <div className="text-center space-y-6">
          <h1 className="font-bold text-2xl leading-[26.4px]">Join a world of learning</h1>
          <p>
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
            Risus elit et fringilla habitant ut facilisi.
          </p>

          <button
            className="bg-orange-500 p-3 rounded-lg text-white font-bold text-base cursor-pointer max-w-60 w-3/6 hover:bg-orange-800 transition-colors delay-100"
          >
            Sign Up Now
          </button>
        </div>
        <div className="">
          <Image src="/img/mobile/people-2.png" alt="" width={361} height={167.12} />
        </div>
      </section>
      <section className="py-12 px-4 bg-orange-500 space-y-8 text-center text-white">
        <h1 className="font-bold text-[32px] leading-[26.4px]">Ready for your next project?</h1>
        <p>Sit elit feugiat turpis sed integer integer accumsan turpis.</p>

        <form className="flex flex-col w-full font-inter">
          <div className="w-full flex flex-col text-start items-start justify-start space-y-5">
            <div className="flex flex-col w-full space-y-5">
              <label
                htmlFor="email"
                className=" font-medium"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full rounded-lg bg-white p-4 font-normal text-sm text-gray-500 placeholder:text-gray-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col w-full space-y-5">
              <label
                htmlFor="message"
                className="text-white font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 rounded-lg min-h-20 bg-white py-5 px-4 font-normal text-sm text-gray-500 placeholder:text-gray-500"
                placeholder="What are you say?"
              />
            </div>
          </div>

          <div className="w-full mt-8">
            <button
              className="bg-blue-950 p-3 rounded-lg font-bold text-base cursor-pointer max-w-60 w-3/6 hover:bg-blue-800 transition-colors delay-100"
            >
              Request Demo
            </button>
          </div>
        </form>
      </section>

      <footer className="bg-blue-950 px-4 py-12 text-white">
        <div className="space-y-8 pb-12 border-b border-white/20">
          <Image src={logoAltImg} alt="uTeach colored logo" />

          <section className="flex flex-col">
            <strong className="py-3">Product</strong>

            <Link href="#" className="py-3">Pricing</Link>
            <Link href="#" className="py-3">Overview</Link>
            <Link href="#" className="py-3">Browse</Link>
            <Link href="#" className="py-3 flex items-center gap-2">
              Accessibility
              <span className="bg-purple-200 text-purple-900 rounded-sm text-[12px] px-2 py-0.5">BETA</span>
            </Link>
          </section>
          <section className="flex flex-col">
            <strong className="py-3">Solutions</strong>

            <Link href="#" className="py-3">Brainstorming</Link>
            <Link href="#" className="py-3">Ideation</Link>
            <Link href="#" className="py-3">Wireframing</Link>
            <Link href="#" className="py-3">Research</Link>
          </section>
          <section className="flex flex-col">
            <strong className="py-3">Resources</strong>

            <Link href="#" className="py-3">Helper Center</Link>
            <Link href="#" className="py-3">Blog</Link>
            <Link href="#" className="py-3">Tutorials</Link>
            <Link href="#" className="py-3">FAQs</Link>
          </section>
          <section className="flex flex-col">
            <strong className="py-3">Support</strong>

            <Link href="#" className="py-3">Contact Us</Link>
            <Link href="#" className="py-3">Developers</Link>
            <Link href="#" className="py-3">Documentation</Link>
            <Link href="#" className="py-3">Integrations</Link>
          </section>
          <section className="flex flex-col">
            <strong className="py-3">Company</strong>

            <Link href="#" className="py-3">About</Link>
            <Link href="#" className="py-3">Press</Link>
            <Link href="#" className="py-3">Events</Link>
            <Link href="#" className="flex items-center gap-2 py-3">
              Request Demo
              <ArrowRight />
            </Link>
          </section>
        </div>

        <div className="space-y-6 py-8">
          <span className="inline-block">uteach @ 2023. All rights reserved.</span>

          <div className="flex items-center justify-between">
            <Link href="#" className="">Terms</Link>
            <Link href="#" className="">Privacy</Link>
            <Link href="#" className="flex items-center gap-2">
              <Globe />
              EN
            </Link>
            <Link href="#" className="">EUR</Link>
            <Link href="#" className="">
              <Image src={accessibilityIcon} alt="accessibility icon " />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
