import React, { useEffect, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import { isValidUrl } from "../../utils/isValidUrl";
import ContainerFormCard from "../../Containers/ContainerFormCard";

import "../FormStyles.css";

const MembersForm = ({ member = {}, handleSub }) => {
  const [memberImage, setMemberImage] = useState("");
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

  useEffect(() => {
    if (member.id) {
      setMemberImage(member.image);
    }
  }, [member]);

  return (
    <ContainerFormCard>
      <Formik
        initialValues={initialValues}
        validationSchema={validationMemberSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="p-4" onSubmit={formik.handleSubmit}>
            <div className="mb-1">
              <label className="form-label fw-bold">Nombre</label>
              <input
                className="form-control form-control-sm w-100"
                data-testid="inputName"
                name="name"
                placeholder={initialValues?.name || "Nombre"}
                type="text"
                {...formik.getFieldProps("name")}
              />
              <ErrorMessage className="text-danger" component="span" name="name" />
            </div>
            <div className="mb-1">
              <label className="form-label fw-bold mt-1">Descripción</label>
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
            <ErrorMessage className="text-danger" component="span" name="description" />

            <div className="mb-1">
              <label className="form-label fw-bold mt-1">Imagen</label>
              <input
                className="form-control form-control-sm"
                data-testid="inputImage"
                name="image"
                type="file"
                onChange={(event) => {
                  formik.setFieldValue("image", event.currentTarget.files[0]);
                  setMemberImage(URL.createObjectURL(event.currentTarget.files[0]));
                }}
              />
              <ErrorMessage className="text-danger" component="span" name="image" />
            </div>
            {memberImage && (
              <img alt="Imagen actual" className="d-block current-img mt-3" src={memberImage} />
            )}

            <div className="mb-1">
              <label className="form-label fw-bold">Facebook Url</label>
              <input
                autoComplete="off"
                className="form-control form-control-sm w-100"
                data-testid="inputFacebook"
                name="facebook"
                type="url"
                // placeholder="Ingrese un título"
                {...formik.getFieldProps("facebookUrl")}
              />
            </div>
            <ErrorMessage className="text-danger" component="span" name="facebookUrl" />
            <div className="mb-1">
              <label className="form-label fw-bold">Linkedin Url</label>
              <input
                autoComplete="off"
                className="form-control form-control-sm w-100"
                data-testid="inputLinkedin"
                name="linkedin"
                type="url"
                // placeholder="Ingrese un título"
                {...formik.getFieldProps("linkedinUrl")}
              />
            </div>
            <ErrorMessage className="text-danger" component="span" name="linkedinUrl" />

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
