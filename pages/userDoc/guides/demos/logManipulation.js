import Header from "../../../../src/userDoc/UserDocHeader";
import Footer from "../../../../src/Footer";
import { basePath } from "../../../../next.config";
import Image from "next/image";

export default function LogManipulation() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="section">
          <div className="row-userDoc">
            <h1>Preprocessing</h1>
            <p>
              In this example, we demonstrate how to preprocess event logs in PM4KNIME. An example workflow is shown below:
            </p>
            <img
              src={basePath + "/assets/images/logManipulation/complettLog.PNG"}
              className="img-fluid img-shadow"
              alt="image"
            />


            <p>
              The following steps will guide you to preprocess an event log.
            </p>
            <ol>
              <li>
                Import your event log into your workflow. For example, you can use the node <strong>XES Reader</strong> to import an event log from an XES file.
              </li>

              <li>
                Drag the node <strong>Filter Event XLog By Frequency</strong> into your workflow. Connect the event log to the input port of the node.
              </li>

              <li>
                Double-click the node to open the dialog. Configure the settings, then Click "OK".
                <ul>
                  <li>
                    If the option <strong>Keep</strong> is enabled, the traces/trace variants that meet the filtering threshold will be kept. Otherwise, the traces/trace variants that meet the filtering threshold will be removed.
                  </li>

                  <li>
                    If the option <strong>Trace Variant Filtering</strong> is enabled, the filtering will be applied on the trace variant level; i.e., trace variants that meet the filtering threshold will be kept/removed. If this option is disabled, the filtering threshold is used to set the percentage of traces to be kept/removed.
                  </li>

                  <li>
                    The option <strong>Threshold</strong> is for setting the filtering threshold. It accepts both relative and absolute values (relative values between 0 and 1.0 and absolute integers greater than 1).
                  </li>



                </ul>
              </li>

              <img
                src={basePath +
                  "/assets/images/logManipulation/filterLogDialog.PNG"}
                className="img-fluid img-shadow"
                alt="image"
              />

              <li>
                After executing the node, the filtered log can be accessed through the output port of the node <strong>Filter Event XLog By Frequency</strong>.
              </li>


              <li>
                You can use the node <strong>Merge Event XLogs</strong> to merge two event logs. Connect two event logs to the input ports of the node.
              </li>

              <li>
                Double-click the node to open the dialog. Configure the settings, then Click "OK". The following merging strategies are available:
                <ul>
                  <li>
                    <b>Separate Trace:</b> traces with the same caseID are added to the merged event log as separate traces.
                  </li>
                  <li>
                    <b>Ignore Trace:</b> traces with the same caseID from both logs, only the traces from the first event log are added to the merged event log.
                  </li>
                  <li>
                    <b>Internal Trace Merge:</b> traces with the same caseID are merged into a single trace containing all events from these traces.
                  </li>
                  <li>
                    <b>Internal Event Merge:</b> traces with the same caseID are merged into a single trace, and events with the same eventID in this trace are merged into a single event.
                  </li>
                </ul>
              </li>
              <img
                src={basePath +
                  "/assets/images/logManipulation/LogMerge-configuration-internal-trace-02.PNG"}
                className="img-fluid img-shadow"
                alt="image"
              />
              <li>
                After executing the node, the generated event log can be accessed through the output port of the node <strong>Merge Event XLogs</strong>.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
