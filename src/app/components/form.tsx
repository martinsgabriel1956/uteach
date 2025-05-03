export function Form() {
  return (
    <section className="py-12 px-4 lg:py-[5.375rem] lg:px-20 bg-orange-500 space-y-8 text-center text-white">
      <h1 className="font-bold text-[2rem] leading-[26.4px] lg:text-[3.5rem] lg:leading-[61.6px]">Ready for your next project?</h1>
      <p className="">Sit elit feugiat turpis sed integer integer accumsan turpis.</p>

      <form className="flex flex-col w-full font-inter">
        <div className="w-full flex flex-col text-start items-start justify-start space-y-5 max-w-[550px] mx-auto">
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
  )
}
