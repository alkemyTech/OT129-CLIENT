import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import { isValidUrl } from "../../utils/isValidUrl";
import Alert from "../Alert/Alert";

const MembersForm = ({ member = {}, handleSub }) => {
  const initialValues = {
    name: member.name ?? "",
    description: member.description ?? "",
    image: member.image ?? "",
    facebookUrl: member.facebookUrl ?? "",
    linkedinUrl: member.linkedinUrl ?? "",
  };
  const onSubmit = async (formData) => {
    const resultBase = await toBase64(formData.image);
    const newMember = { ...formData, image: resultBase };

    handleSub(newMember);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationMemberSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="form-backoffice" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Nombre:</label>
            <Field
              autoComplete="off"
              className="form-control form-control-sm w-100 mb-3 form-control form-control-sm w-100 mb-3-sm w-100 mb-3"
              data-testid="inputName"
              name="name"
              type="text"
              {...formik.getFieldProps("name")}
            />
            <ErrorMessage component={Alert} name="name" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Descripción:</label>
            <CKEditor
              config={{ placeholder: "Descripción" }}
              data={member?.description || ""}
              data-testid="inputDescription"
              editor={ClassicEditor}
              id="description"
              onChange={(event, editor) => {
                const data = editor.getData();

                formik.setFieldValue("description", data);
              }}
            />
          </div>
          <ErrorMessage component={Alert} name="description" />
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Imagen:</label>
            <input
              autoComplete="off"
              className="form-control form-control-sm w-100 mb-3"
              data-testid="inputImage"
              name="image"
              type="file"
              onChange={(event) => {
                formik.setFieldValue("image", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage component={Alert} name="image" />
          </div>
          {initialValues.image !== "" ? (
            <div className="form-group mb-3">
              <label className="form-label fw-bold mt-1 fw-bold mt-1">(Imagen actual)</label>
              <img alt="Imagen" className="preview-image" src={member?.image} />
            </div>
          ) : null}
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold">Facebook Url:</label>
            <input
              autoComplete="off"
              className="form-control form-control-sm w-100 mb-3"
              data-testid="inputFacebook"
              name="facebook"
              type="url"
              {...formik.getFieldProps("facebookUrl")}
            />
          </div>
          <ErrorMessage component={Alert} name="facebookUrl" />
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold">Linkedin Url:</label>
            <input
              autoComplete="off"
              className="form-control form-control-sm w-100 mb-3"
              data-testid="inputLinkedin"
              name="linkedin"
              type="url"
              {...formik.getFieldProps("linkedinUrl")}
            />
          </div>
          <ErrorMessage component={Alert} name="linkedinUrl" />
          <button className="submit-btn" type="submit">
            {member.id ? "EDITAR" : "CREAR"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

MembersForm.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    facebookUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
  }),
  handleSub: PropTypes.func,
};

export default MembersForm;

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]; //Formatos soportados
const validationMemberSchema = Yup.object({
  name: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("El nombre es obligatorio"),
  description: Yup.string().required("La descripción es obligatorio"),
  facebookUrl: Yup.string()
    .required("La url de Facebook es obligatorio")
    .test("is-url-valid", "La url de Facebook es obligatorio", (value) => isValidUrl(value)),
  linkedinUrl: Yup.string()
    .required("La url de LinkedIn es obligatorio")
    .test("is-url-valid", "La url de LinkedIn es obligatorio", (value) => isValidUrl(value)),
  image: Yup.mixed()
    .nullable()
    .required("La imagen es obligatoria")
    .test(
      "format",
      "El formato no es valido",
      (value) => value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});
