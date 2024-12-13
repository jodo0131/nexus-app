import { Form, FormInstance } from 'antd';

export type TFormReturnType<T> = {
  setCustomFieldValue: (fieldName: keyof T, customValue?: T[keyof T]) => void;
  form: FormInstance<T>;
};

export const useForm = <T,>(initialValues?: Partial<T>): TFormReturnType<T> => {
  const [form] = Form.useForm<T>();

  if (initialValues) {
    // @ts-ignore RecusivePartial<T> is not assignable to T
    form.setFieldsValue(initialValues);
  }

  const setCustomFieldValue = (
    fieldName: keyof T,
    customValue?: T[keyof T],
  ): void => {
    // @ts-ignore RecusivePartial<T> is not assignable to T
    form.setFieldsValue({ [fieldName]: customValue });
  };

  return { setCustomFieldValue, form };
};
