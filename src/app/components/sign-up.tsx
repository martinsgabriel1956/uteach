import Image from "next/image";



export function SignUp() {
  return (
    <section className="bg-yellow-400 p-4 space-y-8">
      <div className="">
        <Image src="/img/mobile/people-1.png" alt="" width={361} height={167.12} />
      </div>
      <div className="text-center space-y-6">
        <h1 className="font-bold text-2xl leading-[26.4px]">Join a world of learning</h1>
        <p className="lg:text-[2rem] lg:leading-[51.2px]">
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
  )
}
