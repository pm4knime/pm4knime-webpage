import Header from "../../../src/userDoc/UserDocHeader";
import Footer from "../../../src/Footer";
import Image from "next/image";
import nextConfig from "../../../next.config";

export default function Demo() {
    const baseUrl = nextConfig.basePath;

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="section">
                    <div className="row-userDoc">
                        <h3>&nbsp;</h3>
                        <h3>Demonstration Video</h3>
                        <video controls autoplay
                            src={baseUrl +
                                "/assets/videos/demoPM4KNIME.mp4"}
                            type="video/mp4"
                        />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
