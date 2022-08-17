import useCreateMarketDetail from "#/api/mutations/useCreateMarketDetail";
import { Field, FieldArray, FieldProps, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { useQueryClient } from "@tanstack/react-query";

const MarketSchema = Yup.object({
  prompt: Yup.string().required("Prompt is required"),
  description: Yup.string().required("Description is required"),
  tags: Yup.array(
    Yup.string().max(16, "Must be 16 characters or less").required()
  ),
  projected_end: Yup.date().min(
    new Date(),
    "Projected end date must be in the future"
  ),
  contracts: Yup.array(
    Yup.object({
      name: Yup.string().required("Name is required"),
    })
  ).min(1, "Must have at least one contract"),
});

const initialValues = {
  prompt: "",
  description: "",
  tags: [],
  projectedEnd: new Date(),
  contracts: [{ name: "Latest Price" }],
};

const CreateMarket: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const createMarketDetail = useCreateMarketDetail({
    onSuccess: (market) => {
      queryClient.invalidateQueries(["markets"]);
      navigate(`/markets/${market.id}`);
    },
    onError: (error) => alert(error),
  });

  return (
    <div className="container mt-3">
      <h1>Create Market</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={MarketSchema}
        onSubmit={(values) => createMarketDetail.mutate(values)}
      >
        {({ values }) => (
          <Form>
            <Field name="prompt">
              {({ field, meta }: FieldProps) => (
                <div className="mb-3">
                  <label htmlFor="prompt" className="form-label">
                    Prompt
                  </label>
                  <input
                    {...field}
                    type="text"
                    id="prompt"
                    placeholder="Prompt"
                    className={`form-control ${
                      meta.touched && meta.error && "border-danger"
                    }`}
                  />
                  {meta.touched && meta.error && (
                    <div className="text-danger">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <Field name="description">
              {({ field, meta }: FieldProps) => (
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    {...field}
                    id="description"
                    placeholder="Description"
                    className={`form-control ${
                      meta.touched && meta.error && "border-danger"
                    }`}
                  />
                  {meta.touched && meta.error && (
                    <div className="text-danger">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <Field name="projected_end">
              {({ field, meta }: FieldProps) => (
                <div className="mb-3">
                  <label htmlFor="projected_end" className="form-label">
                    Projected end date
                  </label>
                  <input
                    {...field}
                    type="date"
                    id="projected_end"
                    placeholder="Projected end date"
                    className={`form-control ${
                      meta.touched && meta.error && "border-danger"
                    }`}
                  />
                  {meta.touched && meta.error && (
                    <div className="text-danger">{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
            <FieldArray name="contracts">
              {({ push, remove }) => (
                <div>
                  <h5>Contracts</h5>
                  {values.contracts.map((contract, index) => (
                    <div key={index} className="d-flex align-items-center py-1">
                      <div className="flex-fill ">
                        <Field name={`contracts[${index}].name`}>
                          {({ field, meta }: FieldProps) => (
                            <div>
                              <input
                                {...field}
                                type="text"
                                id={`contracts[${index}].name`}
                                placeholder="Name"
                                className={`form-control ${
                                  meta.touched && meta.error && "border-danger"
                                }`}
                              />
                              {meta.touched && meta.error && (
                                <div className="text-danger">{meta.error}</div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="px-2" />
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => push({})}
                    >
                      Add contract
                    </button>
                  </div>
                </div>
              )}
            </FieldArray>
            <div className="d-flex flex-row-reverse">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateMarket;
