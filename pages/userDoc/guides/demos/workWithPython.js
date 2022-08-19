import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";
import Highlight from "react-highlight";

export default function WorkWithPython() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            <h1>Python Integration</h1>
            <p>
              KNIME provides a Python extension that enables python scripting in KNIME.In this example, we demonstrate how to integrate the process mining library {" "}
              <a href="http://pm4py.org/" target="_blank">
                PM4Py
              </a>{" "} into KNIME. We will use PM4Py to apply process discovery.
            </p>



            <ol>
              <li>
                First, you need to install the KNIME Python Integration. Instruction are available under {" "}
                <a
                  href="https://docs.knime.com/2018-12/python_installation_guide/index.html"
                  rel="nofollow"
                >
                  link
                </a>.
              </li>

              <li>
                Drag the node <strong>Python Source</strong> into your workflow.
              </li>

              <li>
                Double-click the node to open the dialog. Configure the settings as follows:
              </li>

              <img
                src={basePath +
                  "/assets/images/workingWithPython/PythonSouce-configuration-01.png"}
                className="img-fluid img-shadow"
                alt="image"
              />

              <li>
                After executing the node, right-click the node and open the view. The view shows the discovered model.
              </li>

              <img
                src={basePath +
                  "/assets/images/workingWithPython/PythonSouce-result-01.png"}
                className="img-fluid img-shadow"
                alt="image"
              />
            </ol>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
