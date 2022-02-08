import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import { isValidUrl } from "../../utils/isValidUrl";
import { editMember, createMember } from "../../Services/MembersService";
import ContainerFormCard from "../../Containers/ContainerFormCard";

import "../FormStyles.css";

const MembersForm = ({ member = {} }) => {
  const initialValues = {
    name: member?.name || "",
    description: member?.description || "",
    image: member?.image || "",
    facebookUrl: member?.facebookUrl || "",
    linkedinUrl: member?.linkedinUrl || "",
  };

  return (
    <ContainerFormCard>
      <Formik
        initialValues={initialValues}
        validationSchema={validationMemberSchema}
        onSubmit={async (formData) => {
          const resultBase = await toBase64(formData.image);
          const newMember = { ...formData, image: resultBase };

          !member.id ? createMember(newMember) : editMember(newMember, member.id);
        }}
      >
        {(formik) => (
          <Form className="p-4" onSubmit={formik.handleSubmit}>
            <div className="mb-1">
              <label className="form-label fw-bold">Nombre</label>
              <Field
                autoComplete="off"
                className="form-control form-control-sm w-100"
                name="name"
                type="text"
                // placeholder="Ingrese un título"
                {...formik.getFieldProps("name")}
              />
              <ErrorMessage className="text-danger" component="span" name="name" />
            </div>
            <div className="mb-1">
              <label className="form-label fw-bold mt-1">Descripción</label>
              <CKEditor
                config={{ placeholder: "Descripción" }}
                data={member?.description || ""}
                editor={ClassicEditor}
                id="description"
                onChange={(event, editor) => {
                  const data = editor.getData();

                  formik.setFieldValue("description", data);
                }}
              />
            </div>
            <ErrorMessage className="text-danger" component="span" name="description" />

            <div className="mb-1">
              <label className="form-label fw-bold mt-1">Imagen</label>
              <input
                autoComplete="off"
                className="form-control form-control-sm"
                name="image"
                type="file"
                onChange={(event) => {
                  formik.setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage className="text-danger" component="span" name="image" />
            </div>

            <div className="mb-1">
              <label className="form-label fw-bold">Facebook Url</label>
              <input
                autoComplete="off"
                className="form-control form-control-sm w-100"
                type="url"
                // placeholder="Ingrese un título"
                {...formik.getFieldProps("facebookUrl")}
              />
            </div>
            <ErrorMessage className="text-danger" component="span" name="link" />
            <div className="mb-1">
              <label className="form-label fw-bold">Linkedin Url</label>
              <input
                autoComplete="off"
                className="form-control form-control-sm w-100"
                type="url"
                // placeholder="Ingrese un título"
                {...formik.getFieldProps("linkedinUrl")}
              />
            </div>
            <ErrorMessage className="text-danger" component="span" name="link" />

            <button className="btn btn-primary w-100 mt-2 fw-bold" type="submit">
              {member.id ? "EDITAR" : "CREAR"}
            </button>
          </Form>
        )}
      </Formik>
    </ContainerFormCard>
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
};

export default MembersForm;

const SUPPORTED_FORMATS = ["image/jpg", "image/png"]; //Formatos soportados
const validationMemberSchema = Yup.object({
  name: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("El nombre es obligatorio"),
  description: Yup.string().required("La descripción es obligatorio"),
  facebookUrl: Yup.string()
    .required("La url es obligatoria")
    .test("is-url-valid", "La url no es valida", (value) => isValidUrl(value)),
  linkedinUrl: Yup.string()
    .required("La url es obligatoria")
    .test("is-url-valid", "La url no es valida", (value) => isValidUrl(value)),
  image: Yup.mixed()
    .nullable()
    .required("La imagen es obligatoria")
    .test(
      "format",
      "El formato no es valido",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});
