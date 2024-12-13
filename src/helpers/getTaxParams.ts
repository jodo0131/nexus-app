import { omit } from 'lodash';
import { TTaxForm } from 'models/TTaxForm';

export const getTaxParams = (taxform: TTaxForm) => {
  const params = omit(taxform, 'id', 'year', 'clientId', 'compiledDate');

  // get all the taxparams and return with name, type and values
  return Object.entries(params).map(([name, values]) => ({
    name,
    type: values.type,
    values: values.values,
  }));
};
