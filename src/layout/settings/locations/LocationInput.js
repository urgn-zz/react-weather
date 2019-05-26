import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

const LocationAddForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const LocationAddInput = styled.input`
  display: flex;
  flex-grow: 1;
`;

const LocationAddSubmit = styled.button`
  display: flex;
  flex-grow: 1;
`;

export default props => {
  const { add, adding } = props;
  return (
    <Formik
      initialValues={{ location: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        add(values.location);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <LocationAddForm onSubmit={handleSubmit}>
          <LocationAddInput
            type="text"
            name="location"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.location}
          />
          <LocationAddSubmit type="submit" disabled={adding}>
            Submit
          </LocationAddSubmit>
        </LocationAddForm>
      )}
    </Formik>
  );
};
