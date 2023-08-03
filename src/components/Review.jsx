// import AOS from "aos";
// import React, { useEffect } from "react";

const datacustomer = [
  {
    title: "Diving to the deep",
    date: "13 JUL 2020",
    desc:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    img:
      "https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
  },
  {
    title: "Diving to the deep",
    date: "13 JUL 2020",
    desc:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    img:
      "https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500",
  },
  {
    title: "Diving to the deep",
    date: "13 JUL 2020",
    desc:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    img:
      "https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
  },
];
export const Review = () => {
  // useEffect(() => {
  //   AOS.init({
  //     once: false,
  //     mirror: true,
  //   });
  // }, []);

  return (
    <div className="my-14 md:my-20 xl:my-28 overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex items-center justify-center"
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-700">
          Our Customer <span className="text-[#071952]">Reviews</span>
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-14 md:pt-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            {datacustomer?.map((i, key) => {
              return (
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={key}>
                  <div className="h-full text-center">
                    <img
                      data-aos="zoom-out-up"
                      data-aos-duration="700"
                      alt="testimonial"
                      className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={i?.img}
                    />
                    <p
                      data-aos="fade-left"
                      data-aos-duration="700"
                      className="leading-relaxed"
                    >
                      {i?.desc}
                    </p>
                    <span
                      data-aos="fade-right"
                      className="inline-block h-1 w-10 rounded bg-[#0B666A] mt-6 mb-4"
                    ></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      {i?.title}
                    </h2>
                    <p className="text-gray-500">Customer</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
