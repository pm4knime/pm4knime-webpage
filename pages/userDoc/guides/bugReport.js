import Header from "../../../src/userDoc/UserDocHeader";
import Footer from "../../../src/Footer";
import Link from "next/link";
import Image from "next/image";
import nextConfig from "../../../next.config";

export default function BugReport() {
  /*
Only Important for images it has to 
have the the base url or it does not work
*/
  const baseUrl = nextConfig.basePath;

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            <h1>Bug Report in PM4KNIME</h1>
            <p>
              This section provides the email template to report bugs on PM4KNIME. Before you report bugs, please make sure your current version is the latest.
            </p>
            <h2>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-exception-screenshot-is"></a>
            </h2>
            <h2>Bug Report - Email Template</h2>
            <p>Email address: pm4knime@fit.fraunhofer.de&nbsp;</p>
            <p>
              Node ##XXX Node## with exception <code>Exception X</code>.
            </p>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-exception-screenshot-is"></a>
            </h4>
            <p>The Exception Screenshot is:</p>
            <p>.....</p>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-example-workflow-is"></a>
            </h4>
            <p>The Example workflow is:</p>
            <p>......</p>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#more-information-in-my-knime-log"></a>
            </h4>
            <p>More information in the KNIME Log:</p>
            <p>.....</p>
            <h3>
              Example:
            </h3>
            <h3>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#pm4knime-bug-report"></a>
            </h3>

            <p>
              Node <strong>Alignment Based Replayer(Default)</strong> with exception <code>NullPointerException</code>.
            </p>
            <p>The Exception Screenshot is:</p>
            <div className={"image-container"}>
              <p>
                <Image
                  src={
                    baseUrl +
                    "/assets/images/BugReport/BugReport-screenshot-01.png"
                  }
                  layout="fill"
                  alt="Exception screenshot"
                ></Image>
              </p>
            </div>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#the-example-workflow-is-1"></a>
            </h4>
            <p>The Example workflow is:</p>
            <div className={"image-container"}>
              <p>
                To do it, we need to export the workflow through the operation:
                Click Workflow ==&gt; Export KNIME Worflow ==&gt; Choose path
                ==&gt; Upload as an attachment.{" "}
                <Image
                  src={baseUrl + "/assets/images/BugReport/KNIME-export-wf.png"}
                  layout="fill"
                  alt="Workflow Example"
                ></Image>
              </p>
            </div>
            <h4>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#more-information-in-my-knime-log-1"></a>
            </h4>
            <p>More information in the KNIME Log:</p>
            <div className={"image-container"}>
              <p>
                To find the knime.log which records the exception information
                during running KNIME, we can find the location from{" "}
                <strong>KNIME Console</strong> shown below.{" "}
                <Image
                  src={
                    baseUrl +
                    "/assets/images/BugReport/BugReport-defaultReplayer.png"
                  }
                  layout="fill"
                  alt="Default Replayer Bug"
                ></Image>
                &nbsp;After finding the knime.log, add it as one attachment to
                Email.
              </p>
            </div>
            <h2>
              <a href="https://github.com/pm4knime/pm4knime-document/wiki/Bug-Report-Template#pm4knime-bug-report-in-github"></a>
            </h2>
            <h2>Bug Report In GitHub</h2>
            <p>
              You can follow the steps in the guide {" "}
              <a href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue">
                how to create an issue
              </a>
              {" "} to report bugs on GitHub. Our repository is available under{" "} <a href="https://github.com/pm4knime/pm4knime-core">
                link
              </a>. Please provide the same information and screenshots required for the email template.
            </p>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
