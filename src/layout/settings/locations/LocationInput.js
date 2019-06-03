import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Button from '../../common/Button';

const LocationAddForm = styled.form`
  display: flex;
  flex-direction: row;
  padding: 12px;
  text-align: center;
`;

const LocationAddInput = styled.input`
  display: flex;
  flex-grow: 1;
  margin-right: 12px;
  border-radius: 30px;
  border: 0px;
  padding: 4px 15px;
`;

const LocationAddSubmit = styled(Button)`
  && {
    border-color: #d9d872;
    background-color: #58b368;
    display: flex;
    flex-grow: 0;

    &:hover {
      background-color: #d9d872;
    }
  }
`;

const ButtonHolder = styled.div`
  text-align: center;
  width: 100%;
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
            <ButtonHolder>ADD</ButtonHolder>
          </LocationAddSubmit>
          
        </LocationAddForm>
      )}
    </Formik>
  );
};
