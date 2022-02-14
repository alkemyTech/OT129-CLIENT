import React, { useState } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import "reactjs-popup/dist/index.css";
import "./RegisterPopup.css";
import MOCKUP_PDF from "../../assets/mockup.pdf";

const RegisterPopup = ({ onConfirm, state }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Popup
      modal
      trigger={
        <button className={state ? "btn-popup accepted" : "btn-popup"} type="button">
          Términos y condiciones
        </button>
      }
    >
      {(close) => (
        <div className="modal-container">
          <div className="document-container">
            <Document file={MOCKUP_PDF} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <div className="document-control-wrapper">
              {pageNumber === 1 ? null : (
                <button className="btn-control" onClick={previousPage}>
                  {"❮"}
                </button>
              )}
              <p className="text-center">
                Página {pageNumber} de {numPages}
              </p>
              {pageNumber === numPages ? null : (
                <button className="btn-control" onClick={nextPage}>
                  {"❯"}
                </button>
              )}
            </div>
          </div>
          <div className="modal-btn-wrapper">
            <button
              className="btn btn-decline"
              type="button"
              onClick={() => {
                onConfirm(false);
                close();
              }}
            >
              Cancelar
            </button>
            <button
              className="btn btn-accept"
              type="button"
              onClick={() => {
                onConfirm(true);
                close();
              }}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

RegisterPopup.propTypes = {
  onConfirm: PropTypes.func,
  state: PropTypes.bool,
};

export default RegisterPopup;
