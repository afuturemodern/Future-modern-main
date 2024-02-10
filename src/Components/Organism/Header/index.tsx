import { FunctionComponent } from "react";
import { cartIcon, headericon, headername, searchIcon } from "../../../assets/Organism/Header";

const Navbar: FunctionComponent = () => {
	return (
		<header className="sticky top-0  z-50 w-full h-[180px] text-center items-center justify-center mb-16 text-base overflow-hidden text-white font-paragraph-3-regular ">
			<div className="absolute -top-[40px] -ml-5 bg-[#7E5A9C] w-[105%] h-[170px] -rotate-2" />
			<div className="relative top-[40px] w-full flex justify-center flex-col md:flex-row px-4">
				<div className="flex items-center justify-center mb-4 md:mb-0">
					<div
						className="w-[49px] h-[43px] overflow-hidden shrink-0 object-cover"
						style={{
							backgroundImage: `url(${headericon})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					/>
					<div
						className="w-[127px] h-[35px] overflow-hidden shrink-0 object-cover"
						style={{
							backgroundImage: `url(${headername})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					/>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[20px] w-full md:w-2/5">
					<button className="font-abel text-white text-lg">Launches</button>
					<button className="font-abel text-white text-lg">Marketplace</button>
					<button className="font-abel text-white text-lg">About</button>
				</div>

				<div className="flex flex-row items-center justify-start w-full md:w-3/5 gap-4 md:gap-[10px] mt-4 md:mt-0">
					<img
						className="absolute z-10 ml-2 w-6 h-6 object-contain pointer-events-none"
						alt=""
						src={searchIcon}
					/>
					<input
						type="text"
						placeholder="Search Item Here"
						className="outline-none pl-10 text-black rounded-2xl rounded-3xs bg-white box-border w-full md:w-[627px] h-10 flex items-center justify-start py-[7px] pr-[19px] text-xs text-grey-1 border-[1px] border-solid border-gainsboro"
					/>
				</div>

				<div className="flex flex-row items-center justify-end w-full md:w-1/5 gap-4">
					<button className="relative">
						<img className="w-[18.04px] h-[21.01px] object-cover" alt="" src={cartIcon} />
					</button>

					<button className="relative w-[104px] h-10 text-sm rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center py-2 px-4 box-border">
						<div className="font-abel">Connect</div>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
