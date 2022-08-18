import Header from "../../../src/userDoc/UserDocHeader";
import Footer from "../../../src/Footer";
import Image from "next/image";
import nextConfig from "../../../next.config";

export default function Installation() {
  const baseUrl = nextConfig.basePath;

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            {/* <h1>Installation Instructions</h1>
            <p>
              KNIME is installed at first to enable PM4KNIME usage. After
              installing KNIME, the PM4KNIME as one KNIME extension is installed
              separately by giving a link. KNIME Server supports workflow
              sharing and cooperation in KNIME, its use and installation are
              optional in this project.
            </p> 
            <h4>&nbsp;</h4>
            <h4>ATTENTION!!</h4>
            <p>
              If this is not your first time to install PM4KNIME, due to the
              modification of update site changes, some old update sites become
              invalid. Please make sure to delete those invalid update sites at
              first; Otherwise, there will be errors during installation or the
              installation is stuck.
            </p>
            <h2>&nbsp;</h2>
            <h2>KNIME Analaytic Platform Installation</h2>
            <p>This is the installation for the normal user of PM4KNIME.</p>
            <ul>
              <li>
                <a href="https://www.knime.com/" rel="nofollow">
                  KNIME
                </a>{" "}
                version 4.4 or higher The KNIME installation can be found in{" "}
                <a href="https://www.knime.com/installation" rel="nofollow">
                  https://www.knime.com/installation
                </a>
                . It includes three steps:
                <ul>
                  <li>
                    <a href="https://www.knime.com/" rel="nofollow">
                      Step 1 (Optional)
                    </a>
                    : asks for the registration on KNIME to support future
                    updates and help. You can skip it and go directly to
                  </li>
                  <li>
                    <a
                      href="https://www.knime.com/downloads/download-knime"
                      rel="nofollow"
                    >
                      Step 2
                    </a>{" "}
                    : download the version for Windows 64x in default.
                  </li>
                  <li>
                    <a href="https://www.knime.com/next-steps" rel="nofollow">
                      Step 3
                    </a>
                    : some guides on the basic usage on KNIME. After reading
                    this instruction, you should be able to create a workflow in
                    KNIME, and read CSV file into KNIME.
                  </li>
                </ul>
              </li>
            </ul>
            <h2>&nbsp;</h2>*/}
            <h2>PM4KNIME Installation</h2>
            <ol>
              <li>
                {" "}
                <a href="https://www.knime.com/getting-started-download">
                  Download
                </a>
                {" "} and {" "}
                <a href="https://www.knime.com/installation">
                  install
                </a>
                {" "} the latest version of KNIME Analytics Platform.
              </li>
              <li>
                {" "}
                Go to the {" "}
                <a href="https://hub.knime.com/pm4knime/extensions/org.pm4knime.feature/latest">
                  Process Mining Extension web page on the KNIME Hub
                </a>
                .
              </li>
              <li>
                Drag and drop the extension icon into the workbench of KNIME Analytics Platform.
                <div className="row">
                  <div className="col-12">
                    <img
                      src={baseUrl + "/assets/images/Installation/DragAndDrop.png"}
                      className="img-fluid img-shadow"
                      alt="Responsive image"
                    />
                  </div>
                </div>
              </li>
              <li>
                A window will open asking if you want to search and install the extension or integration. Click "Yes" and follow the instructions.
              </li>

            </ol>

            {/* <h3>&nbsp;</h3>
            <h3>PM4KNIME Updates and Uninstall</h3>
            <p>
              After installation of PM4KNIME, if there is a new version
              available, it is recommended to update the installed version. The
              update can be done into ways:
            </p>
            <ul>
              <li>With all updates into KNIME</li>
            </ul>
            <ol>
              <li>
                <strong>File</strong> &gt; <strong>Update KNIME</strong>. It
                lists all the extensions for updates. Sometimes, it takes a long
                time to show.
              </li>
              <li>Choose PM4KNIME to update.</li>
            </ol>
            <ul>
              <li>Specific update for PM4KNIME and Uninstallation</li>
            </ul>
            <ol>
              <li>
                <p>
                  <strong>File</strong> &gt;{" "}
                  <strong>Install KNIME Extension</strong>
                </p>
              </li>
              <li>
                <p>
                  Choose the **what is already installed ** and click on it. It
                  shows the installed extensions in KNIME.{" "}
                  <Image
                    src={
                      baseUrl +
                      "/assets/images/Installation/PM4KNIME-update.png"
                    }
                    height="300px"
                    width="500px"
                    alt="Exception screenshot"
                  ></Image>
                </p>
              </li>
              <li>
                <p>
                  Choose pm4knime Feature. At the bottom, three options are
                  shown, <strong>Update</strong>, <strong>Uninstall</strong> and{" "}
                  <strong>Properties</strong>.
                </p>
              </li>
              <li>
                <p>
                  Click on <strong>Update</strong> and follow the instructions
                  later to update PM4KNIME. or
                </p>
              </li>
              <li>
                <p>
                  Click on <strong>Uninstall</strong> and follow the
                  instructions later to uninstall PM4KNIME.
                </p>
              </li>
            </ol>*/}
            <h3>&nbsp;</h3>
            <h3>Build Your Own Workflow</h3>
            <p>
              Workflows are built in KNIME by sequentially connecting different nodes where each node is dedicated to performing a specific task based on the results of the preceding nodes. After installing the process mining extension, the process mining nodes will be available in the <code>Node Repository</code> under the <code>Community Nodes</code>.<br></br>
              <img
                src={baseUrl +
                  "/assets/images/Installation/PM4KNIME-category.png"}
                className="img-fluid img-shadow"
                alt="image"
              />
              <br></br> You can drag and drop nodes from the Node Repository into your workflow. Information on how to build and execute workflows in KNIME is available in the {" "}
              <a href="https://www.knime.com/getting-started-guide">
                KNIME Getting Started Guide
              </a>
              .
            </p>
            <h2>&nbsp;</h2>
            <h2>KNIME Server</h2>
            <h3>&nbsp;</h3>
            The KNIME Server is the commercial version of KNIME that extends KNIME to enable users to work cooperatively on workflows. Moreover, it supports automated and distributed executions of workflows, deployment options, workflow management, and monitoring functionalities. For more information on the KNIME Server and for licensing and pricing questions, please visit the {" "}
            <a href="https://www.knime.com/knime-server">
              web page of the KNIME Server
            </a>
            .
            {/* <h3>Requirments:</h3>
            <ul>
              <li>
                academic license to get the academic license, we need to provide
                the KNIME team with
                <ul>
                  <li>Mac address of Computer</li>
                  <li>Contact person information, email address</li>
                </ul>
              </li>
            </ul>
            <h3>&nbsp;</h3>
            <h3>Knowledge</h3>
            <ul>
              <li>
                to install KNIME Server, it is better to use a normal account,
                different as I thought before.
              </li>
              <li>
                in the license there is one limit on the user number. Currently,
                the limit is 5. The exact meaning is:
              </li>
              <li>only 5 active users are allowed to log in KNIME Server.</li>
              <li>more than 5 users are allowed to register in KNIME Server</li>
              <li>
                the active state of one user is marked since he/she logs in
                KNIME Server. It will turn into idle after one week.
              </li>
              <li>
                there is also the possibility to apply for a license without 5
                user limit. But at first, notated by people here, Let us start
                with 5.
              </li>
              <li>
                the license is valid for one year. Before they expire, We need
                to contact KNIME team again to update the license.
              </li>
            </ul>
            */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
