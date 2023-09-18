const Newslatter = () => {
    return (
      <div className="relative text-center space-y-10 min-h-[40vh] md:h-[70vh] lg:min-h-[45rem] flex flex-col justify-center items-center text-black">
        <h6 className="absolute text-6xl md:text-[9rem] font-bold text-yellow-300 text-center mx-auto -z-50 ">Newsletter</h6>
        <h6 className="text-3xl md:text-4xl font-bold">Subscribe Our Newsletter</h6>
        <p className="max-w-[16rem] text-lg font-medium">Get the latest information and promo offers directly</p>
        <div className="flex gap-4 flex-wrap items-center justify-center ">
        <div className="border-2 border-black flex items-center bg-white text-gray-600 pl-3 rounded-md">
            <input
              type="text"
              className="focus:outline-none rounded-r-md py-1 px-2 md:px-4 flex flex-grow w-80"
              placeholder="Enter email address"
            />
          </div>
          <button className="transition ease-in duration-300 rounded-md cursinter bg-black px-4 py-2 text-white hover:bg-blue-800 hover:text-black">Subscribe</button>
        </div>
      </div>
    )
  }
  
  export default Newslatter