// import { UncontrolledForm } from "./UncontrolledForm";
import { useState } from "react";
// import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";

function AppControlledModal() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => { setShouldShowModal(false) }}
      >
        <h1>Hello</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

// export default App;
