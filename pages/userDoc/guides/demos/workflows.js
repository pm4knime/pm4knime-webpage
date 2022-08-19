import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";
import Highlight from "react-highlight";

export default function Workflows() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="section">
                    <div className="row-userDoc">
                        <h1>Application to Real-Life Data</h1>
                        <p>
                            We used PM4KNIME to apply process mining to real-life data sets.
                        </p>

                        <h2>Workflow 1: Ticketing Management</h2>
                        <p>
                            This workflow is used to apply process mining to a real-life event log that records the execution of a ticketing management process. The data was recorded by the help desk of an Italian software company. This is a typical workflow in the field of process mining. It contains nodes for importing data from a CSV file, preprocessing, process discovery, JavaScript visualizations of the discovered models, model and data transformation, and conformance checking. The workflow is available on the KNIME Hub under {" "}
                            <a
                                href="https://kni.me/w/4qZN5nwD9bgQTaqZ"
                                rel="w1"
                            >
                                link
                            </a>. The data set is available under {" "}
                            <a
                                href="https://data.4tu.nl/articles/dataset/Dataset_belonging_to_the_help_desk_log_of_an_Italian_Company/12675977"
                                rel="data1"
                            >
                                link
                            </a>.
                        </p>
                        <img
                            src={basePath +
                                "/assets/images/workflows/w1.PNG"}
                            className="img-fluid img-shadow"
                            alt="image"
                        />

                        <br></br>
                        <br></br>


                        <h2>Workflow 2: Fine Management</h2>
                        <p>
                            This workflow is used to apply process mining to a real-life event log that records the execution of a process for managing road traffic fines. The workflow is available on the KNIME Hub under {" "}
                            <a
                                href="https://kni.me/w/rIpSfjdxhiSPBZqY"
                                rel="w2"
                            >
                                link
                            </a>. The data set is available under {" "}
                            <a
                                href="https://data.4tu.nl/articles/dataset/Road_Traffic_Fine_Management_Process/12683249"
                                rel="data2"
                            >
                                link
                            </a>.
                        </p>
                        <img
                            src={basePath +
                                "/assets/images/workflows/w2.PNG"}
                            className="img-fluid img-shadow"
                            alt="image"
                        />


                        <br></br>
                        <br></br>


                        <h2>Workflow 3: Discovery of Hybrid Process Models</h2>
                        <p>
                            This workflow is used to apply process mining to discover a hybrid Petri net and a causal graph from real-life data. The event log records business lawsuits from the Court of Justice of the State of Sao Paulo in Brazil. The workflow is available on the KNIME Hub under {" "}
                            <a
                                href="https://kni.me/w/_jr8KszZj9Pj_c8G"
                                rel="w3"
                            >
                                link
                            </a>. The data set is available under {" "}
                            <a
                                href="https://data.4tu.nl/articles/dataset/Event_log_belonging_to_the_publication_Process_Mining-Enabled_Jurimetrics_Analysis_of_a_Brazilian_Court_s_Judicial_Performance_in_the_Business_Law_Processing/14593857"
                                rel="data3"
                            >
                                link
                            </a>.
                        </p>
                        <img
                            src={basePath +
                                "/assets/images/workflows/w3.PNG"}
                            className="img-fluid img-shadow"
                            alt="image"
                        />




                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
}