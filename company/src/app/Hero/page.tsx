export default function Hero() {
  return (
    <div className='bg-white w-full h-[961px]'>
      <div
        className="bg-[#253053] px-32 mx-auto pt-32 rounded-b-3xl"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
        }}
      >
        <h1
          className="text-6xl text-center bg-clip-text text-transparent font-semibold mb-6"
          style={{
            backgroundImage: "linear-gradient(to left, white, #81a4db)",
          }}
        >
          Time tracking software for the global workforce
        </h1>

        <p
          className="text-lg text-center bg-clip-text text-transparent font-semibold"
          style={{
            backgroundImage: "linear-gradient(to left, white, #81a4db)",
          }}
        >
          Integrated time tracking, productivity metrics, and payroll for your
          distributed team.
        </p>

        <div className="flex justify-center py-6">
          <input
            className="bg-white px-4 py-3 outline-none w-[280px] rounded-md border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="text"
            placeholder="Enter email or username"
            type="text"
          />
          <button
            className="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2"
          >
            Create Account
          </button>
        </div>

        <div className="flex justify-between mt-4 z-50">
          <div className="w-[384px] h-[484px]">
            <img
              src="https://a.storyblok.com/f/172398/784x784/e4f11b8fb1/img_left2x.png/m/filters:format(webp):quality(70)"
              alt=""
              className="w-full object-fit"
            />
          </div>
          <div className="w-[384px] h-[484px]">
            <img
              src="https://a.storyblok.com/f/172398/784x784/e4f11b8fb1/img_left2x.png/m/filters:format(webp):quality(70)"
              alt=""
              className="w-full object-fit"
            />
          </div>
          <div className="w-[384px] h-[484px]">
            <img
              src="https://a.storyblok.com/f/172398/784x784/e4f11b8fb1/img_left2x.png/m/filters:format(webp):quality(70)"
              alt=""
              className="w-full object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
