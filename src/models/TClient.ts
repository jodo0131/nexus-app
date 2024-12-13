import { TTaxForm } from './TTaxForm';

// Interface representing a client, this is a sub-object of the customer object
export type TClient = {
  id: string; // Unique identifier for the client
  businessName: string; // Name of the client's business
  clientName: string; // Name of the client
  email: string; // Email address of the client
  lastReport?: string; // Date of the last compiled report (optional)
  taxforms?: TTaxForm[]; // Array of tax forms associated with the client
  active?: boolean; // Indicates if the client is currently active (optional)
};
