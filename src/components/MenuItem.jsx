export default function MenuItem({ leftItem, rightItem }) {
  const isSingle = !rightItem.name;

  return (
    <>
      <div className="bg-[#2b251b] flex flex-col md:flex-row items-stretch">
        {/* SOL BLOK */}
        <div
          className={`text-center p-10 w-full md:w-1/2 md:text-left md:pl-20`}
        >
          <div>
            <h2 className="text-2xl mb-4 font-bold font-IvyMode-Regular">
              {leftItem.name}
            </h2>
            <p className="text-base mb-4">{leftItem.desc}</p>
          </div>

          <div className="border border-[#b59f73] mr-10 hidden md:block"></div>
        </div>

        {/* Orta çizgi (her zaman göster ama görünüm koşuluna göre ayarla) */}
        <div
          className={`${
            rightItem.name ? 'md:flex' : 'md:flex'
          } w-px bg-[#b59f73] mx-4 hidden`}
        ></div>
        <div className="border ml-[20px] w-[90%] md:w-full border-[#b59f73] flex md:hidden"></div>

        {/* SAĞ BLOK varsa göster, yoksa boş div bırak */}
        {rightItem.name ? (
          <>
            <div className="w-full md:w-1/2 text-center md:text-right md:pr-20 p-10">
              <div>
                <h2 className="text-2xl mb-4 font-bold font-IvyMode-Regular">
                  {rightItem.name}
                </h2>
                <p className="text-base mb-4">{rightItem.desc}</p>
              </div>
              <div className="border border-[#b59f73] ml-10 hidden md:block"></div>
            </div>
            <div className="border ml-[20px] w-[90%] md:w-full border-[#b59f73] flex md:hidden"></div>
          </>
        ) : (
          <div className="hidden md:block w-1/2 p-10"></div>
        )}
      </div>

      {/* Mobilde alt ayırıcı çizgi */}
    </>
  );
}
