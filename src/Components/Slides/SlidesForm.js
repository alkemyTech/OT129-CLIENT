import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import ContainerFormCard from "../../Containers/ContainerFormCard";
import { getSlides, postSlides, putSlides } from "../../Services/SlidesServices";

const SlidesForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    order: 0,
    image: "",
  });
  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getOrdersList = async () => {
    const res = await getSlides();
    let data = res.data.data;
    // arreglo de order utilizados
    const orderBlackList = data
      .map((data) => data.order)
      .filter((order) => order !== initialValues.order);

    setOrdersList(orderBlackList);
  };

  const getSlideById = async (id) => {
    setLoading(true);

    const res = await getSlides(id);

    if (res.data.success) {
      const { name, description, order, image } = res.data.data;

      setInitialValues({
        name,
        description,
        order,
        image,
      });
    } else {
      const { status } = res.data;

      alert(status.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getSlideById(id);
    }
    // se obtiene un arreglo de orders ya usados
    getOrdersList();
  }, []);

  const handleSubmit = async (formValues) => {
    let { image, ...rest } = formValues;

    if (typeof image === "object") {
      image = await toBase64(image);
      formValues = {
        image,
        ...rest,
      };
    }

    if (id) {
      await putSlides(id, formValues);
    } else {
      await postSlides(formValues);
    }
  };

  const inputFileRef = useRef();
  const validations = Yup.object({
    name: Yup.string()
      .min(4, "Debe tener al menos 4 caracteres")
      .required("Este campo es obligatorio"),
    description: Yup.string().required("Este campo es obligatorio"),
    id: Yup.boolean(),
    order: Yup.number()
      .moreThan(0, "Debe ser un numero mayor o igual a cero")
      .required("Este campo es obligatorio")
      .integer()
      .notOneOf(ordersList, "Numero de orden ya esta en uso"),
    image: Yup.string().required("Este campo es obligatorio"),
  });

  return (
    <>
      {loading ? (
        <p>LOADING...</p>
      ) : (
        <ContainerFormCard>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validations}
            onSubmit={async (values, { resetForm }) => {
              const resultbase = await toBase64(values.image);
              let formValues = {
                name: values.name,
                description: values.description,
                order: values.order,
                image: resultbase,
              };

              await handleSubmit(formValues);

              // limpio el input file
              inputFileRef.current.value = "";

              resetForm();
            }}
          >
            {({ setFieldValue }) => (
              <Form className="p-4">
                <label className="form-label fw-bold" htmlFor="name">
                  Titulo
                </label>
                <Field
                  className="form-control form-control-sm w-100"
                  id="name"
                  name="name"
                  placeholder="Titulo"
                  type="text"
                />

                <ErrorMessage className="text-danger" component="span" name="name" />
                <div className="mb-1">
                  <label className="form-label fw-bold mt-1" htmlFor="fdescription">
                    Descripcion
                  </label>
                  <Field name="description">
                    {({ field }) => (
                      <>
                        <CKEditor
                          data={field.value}
                          editor={ClassicEditor}
                          onChange={(event, editor) => {
                            setFieldValue(field.name, editor.getData());
                          }}
                        />
                      </>
                    )}
                  </Field>
                  <ErrorMessage className="text-danger" component="span" name="description" />
                </div>

                <div className="mb-1">
                  <label className="form-label fw-bold mt-1" htmlFor="order">
                    Numero de orden
                  </label>
                  <Field
                    className="input-field"
                    id="order"
                    name="order"
                    placeholder="ingrese un numero"
                    type="number"
                    onChange={(e) => {
                      setFieldValue("order", parseInt(e.currentTarget.value));
                    }}
                  />
                </div>
                <ErrorMessage className="text-danger" component="span" name="order" />
                <label className="form-label fw-bold mt-1" htmlFor="order">
                  Cargar Imagen
                </label>
                <input
                  ref={inputFileRef}
                  accept=".jpg, .png"
                  className="input-field"
                  type="file"
                  onChange={(e) => {
                    setFieldValue("image", e.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage className="text-danger" component="span" name="image" />
                <button className="btn btn-primary w-100 mt-2 fw-bold" type="submit">
                  <span
                    aria-hidden="true"
                    className={loading ? "spinner-border spinner-border-sm" : null}
                    role="status"
                  />
                  {id === undefined ? "AGREGAR SLIDES" : "EDITAR SLIDES"}
                </button>
              </Form>
            )}
          </Formik>
        </ContainerFormCard>
      )}
    </>
  );
};

SlidesForm.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  descripcion: PropTypes.string,
  image: PropTypes.string,
  order: PropTypes.number,
};

export default SlidesForm;
