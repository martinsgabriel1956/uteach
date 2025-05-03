import Image from "next/image";
import Link from "next/link";

import logoAltImg from '../../../public/img/logo-alt.svg';

import accessibilityIcon from '../../../public/img/icons/accessibility.svg';
import { ArrowRight, Euro, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-950 px-4 py-12 lg:px-20 text-white">
      <div className="space-y-8 pb-12 border-b border-white/20 grid lg:grid-cols-6">
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

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 py-8 w-full">
        <span className="inline-block">uteach @ 2023. All rights reserved.</span>

        <div className="flex items-center justify-between lg:gap-8">
          <Link href="#" className="">Terms</Link>
          <Link href="#" className="">Privacy</Link>
          <Link href="#" className="max-md:hidden">Contact</Link>
          <Link href="#" className="flex items-center gap-2">
            <Globe />
            EN
          </Link>
          <Link href="#" className="flex items-center gap-2">
            <Euro className="max-md:hidden" />
            EUR
          </Link>
          <Link href="#" className="">
            <Image src={accessibilityIcon} alt="accessibility icon " />
          </Link>
        </div>
      </div>
    </footer>
  )
}
