import { FunctionComponent } from "react";
import { first, second, third } from "../../../assets/Organism/ArtistInfoAssets";

const ArtistInfoSection: FunctionComponent = () => {
	const artistsInfoData = [
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
	];
	return (
		<section className="relative w-full h-auto pb-32  pt-0 text-left text-131xl text-white font-button">
			{artistsInfoData.map((artist: any, index: number) => (
				<div
					key={index}
					className="relative mx-auto mb-16 w-[60%] flex flex-row h-[450px] rounded-2xl"
					style={{
						backgroundImage: `url(${artist.img})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
				>
					<div className="w-[75%]">
						<p className="text-9xl px-8 py-8 w-[55%] [text-shadow:0px_7px_14px_rgba(0,_0,_0,_0.49)]">
							artist name here
						</p>
					</div>

					<div className="relative w-[23%] h-[95%] flex flex-row items-center justify-start text-xs text-black bg-white opacity-90 rounded-xl my-auto mx-auto">
						<div className="self-stretch flex flex-col items-start justify-between p-5 box-border">
							<div className="relative w-[100%] h-[80%]">
								<p className="relative  inline-block w-[100%]">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
									sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
									laborum.
								</p>
							</div>
							<div className="relative text-2xl inline-block w-[100%]">
								<button className="m-0">[social media links]</button>
								<button className="m-0">[official website]</button>
							</div>
						</div>
					</div>
				</div>
			))}
			<div className="relative w-full h-10 flex flex-row items-center justify-center">
				<button className="relative border-pink-500 border py-3 w-[195px] rounded-xl mr-12 border-opacity-50 bg-transparent text-pink-500 px-4">
					[See other collections]
				</button>

				<button className="relative border-pink-500 border w-[190px] py-3 rounded-xl border-opacity-50 bg-transparent text-pink-500 px-4">
					[See other events]
				</button>
			</div>
		</section>
	);
};

export default ArtistInfoSection;
