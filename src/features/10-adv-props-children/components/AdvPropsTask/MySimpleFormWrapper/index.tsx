import React, { Component } from 'react';

import styles from './styles.module.css';

export interface ValuesMap {
  [key: string]: any;
}

export interface ErrorsMap {
  [key: string]: string[];
}

export interface RenderFnParams {
  values: ValuesMap;
  errors: ErrorsMap;
  isSubmitting: boolean;
  handleSubmit: (event: React.SyntheticEvent) => void;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface ActionsParam {
  setSubmitting: (isSubmitting: boolean) => void;
}

interface MySimpleFormWrapperProps {
  initialValues: ValuesMap;
  render: (params: RenderFnParams) => JSX.Element;
  validate: (values: ValuesMap) => ErrorsMap;
  onSubmit: (values: ValuesMap, actions: ActionsParam) => void;
}

interface MySimpleFormWrapperState {
  isSubmitting: boolean;
  values: ValuesMap;
}

export default class MySimpleFormWrapper extends Component<MySimpleFormWrapperProps, MySimpleFormWrapperState> {
  constructor(props: MySimpleFormWrapperProps) {
    super(props);
    const { initialValues } = this.props;
    this.state = {
      isSubmitting: false,
      values: { ...initialValues }
    };
  }

  render() {
    const { render, validate } = this.props;
    const { values, isSubmitting } = this.state;
    const errors = validate(values);
    const { handleSubmit, handleChange } = this;

    return (
      <div className={styles.mySimpleFormWrapper}>
        {
          render({
            values,
            errors,
            isSubmitting,
            handleSubmit,
            handleChange
          })
        }
      </div>
    );
  }

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!this.isFormValid()) {
      return;
    }

    const { values } = this.state;
    this.setState({
      isSubmitting: true
    });
    const { onSubmit } = this.props;
    const { setSubmitting } = this;
    onSubmit(values, { setSubmitting });
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    const { values } = this.state;
    this.setState({
      values: {
        ...values,
        [name]: value
      }
    });
  };

  setSubmitting = (isSubmitting: boolean) => {
    this.setState({
      isSubmitting
    });
  };

  isFormValid = () => {
    const { validate } = this.props;
    const { values } = this.state;
    const errors = validate(values);
    return Object.keys(errors).length <= 0;
  };
}
