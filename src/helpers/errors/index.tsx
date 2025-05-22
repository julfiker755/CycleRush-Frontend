type ApiResponseProps = {
  success: boolean;
  message: string;
  error?: any;
};
export const ResponseApiErrors = (res: ApiResponseProps, form: any) => {
  if (!res?.success && res?.error?.customErrors) {
    res.error.customErrors.forEach((err: any) => {
      form.setError(err.field, {
        type: "manual",
        message: err.message || "Invalid value",
      });
    });
  }
};
