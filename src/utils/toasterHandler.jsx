import { toastr } from 'react-redux-toastr';
import React from 'react';
import { translate } from './helper';

const errorHandling = (error) => {
  const { isHttpError, httpStatus, title, message } = getErrorMessage(error);

  if (isHttpError) {
    // ----- Bad Request -----
    if (httpStatus == 400) {
      showWarning(title, message);
    }
    // ----- Unauthorized Error -----
    else if (httpStatus == 401) {
      showError(title, message, {
        showCloseButton: false,
        progressBar: true,
        position: 'top-center',
        icon: <i className="fas fa-key fa-5x" />,
        onToastrClick: () => (window.location.href = `/logout?path=${window.location.href}`),
        timeOut: 4000,
      });
      // ----- Redirect in 4 seconds -----
      setTimeout(() => (window.location.href = `/logout?path=${window.location.href}`), 4000);
    }
    // ----- Not Found -----
    else if (httpStatus == 404) {
      showWarning(title, message);
    }
    // ----- Internal Server Error -----
    else if (httpStatus == 500) {
      showError(title, message);
      // ----- Service Unavailable -----
    } else if (httpStatus == 503) {
      showError('503', 'Service Unavailable');
    } // ----- Gateway Time Our Error -----
    else if (httpStatus == 504) {
      showError(title, message);
    }
  } else {
    showError(title, message);
  }
};

const getErrorMessage = (error) => {
  let isHttpError = false;
  let httpStatus = undefined;
  let title = '';
  let message = '';

  // Analyze the error
  if (error.response !== undefined && error.response.data !== undefined && error.response.status) {
    isHttpError = true;
    httpStatus = error.response.status;
    if (error.response.data.message !== undefined && error.response.data.message !== null) {
      message = error.response.data.message;
    } else {
      message = error.response.data.detail;
    }
  } else {
    message = error.message;
  }

  if (isHttpError) {
    // ----- Bad Request -----
    if (httpStatus == 400) {
      title = `${translate('rsWarning', 'Warning')} ${httpStatus}`;
    }
    // ----- Unauthorized Error -----
    else if (httpStatus == 401) {
      title = `${translate('rsUnauthorized', 'Un-Authorized')} ${translate('rsError')}`;
      message = 'Your token has expired \n you will be redirected in 4 seconds';
    }
    // ----- Not Found -----
    else if (httpStatus == 404) {
      title = `${translate('rsWarning', 'Warning')} ${httpStatus}`;
    }
    // ----- Internal Server Error -----
    else if (httpStatus == 500) {
      title = `${translate('rsError', 'Error')} ${httpStatus}`;
    } // ----- Gateway Time Our Error -----
    else if (httpStatus == 504) {
      title = `${translate('rsError', 'Error')} ${httpStatus}`;
      message = message || 'Gateway timeout error';
    }
  } else {
    title = 'Browser Error';
  }

  return {
    isHttpError,
    httpStatus,
    title,
    message,
  };
};

const showSuccess = (title, message, options) => {
  toastr.success(title, message, options);
};

const showError = (title, message, options) => {
  toastr.error(title, message, options);
};

const showWarning = (title, message, options) => {
  toastr.warning(title, message, options);
};

const showInfo = (title, message, options) => {
  toastr.info(title, message, options);
};

export { errorHandling, showSuccess, showError, showWarning, showInfo, getErrorMessage, toastr };
