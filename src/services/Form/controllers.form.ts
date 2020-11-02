import moment from 'moment';

import { createCertificate } from 'services/Generator';

import { FormStore } from './store.form';

export const submitForm = () =>
  createCertificate({
    address: FormStore.get('address'),
    birthDate: FormStore.get('birthDate'),
    city: FormStore.get('city'),
    dateOfLeave: moment().format('YYYY-MM-DD'),
    firstName: FormStore.get('firstName'),
    hourOfLeave: moment().format('HH:mm'),
    lastName: FormStore.get('lastName'),
    placeOfBirth: FormStore.get('placeOfBirth'),
    reasons: FormStore.get('reasons').join(', '),
    zipCode: FormStore.get('zipCode'),
  });
