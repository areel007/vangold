import React from "react";
import "./modal.css";

const TopJobsViewModal = (props) => {
  
  return (
    <>
      <div className="top-jobs-view-modal">
        <form>
          <div className="form__control">
            <div className="textarea">
              <textarea></textarea>
            </div> 
          </div>
          <div className="top-jobs-view-modal__btn">
            <div className="inner-top-jobs-view-modal__btn">
              <button className="cancel" onClose={() => props.setOpen(false)}>Cancel</button>
              <button className="apply">Apply</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TopJobsViewModal;
