const Figma = () => {
    return (
        <div className="">
            <div className="head mx-auto w-[1440px] h-[80px] flex justify-between pt-[16px] pr-[120px] pb-[16px] pl-[120px] items-center  ">
                <div>
                    <button>
                        <img className="w-[24px] h-[24px]" src="./public/Menu.png" alt="" />
                    </button>
                </div>
                <div>
                    <img
                        className="w-[160px] h-[40px] object-cover"
                        src="./public/Logo.png"
                        alt=""
                    />
                </div>
                <div className="flex gap-[16px] w-[80px] h-[32px] ">
                  <button>
                  <img
                        className=" w-[22px] h-[22px]  "
                        src="./public/Search.png"
                        alt=""
                    />
                  </button>
                  <button>

                    <img
                        className=" w-[22px] h-[22px] "
                        src="./public/Shopping.png"
                        alt=""
                        />
                        </button>
                </div>
            </div>
            <div className="slide1 w-[1440px] h-[854px] mx-auto bg-orange-300">

            </div>
        </div>
    );
};

export default Figma;
