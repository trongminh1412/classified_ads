import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form } from 'reactstrap';
import { FaFolder } from 'react-icons/fa';

function uploadFile(props) {
  return (
    <>
      <div className="title">
        <h5 className="fw-bold">Photos</h5>
      </div>
      <div className="content">
        <div className="filer-input-dragDrop position-relative" id="draggable">
          <input
            className="file-show"
            type="file"
            accept="image/*"
            name="photo"
            id="filePhoto"
            title=" "
          />

          <div className="previewPhoto"></div>
          <div className="filer-input-inner">
            <div className="filer-input-text">
              <h6 className="font-weight-light">Drag & drop files here ...</h6>
              <h6 className="font-weight-light">(Or click to select files)</h6>
            </div>
          </div>
        </div>
        <div className="uploads">
          <input
            type="file"
            accept="image/*"
            name="photo"
            id="upload-photo"
            title=" "
          />
          <label htmlFor="upload-photo" className="upload-photo">
            <FaFolder className="icon" />
            Browse...
          </label>
          <h6 className="fs-14 py-4">
            Add up to 6 pictures. Use real pictures of your product, not
            catalogs.
          </h6>
          <div className="d-flex justify-content-center">
            <a className="btn btn-load me-3">Previous</a>
            <a className="btn btn-create">Next</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default uploadFile;
