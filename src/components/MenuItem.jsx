export default function MenuItem({ leftItem, rightItem }) {
  return (
    <>
      <div className="bg-[#2b251b] flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-20 p-10">
          <div>
            <h2 className="text-2xl mb-4 font-bold font-IvyMode-Regular">
              {leftItem.name}
            </h2>
            <p className="text-base mb-4">{leftItem.price}</p>
          </div>
          <div className="border border-[#b59f73] mr-10 hidden md:block"></div>
        </div>

        <div className="border border-[#b59f73] w-[90%] md:w-full mx-10 flex md:hidden"></div>
        <div className="w-px h-[250px] bg-[#b59f73] mx-4 hidden md:flex"></div>

        <div className="w-full md:w-1/2 text-center md:text-right md:pr-20 p-10">
          <div>
            <h2 className="text-2xl mb-4 font-bold font-IvyMode-Regular">
              {rightItem.name}
            </h2>
            <p className="text-base mb-4">{rightItem.price}</p>
          </div>
          <div className="border border-[#b59f73] ml-10 hidden md:block"></div>
        </div>
      </div>
      <div className="border ml-[20px] w-[90%] md:w-full border-[#b59f73] flex md:hidden"></div>
    </>
  );
}
