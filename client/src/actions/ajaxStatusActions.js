export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';

export const beginAjaxCall = () => ({
  type: BEGIN_AJAX_CALL
});

export const ajaxCallError = () => ({
  type: AJAX_CALL_ERROR
});
