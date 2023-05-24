import React from 'react';
import ReactDOM from 'react-dom/client';
import {ContactForm, ReservationForm} from './App'

const root_contact_form = ReactDOM.createRoot(document.getElementById('contact_form'));
root_contact_form.render(<ContactForm />);

const root_reservation_form = ReactDOM.createRoot(document.getElementById('reservation_form'));
root_reservation_form.render(<ReservationForm />);