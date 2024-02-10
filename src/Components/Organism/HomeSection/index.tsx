import { FunctionComponent } from "react";
import { first, second, third } from "../../../assets/Organism/HomeSection";

const HomeSection: FunctionComponent = () => {
    return (
        <section className="relative w-full h-[578px] flex flex-row items-center justify-center px-72 py-16">
            <div className="relative w-[50%]">
                <h2 className="relative  text-[48px] font-abel leading-[105.7%] inline-block">
                    [Lorem ipsum dolor, Sit amet]
                </h2>
                <h3 className="relative text-[40px] font-abel leading-[105.7%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incid.
                </h3>
            </div>
            <div className="relative w-[50%] h-full">
                <div className="relative top-[38px]  [filter:blur(57px)]">
                    <img
                        className="absolute top-[0px] left-[329px] w-[300px] h-[300px] object-cover"
                        alt=""
                        src={third}
                    />
                    <img
                        className="absolute top-[28px] left-[0px] w-[300px] h-[300px] object-cover"
                        alt=""
                        src={second}
                    />
                    <img
                        className="absolute top-[140px] left-[208px] w-[300px] h-[300px] object-cover"
                        alt=""
                        src={first}
                    />
                    <div className="absolute top-[356px] left-[20px] leading-[105.7%] inline-block w-[186px] h-[45px]">
                        Lorem ipsum dolor sit amet, consectetur.
                    </div>

                </div>
                <div className="relative">
                    <img
                        className="absolute top-[0px] left-[329px] w-[300px] h-[300px] object-cover rounded-xl"
                        alt=""
                        src={third}
                    />
                    <img
                        className="absolute top-[28px] left-[0px] w-[300px] h-[300px] object-cover  rounded-xl"
                        alt=""
                        src={second}
                    />
                    <img
                        className="absolute top-[140px] left-[208px] w-[300px] h-[300px] object-cover  rounded-xl"
                        alt=""
                        src={first}
                    />
                    <h6 className="absolute font-abel top-[356px] left-[20px] leading-[105.7%] inline-block w-[186px] h-[45px]">
                        Lorem ipsum dolor sit amet, consectetur.
                    </h6>
                </div>
            </div>

        </section>
    );
};

export default HomeSection;