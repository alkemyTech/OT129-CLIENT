import React, { useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

import { redirectToMercadoPago } from "./sdkMercadoPago";

const DonationAmountModal = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <button
        className="general-btn fill-btn"
        data-bs-target="#exampleModal"
        data-bs-toggle="modal"
        type="button"
      >
        Contribuye
      </button>

      <div
        aria-hidden="true"
        aria-labelledby="exampleModalLabel"
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <i className="fas fa-hand-holding-usd" />
              <h5 className="modal-title ms-2">Donar</h5>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              />
            </div>
            <div className="modal-body">
              <Formik
                initialValues={initialValues}
                validationSchema={validationAmountSchema}
                onSubmit={async ({ amount }) => {
                  setLoading(true);
                  await redirectToMercadoPago(amount);
                  setLoading(false);
                }}
              >
                {(formik) => (
                  <Form id="formAmount">
                    <input
                      className="form-control "
                      placeholder="Monto de su donación"
                      type="number"
                      {...formik.getFieldProps("amount")}
                    />
                    <ErrorMessage className="text-danger" component="span" name="amount" />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="modal-footer">
              <button className="general-btn fill-black-btn" data-bs-dismiss="modal" type="button">
                Salir
              </button>
              {loading ? (
                <button disabled className="general-btn fill-btn" type="button">
                  <span
                    aria-hidden="true"
                    className="spinner-border spinner-border-sm"
                    role="status"
                  />
                </button>
              ) : (
                <button className="general-btn fill-btn" form="formAmount" type="submit">
                  Donar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationAmountModal;

const initialValues = {
  amount: undefined,
};

const validationAmountSchema = Yup.object({
  amount: Yup.number().min(1, "La cantidad mínima es de $1").required("La cantidad es obligatoria"),
});
