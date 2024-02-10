import { Footer, ArtistInfoSection, FeaturedArtists, HomeSection, HomeCarousel, Navbar } from "../../Organism";
import { bg } from "../../../assets/Organism/Background";
const index = () => {
	return <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
		<Navbar/>
		<HomeCarousel/>
		<HomeSection/>
		<FeaturedArtists />
		<ArtistInfoSection />
		<Footer />

	</div>
};

export default index;
