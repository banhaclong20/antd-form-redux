
const prefix = '@antd-form-redux';
export const FORM_INIT = `${prefix}/init`;
export const FORM_DESTROY = `${prefix}/destroy`;
export const FORM_CHANGE = `${prefix}/change`;
export const FORM_SUBMIT = `${prefix}/submit`;
export const FORM_STOP_SUBMIT = `${prefix}/stop_submit`;
export const FORM_CLEAR_SUBMIT_ERRORS = `${prefix}/clear_submit_errors`;
export const FORM_SUBMIT_FAILED = `${FORM_SUBMIT}/fail`;
export const FORM_SUBMIT_SUCCEEDED = `${FORM_SUBMIT}/success`;

export const initialize = (form, data) => {
  const action = {
    type: FORM_INIT,
    meta: { form },
    payload: {}
  };

  if (typeof data === 'object') {
    const fields = Object.keys(data).reduce(
      (o, k) => ({ ...o, [k]: { value: data[k] } }),
      {}
    );
    action.payload.fields = fields;
  }

  return action;
};

export const destroy = (...forms) => ({
  type: FORM_DESTROY,
  meta: { forms }
});

export const change = (form, fields) => ({
  type: FORM_CHANGE,
  meta: { form },
  payload: {
    fields
  }
});
export const startSubmit = form => ({ type: FORM_SUBMIT, meta: { form } });
export const stopSubmit = (form, errors) => ({
  type: FORM_STOP_SUBMIT,
  meta: { form },
  payload: { errors },
  error: !!errors
});

export const setSubmitSucceeded = form => ({
  type: FORM_SUBMIT_SUCCEEDED,
  meta: { form }
});

export const setSubmitFailed = form => ({
  type: FORM_SUBMIT_FAILED,
  meta: { form },
  error: true
});

export const clearSubmitErrors = form => ({
  type: FORM_CLEAR_SUBMIT_ERRORS,
  meta: { form }
});

