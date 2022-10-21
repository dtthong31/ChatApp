// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AppChat } = initSchema(schema);

export {
  AppChat
};