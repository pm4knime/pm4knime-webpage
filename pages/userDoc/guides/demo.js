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
                        Workflows are built in KNIME by sequentially connecting different nodes where each node is dedicated to performing a specific task based on the results of the preceding nodes. After installing the process mining extension, the process mining nodes will be available in the <code>Node Repository</code> under the <code>Community Nodes</code>.<br></br>
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
