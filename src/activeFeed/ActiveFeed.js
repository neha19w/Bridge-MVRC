import "./ActiveFeed.css";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import right_icon from "../static/images/right_icon.svg";
import cross_icon from "../static/images/cross_icon.svg";
import { setShowActiveFeed } from "../redux/actions/actions";
import DemoInput from "../demoInput/DemoInput";

const ActiveFeed = () => {
  const dispatch = useDispatch();

  const showActiveFeedModal = useSelector(
    (state) => state.showActiveFeed.showActiveFeed
  );

  const handleClose = () => {
    console.log("close");
    dispatch(setShowActiveFeed(false));
  };
  return (
    // <div className="demoFeed-wrap">
    <div>
      {/* Demo modal */}
      {/* <Modal
        show={showActiveFeedModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        content
         fullscreen={true}
      >
        <Modal.Body> */}
   {showActiveFeedModal?   <div className="demoFeed-body">
            <div className="demoFeed-header">
              <Button type="btn" className="demoFeed-text">Demo Feed{" "}
                <button className="demoFeed-close-btn" onClick={handleClose}>
                  {" "} 
                 
                  <img src={cross_icon} alt="close alert" width={15} />
                </button>
              </Button>
            </div>
            <div className="input-feed mt-2 px-2">
                 <DemoInput/>
            </div>
          </div>:null}
        {/* </Modal.Body>
      </Modal> */}
    </div>
  );
};
export default ActiveFeed;
