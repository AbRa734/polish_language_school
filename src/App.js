import React, {useState, useEffect} from 'react'

function ContactForm (){
    const [initialData, setInitialData] = useState([{}]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/messages').then(
            response => response.json()
        ).then(data => setInitialData(data))
    }, []);

    return (
        <div className="ContactForm row">
            <form action="http://127.0.0.1:5000/messages" method="POST">
                <div className="first_name_input">
                    <label htmlFor="name">Imię</label>
                    <input type="text" id="name" name="name"/>
                </div>

                <div className="last_name_input">
                    <label htmlFor="last_name">Nazwisko</label>
                    <input type="text" id="last_name" name="last_name"/>
                </div>

                <div className="email_input">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email"/>
                </div>

                <div className="message_input">
                    <label htmlFor="message">Treść wiadomości</label>
                    <textarea id="message" name="message"/>
                </div>

                <div className="submit_button">
                    <button type="submit">Wyślij wiadomość</button>
                </div>
            </form>
        </div>
    );
}

function ReservationForm (){
    const [initialData, setInitialData] = useState([{}]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/reservations').then(
            response => response.json()
        ).then(data => setInitialData(data))
    }, []);

    return (
        <div className="ReservationForm row">
            <form action="http://127.0.0.1:5000/reservations" method="POST">

                <div className="left_side_reserv col-md-6">
                    <h3>Dane osobowe</h3>
                    <div className="first_name_input_reserv">
                        <label htmlFor="name">Imię</label>
                        <input type="text" id="name_reserv" name="name"/>
                    </div>

                    <div className="last_name_input_reserv">
                        <label htmlFor="last_name">Nazwisko</label>
                        <input type="text" id="last_name_reserv" name="last_name"/>
                    </div>

                    <div className="telephone_input_reserv">
                        <label htmlFor="telephone">Telefon</label>
                        <input type="number" id="telephone_reserv" name="telephone"/>
                    </div>

                    <div className="email_input_reserv">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email_reserv" name="email"/>
                    </div>

                    <div className="postcode_input_reserv">
                        <label htmlFor="postcode">Kod pocztowy</label>
                        <input type="text" id="postcode_reserv" name="postcode"/>
                    </div>

                    <div className="city_input_reserv">
                        <label htmlFor="city">Miasto</label>
                        <input type="text" id="city_reserv" name="city"/>
                    </div>

                    <div className="address_input_reserv">
                        <label htmlFor="address">Adres</label>
                        <input type="text" id="address_reserv" name="address"/>
                    </div>

                </div>
                <div className="right_side_reserv col-md-6">
                    <h3>Informacje o kursie</h3>
                    <div className="studies_input_reserv">
                        <label htmlFor="studies">Kierunek studiów</label>
                        <input type="text" id="studies_reserv" name="studies"/>
                    </div>

                    <div className="degree_input_reserv">
                        <label htmlFor="degree">Stopień studiów</label>
                        <input type="number" id="degree_reserv" name="degree"/>
                    </div>

                    <div className="message_input_reserv">
                        <label htmlFor="message">Uwagi/informacje dodatkowe</label>
                        <textarea id="message_reserv" name="message"/>
                    </div>

                    <div className="submit_button_reserv">
                        <button type="submit">Zarezerwuj miejsce</button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export {ContactForm, ReservationForm};