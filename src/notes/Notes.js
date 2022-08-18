import React from "react";
import "./Notes.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowNotes } from "../redux/actions/actions";
import { Modal } from "react-bootstrap";


const Notes = () => {
  const dispatch = useDispatch();
  const showNotesModal = useSelector((state) => state.showNotes.showNotes);
  const handleClose = () => {
    dispatch(setShowNotes(false));
  };

  return (
    <div className="custom-dialog">
      {/* Notes modal */}
      {/* <Modal
        show={showNotesModal}
        onHide={handleClose}
        backdrop="true"
        keyboard={false}
        bottom-right
        dialogClassName='custom-dialog'
      >
      
        <Modal.Body> */}
       { showNotesModal?  <div className="notes-body">
            <div className="notes-content1">
              <p className="notes-text">&nbsp; Index</p>
             
            </div>
            <div className="notes-content2">
              <p className="notes-text">&nbsp; Note</p>
             
            </div>
          </div>:null}
        {/* </Modal.Body>
      </Modal> */}
    </div>
  );
};
export default Notes;


// all done