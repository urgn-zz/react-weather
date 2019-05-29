import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Button from '../../common/Button';

const LocationAddForm = styled.form`
  display: flex;
  flex-direction: row;
  padding: 12px;
`;

const LocationAddInput = styled.input`
  display: flex;
  flex-grow: 1;
  margin-right: 12px;
`;

const LocationAddSubmit = styled(Button)`
  && {
    display: flex;
    flex-grow: 0;
  }
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
            ADD
          </LocationAddSubmit>
        </LocationAddForm>
      )}
    </Formik>
  );
};
