let engineerDetails = [
  {
    name: "Jobs",
    amount: "112K+"
  },
  {
    name: "Matches Made",
    amount: 12000
  },
  {
    name: "Candidates",
    amount: "40M+"
  },
  {
    name: "Faster Submission",
    amount: "2x"
  },
  {
    name: "more candidate submissions",
    amount: "45%"
  },
  {
    name: "client satisfaction",
    amount: "100%"
  },
];

const ViewPage = () => {

  return (

    <div className="overflow-hidden">

      <div className='material my-10 relative'>
        <h1 className='md:text-[2.7rem] text-[1.5rem] flex items-center justify-center font-bold text-gray-900 px-2 text-center' data-aos="fade-up" data-aos-duration="1000">Loved by leading staffing teams around the world
</h1>
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="grid grid-cols-2 gap-[1rem] md:grid-cols-3">
            {
              engineerDetails?.map((itm, i) => {
                return <div className="text-center" key={i} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" data-aos-offset="-400">
                  <h6 className="md:text-3xl font-bold text-cyan-700">
                    {itm?.amount}
                  </h6>
                  <p className="font-bold text-[0.8rem]"> {itm.name}</p>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPage