import React, {useState, useEffect} from 'react'
import { Input } from './utils/Input'
import { FormProvider, useForm } from 'react-hook-form'
import { BsFillCheckSquareFill } from 'react-icons/bs'

import {
    name_validation,
    last_name_validation,
    message_validation,
    email_validation,
    password_validation,
    phone_validation,
    postcode_validation,
    city_validation,
    address_validation,
    studies_validation,
    degree_validation,
    additional_info_validation
} from './utils/inputValidations'

function ContactForm (){
    const methods = useForm()
    const [success, setSuccess] = useState(false)
    const [initialData, setInitialData] = useState([{}]);

    const onSubmit = methods.handleSubmit(data => {
        let formData = new FormData();
        formData.append('name', data['name']);
        formData.append('last_name', data['last_name']);
        formData.append('email', data['email']);
        formData.append('message', data['message']);
        async function fetchData() {
            await fetch('http://127.0.0.1:5000/messages', {method: "POST", body: formData}).then(
                response => response.json()
            ).then(data => setInitialData(data))
        }
        methods.reset()
        setSuccess(true)
        fetchData();
    })

    return (
        <FormProvider {...methods}>
            <div className="ContactForm row">
                <form className="container" action="http://127.0.0.1:5000/messages" method="POST">
                    <div className="first_name_input">
                        <Input {...name_validation} />
                    </div>

                    <div className="last_name_input">
                        <Input {...last_name_validation} />
                    </div>

                    <div className="email_input">
                        <Input {...email_validation} />
                    </div>

                    <div className="message_input">
                        <Input {...message_validation} />
                    </div>

                    {success && (
                        <p className="communication_correct_input">
                            <BsFillCheckSquareFill /> Wiadomość została wysłana. Dziękujemy!
                        </p>
                    )}

                    <div className="submit_button">
                        <button onClick={onSubmit} type="submit">Wyślij wiadomość</button>
                    </div>
                </form>
            </div>
        </FormProvider>
    );
}

function ReservationForm (){
    const methods = useForm()
    const [success, setSuccess] = useState(false)
    const [initialData, setInitialData] = useState([{}]);

    const onSubmit = methods.handleSubmit(data => {
        let formData = new FormData();
        formData.append('name', data['name']);
        formData.append('last_name', data['last_name']);
        formData.append('telephone', data['telephone']);
        formData.append('email', data['email']);
        formData.append('city', data['city']);
        formData.append('address', data['address']);
        formData.append('studies', data['studies']);
        formData.append('degree', data['degree']);
        formData.append('message', data['message']);

        async function fetchData() {
            await fetch('http://127.0.0.1:5000/reservations', {method: "POST", body: formData}).then(
                response => response.json()
            ).then(data => setInitialData(data))
        }
        methods.reset()
        setSuccess(true)
        fetchData();
    })

    return (
        <FormProvider {...methods}>
            <div className="ReservationForm row">
                <form action="http://127.0.0.1:5000/reservations" method="POST">

                    <div className="left_side_reserv col-md-6">
                        <h3>Dane osobowe</h3>
                        <div className="first_name_input_reserv">
                            <Input {...name_validation} />
                        </div>

                        <div className="last_name_input_reserv">
                            <Input {...last_name_validation} />
                        </div>

                        <div className="telephone_input_reserv">
                            <Input {...phone_validation} />
                        </div>

                        <div className="email_input_reserv">
                            <Input {...email_validation} />
                        </div>

                        <div className="postcode_input_reserv">
                            <Input {...postcode_validation} />
                        </div>

                        <div className="city_input_reserv">
                            <Input {...city_validation} />
                        </div>

                        <div className="address_input_reserv">
                            <Input {...address_validation} />
                        </div>

                    </div>
                    <div className="right_side_reserv col-md-6">
                        <h3>Informacje o kursie</h3>
                        <div className="studies_input_reserv">
                            <Input {...studies_validation} />
                        </div>

                        <div className="degree_input_reserv">
                            <Input {...degree_validation} />
                        </div>

                        <div className="message_input_reserv">
                            <Input {...additional_info_validation} />
                        </div>

                        {success && (
                            <p className="communication_correct_input">
                                <BsFillCheckSquareFill /> Twoje zgłoszenie zostało wysłane. Dziękujemy!
                            </p>
                        )}

                        <div className="submit_button_reserv">
                            <button onClick={onSubmit} type="submit">Zarezerwuj miejsce</button>
                        </div>

                    </div>
                </form>
            </div>
        </FormProvider>
    );
}

export {ContactForm, ReservationForm};