import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";

export default function Conformance() {

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            <div className="Layout-main" data-view-component="true">
              <div id="wiki-body" className="gollum-markdown-content">
                <div className="markdown-body">
                  <h1>Conformance Checking</h1>
                  <p>
                    In this example, we demonstrate how to apply conformance checking in PM4KNIME. An example workflow is shown below:</p>
                  <img
                    src={basePath +
                      "/assets/images/conformanceChecking/conformance-check-wf.png"}
                    className="img-fluid img-shadow"
                    alt="image"
                  />
                  <p>
                    The following steps will guide you to accomplish the task
                    and apply conformance checking in PM4KNIME.
                  </p>

                </div>

                <ol>
                  <li>
                    Import your event log into your workflow. For example, you can use the node <strong>XES Reader</strong> to import an event log from an XES file.
                  </li>

                  <li>
                    Import your Petri net using the node <strong>PNML Reader</strong>. Alternatively, you can apply process discovery to discover a Petri net from your event log.
                  </li>

                  <li>
                    Drag the node <strong>Alignment-Based Replayer</strong> into your workflow. Connect the event log into its first input port and the Petri net into the second input port.
                  </li>

                  <li>
                    Double-click the node to open the dialog. Configure the settings, then Click "OK".
                  </li>

                  <p>
                    <img
                      src={basePath +
                        "/assets/images/conformanceChecking/alignmentbaseReplayer.png"}
                      className="img-fluid img-shadow"
                      alt="image"
                    />
                  </p>

                  <li>
                    Drag the node <strong>Fitness Checker</strong> into your workflow. Connect the output port of the <strong>Alignment-Based Replayer</strong> to the input port of the <strong>Fitness Checker</strong>.
                  </li>

                  <li>
                    After executing the nodes, a view that contains fitness statistics is available.
                  </li>
                  <p>
                    <img
                      src={basePath +
                        "/assets/images/conformanceChecking/fitnessCheckerInformation.jpg"}
                      className="img-fluid img-shadow"
                      alt="image"
                    />
                  </p>

                  <li>
                    The "Projection View" shows the projection of the fitness results on the model.
                  </li>

                  <p>
                    <img
                      src={basePath +
                        "/assets/images/conformanceChecking/fitnessCheckerModelView.jpg"}
                      className="img-fluid img-shadow"
                      alt="image"
                    />
                  </p>

                  <li>
                    Drag the node <strong>Precision Checker</strong> into your workflow. Connect the output port of the <strong>Alignment-Based Replayer</strong> to the input port of the <strong>Precision Checker</strong>.
                  </li>

                  <li>
                    After executing the nodes, a view that contains precision statistics is available.
                  </li>
                  <p>
                    <img
                      src={basePath +
                        "/assets/images/conformanceChecking/precisionCheckerInformation.jpg"}
                      className="img-fluid img-shadow"
                      alt="image"
                    />
                  </p>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
