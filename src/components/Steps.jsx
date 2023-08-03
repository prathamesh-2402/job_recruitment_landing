const data = [
  {
    step: 1,
    title: "Register",
    desc: "Register as a Job seeker",
  },
  {
    step: 2,
    title: "Finish Job Profile",
    desc: "Finish your Profile by giving necessary info.",
  },
  {
    step: 3,
    title: "Seek",
    desc: "Start seeking jobs that best suits you",
  },
];

const Arrow = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="700"
      className="flex items-center justify-center w-8 h-24"
    >
      <svg
        className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <line
          fill="none"
          strokeMiterlimit="10"
          x1="2"
          y1="12"
          x2="22"
          y2="12"
        />
        <polyline
          fill="none"
          strokeMiterlimit="10"
          points="15,5 22,12 15,19 "
        />
      </svg>
    </div>
  );
};

export const Steps = () => {

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 overflow-hidden">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="700"
        className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Get It Done
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#0B666A] sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-200 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                width="52"
                height="24"
              />
            </svg>
            <p className="relative text-gray-900">Start Seeking Job with</p>
          </span>{" "}
          Lorem Ipsum <span className="text-gray-900">In Minutes</span>
        </h2>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        {data.map((each, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center"
            >
              <div className="sm:text-center flex flex-col items-center gap-4">
                <div
                  data-aos="flip-right"
                  data-aos-duration="700"
                  className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-[#071952] bg-indigo-50 sm:mx-auto"
                >
                  {each.step}
                </div>
                <h6 className="mb-2 font-semibold text-2xl leading-5">
                  {each.title}
                </h6>
                <p className="max-w-md mb-3 text-md text-gray-900 sm:mx-auto text-center">
                  {each.desc}
                </p>
              </div>
              {i < 2 && <Arrow />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
