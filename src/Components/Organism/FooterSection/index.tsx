import { FunctionComponent } from "react";
import { discord, telegram, twitter, instagram, fm } from "../../../assets/Organism/FooterIcons";
const Footer: FunctionComponent = () => {
    return (
        <footer className="relative bottom-0 w-full h-[650px]  text-left text-xl -mt-[135px] text-white font-paragraph-1-regular overflow-hidden">

            <div className="relative -ml-4 w-[120%] h-[140px] mt-[50px] bg-[#5378F1] -rotate-3" style={{ top: "45px" }}></div>
            <div className="pb-16  bg-[#5378F1]">
                <div className="relative top-[0px] w-full flex flex-row items-start justify-between py-16 px-64 ">
                    <div className="flex flex-col items-start justify-start gap-[25px] text-lg text-black-1 font-nft-name">
                        <div className="relative w-[131px] h-8 font-gotham">
                            <img
                                className="absolute top-[-23px]  w-[154px] h-[74px] object-cover"
                                alt="Future Modern"
                                src={fm}
                            />
                        </div>
                        <div className="relative text-base font-semibold text-white">
                            Get the latest Updates
                        </div>
                        <div className="relative w-[357px] h-10 text-sm flex">
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                className="border border-gray-300 p-2 rounded-md w-[75%]"
                            />
                            <button
                                className="relative  right-[15px] rounded-3xs bg-gradient-to-r from-[#eb1484] via-[#c91cc3] to-[#c81cc5] w-[118px] h-10 flex flex-row items-center justify-center py-[9px] px-[10px] box-border text-white  rounded-2xl"
                            >Email Me!
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
                        <div className="relative inline-block w-40">NFT Marketplace</div>
                        <div className="overflow-hidden flex flex-col items-start justify-start text-base">
                            <div className="relative leading-[26px] inline-block w-40">
                                <a href="/music" className="block text-white hover:underline">Music</a>
                                <a href="/art" className="block text-white hover:underline">Art</a>
                                <a href="/video" className="block text-white hover:underline">Video</a>
                                <a href="/generative" className="block text-white hover:underline">Generative</a>
                                <a href="/category1" className="block text-white hover:underline">Category</a>
                                <a href="/category2" className="block text-white hover:underline">Category</a>
                            </div>

                        </div>
                    </div>
                    <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
                        <div className="relative inline-block w-40">Merch</div>
                        <div className="overflow-hidden flex flex-col items-start justify-start text-base">
                            <div className="relative leading-[26px] inline-block w-40">
                                <a href="/womens" className="block text-white hover:underline">Women’s</a>
                                <a href="/mens" className="block text-white hover:underline">Men’s</a>
                                <a href="/kids" className="block text-white hover:underline">Kids’</a>
                                <a href="/shoes" className="block text-white hover:underline">Shoes</a>
                                <a href="/equipment" className="block text-white hover:underline">Equipment</a>
                                <a href="/by-activity" className="block text-white hover:underline">By Activity</a>
                                <a href="/gift-cards" className="block text-white hover:underline">Gift Cards</a>
                                <a href="/sale" className="block text-white hover:underline">Sale</a>
                            </div>

                        </div>
                    </div>
                    <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
                        <div className="relative inline-block w-40">About</div>
                        <div className="overflow-hidden flex flex-col items-start justify-start text-base">
                            <div className="relative leading-[26px] inline-block w-40">
                                <a href="/about-us" className="block text-white hover:underline">About Us</a>
                                <a href="/responsibility" className="block text-white hover:underline">Responsibility</a>
                                <a href="/technology-innovation" className="block text-white hover:underline">Technology & Innovation</a>
                                <a href="/explore-stories" className="block text-white hover:underline">Explore our stories</a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="border-t-[1px] border-[#E3E1E3] w-full h-0"></div>
                </div>
                <div className="relative top-[0px] w-full flex flex-row items-start justify-between py-6 px-64 text-base">
                    <div className="relative">future modern, Inc. All Rights Reserved</div>
                    <div className="flex flex-row items-start justify-start gap-[20px]">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img
                                className="relative w-[25px] h-[25px]"
                                alt="Instagram"
                                src={instagram}
                            />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img
                                className="relative w-[25px] h-[25px]"
                                alt="Twitter"
                                src={twitter}
                            />
                        </a>
                        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                            <img
                                className="relative w-[25px] h-[25px]"
                                alt="Telegram"
                                src={telegram}
                            />
                        </a>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            <img
                                className="relative w-[25px] h-[25px]"
                                alt="Discord"
                                src={discord}
                            />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
