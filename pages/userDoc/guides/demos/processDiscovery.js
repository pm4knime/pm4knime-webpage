import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";

export default function ProcessDiscovery() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            <div className="Layout-main" data-view-component="true">
              <div id="wiki-body" className="gollum-markdown-content">
                <div className="markdown-body">
                  <h1>Process Discovery</h1>

                  <p>
                    In this example, we demonstrate how to apply process discovery in PM4KNIME.{" "}
                  </p>
                  <p>
                    <img
                      src={basePath +
                        "/assets/images/processDiscovery/demo-simple-discover.png"}
                      className="img-fluid img-shadow"
                      alt="image"
                    />
                  </p>
                  <p>An example workflow with PM4KNIME is shown below:</p>
                  <img
                    src={basePath +
                      "/assets/images/processDiscovery/processOfDiscovery.jpg"}
                    className="img-fluid img-shadow"
                    alt="image"
                  />
                  <p>
                    The following steps will guide you to accomplish the task
                    and discover a Petri net from an XES file.
                  </p>
                  <ol>
                    {/*<li>
                      Download the{" "}
                      <a href="https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip">
                        dataset
                      </a>
                      . Extract the event log <code>running-example.xes</code>{" "}
                      from the downloaded dataset.
                    </li>
                    <li>
                      Create a workflow in KNIME called
                      "PM4KNIME-Release-01-WF-Discovery".
                    </li>*/}
                    <li>
                      Drag the node <strong>XES Reader</strong> from the <strong>Node
                        Repository</strong> into your workflow.
                    </li>

                    <p>
                      <img
                        src={basePath +
                          "/assets/images/processDiscovery/SearchXesReader.jpg"}
                        className="img-fluid img-shadow"
                        alt="image"
                      />
                    </p>
                    <li>
                      Configure the <strong>XES Reader</strong> with the path to your XES file, then click "OK" to close the dialog.
                    </li>

                    <p>
                      <img
                        src={basePath +
                          "/assets/images/processDiscovery/XESReaderDialog.jpg"}
                        className="img-fluid img-shadow"
                        alt="image"
                      />
                    </p>
                    <li>
                      After executing the node, you can right-click and select "Event Log" to open a view for inspecting the event log.
                    </li>
                    <p>
                      <img
                        src={basePath +
                          "/assets/images/processDiscovery/InspectEventLog.jpg"}
                        className="img-fluid img-shadow"
                        alt="image"
                      />
                    </p>
                    <li>
                      Drag the node <strong>Inductive Miner</strong> into your workflow and connect its input port with the output port of the <strong>XES Reader</strong>. Configure the settings with the following example values, then Click "OK".
                    </li>

                    <p>
                      <img
                        src={basePath +
                          "/assets/images/processDiscovery/InductiveMinerDialog.jpg"}
                        className="img-fluid img-shadow"
                        alt="image"
                      />
                    </p>


                    <li>Execute the <strong>Inductive Miner</strong>. </li>
                    <li>
                      After executing the node, you can right-click and select "Process Tree" to open a view for inspecting the generated process tree.
                      <p>
                        <img
                          src={basePath +
                            "/assets/images/processDiscovery/ProcessTreeResult.jpg"}
                          className="img-fluid img-shadow"
                          alt="image"
                        />
                      </p>
                    </li>
                    <li>
                      Optional: you can use the node <strong>Process Tree to Petri Net
                        Converter</strong> to transform the generated process tree into a Petri net.
                    </li>
                    <li>
                      Optional: you can export the generated Petri net with node{" "}
                      <strong>Petrinet Writer</strong>.
                    </li>
                    <img
                      src={basePath +
                        "/assets/images/processDiscovery/processOfDiscovery.jpg"}
                      className="img-fluid img-shadow"
                      alt="image"
                    />


                  </ol>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
