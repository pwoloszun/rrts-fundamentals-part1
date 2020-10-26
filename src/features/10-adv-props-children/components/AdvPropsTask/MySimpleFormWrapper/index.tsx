import React, { Component } from 'react';

import styles from './styles.module.css';

export interface ValuesMap {
  [key: string]: any;
}

export interface ErrorsMap {
  [key: string]: string;
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
  isSubmitting: boolean; // default: false
  values: ValuesMap;
}

export default class MySimpleFormWrapper extends Component {

  constructor(props: MySimpleFormWrapperProps) {
    super(props);

    // TODO: init state
  }

  render() {

    const values = {}; // TODO 1: render form initialized with received initialValues
    const handleChange = (ev: any) => { }; // TODO 2a: handle change on each form control, store values in state
    const handleSubmit = (ev: any) => { }; // TODO 2b: handle form submit event: validate & send form values
    const errors = {}; // TODO 3: impl form controls on change validations, display error messages
    const isSubmitting = true;

    return (
      <div className={styles.mySimpleFormWrapper}>
        TODO 1: RENDER_FORM
      </div>
    );
  }

  private handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // TODO: exit if invalid
    if (!this.isFormValid()) {
      return;
    }

    // TODO: trigger onSubmit
  };

  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    // event.target as HTMLInputElement;

    // TODO: handle form control change using 'name' and 'value' properties
  };

  setSubmitting = (isSubmitting: boolean) => {
    this.setState({
      isSubmitting
    });
  };

  private isFormValid = (): boolean => {
    // TODO
    return false;
  };
}
