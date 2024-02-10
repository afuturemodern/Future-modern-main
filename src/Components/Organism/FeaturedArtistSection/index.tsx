import { FunctionComponent } from "react";
import { first, second, third, fourth, fifth } from "../../../assets/Organism/FeaturedArtists";
const FeaturedArtists: FunctionComponent = () => {
	const artistsData = [
		{
			img: first,
			name: "Artist Name",
		},
		{
			img: second,
			name: "Artist Name",
		},
		{
			img: third,
			name: "Artist Name",
		},
		{
			img: fourth,
			name: "Artist Name",
		},
		{
			img: fifth,
			name: "Artist Name",
		},
		{
			img: first,
			name: "Artist Name",
		},
	];
	return (
		<section className="relative w-full h-[1580px] text-left mx-auto overflow-hidden">
			<div className="absolute  -ml-5 w-[120%] h-[1131px] mt-[100px]  mx-auto bg-[#EB1484] -rotate-2 "></div>
			<div className="relative w-full flex flex-col items-center mx-auto gap-[30px]">
				<p className="relative text-2xl text-left font-abel">Featured Artists</p>
				<div className="shrink-0 grid grid-cols-3 gap-[20px] text-xl">
					{artistsData.map((artist: any, index: number) => (
						<div key={index} className="relative w-[330px] h-[400px]">
							<div className="relative flex flex-col gap-[15px]">
								<img className="relative shrink-0 object-cover  rounded-xl" alt="" src={artist.img} />
								<div className="flex flex-col items-start justify-start gap-[5px]">
									<h2>Artist Name</h2>
									<button className="text-xs">[more about the artist]</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="relative  mx-auto rounded-3xs  w-[300px] h-10 flex flex-row items-center justify-center  text-sm text-red-violet">
				<button className="relative border-pink-500 border py-3 w-[195px] rounded-xl mr-12 border-opacity-50 bg-transparent text-pink-500 px-4">
					[See full roster]
				</button>
			</div>
		</section>
	);
};

export default FeaturedArtists;
