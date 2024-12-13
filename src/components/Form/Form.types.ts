import { PropsWithChildren } from 'react';
import { FormProps } from 'antd';
import { FormItemProps } from 'antd/es/form';

export type TFormProps = FormProps & PropsWithChildren;
export type TFormItemProps = { optional?: boolean } & FormItemProps;
