export const name_validation = {
    name: 'name',
    label: 'Imię',
    type: 'text',
    id: 'name',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        maxLength: {
            value: 30,
            message: 'Maksymalnie 30 znaków',
        },
    },
}

export const last_name_validation = {
    name: 'last_name',
    label: 'Nazwisko',
    type: 'text',
    id: 'last_name',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        maxLength: {
            value: 30,
            message: 'Maksymalnie 30 znaków',
        },
    },
}

export const message_validation = {
    name: 'message',
    label: 'Treść wiadomości',
    multiline: true,
    id: 'message',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        maxLength: {
            value: 200,
            message: 'Maksymalnie 200 znaków',
        },
    },
}

export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        minLength: {
            value: 6,
            message: 'Minimum sześć znaków',
        },
    },
}

export const phone_validation = {
    name: 'telephone',
    label: 'Telefon',
    type: 'number',
    id: 'telephone_reserv',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        pattern: {
            value:
                /^(?:(?:(?:(?:\+|00)\d{2})?[ -]?(?:(?:\(0?\d{2}\))|(?:0?\d{2})))?[ -]?(?:\d{3}[- ]?\d{2}[- ]?\d{2}|\d{2}[- ]?\d{2}[- ]?\d{3}|\d{7})|(?:(?:(?:\+|00)\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}))$/,
            message: 'Nieprawidłowe',
        }
    },
}

export const email_validation = {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    id: 'email',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        pattern: {
            value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Nieprawidłowe',
        },
    },
}

export const postcode_validation = {
    name: 'postcode',
    label: 'Kod pocztowy',
    type: 'text',
    id: 'postcode_reserv',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        pattern: {
            value:
            /^[0-9]{2}-[0-9]{3}/,
            message: 'Nieprawidłowe',
        }
    },
}

export const city_validation = {
    name: 'city',
    label: 'Miasto',
    type: 'text',
    id: 'city_reserv',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        maxLength: {
            value: 30,
            message: 'Maksymalnie 30 znaków',
        },
    },
}

export const address_validation = {
    name: 'address',
    label: 'Adres',
    type: 'text',
    id: 'address_reserv',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        maxLength: {
            value: 30,
            message: 'Maksymalnie 30 znaków',
        },
    },
}

export const studies_validation = {
    name: 'studies',
    label: 'Kierunek studiów',
    type: 'text',
    id: 'studies_reserv',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        maxLength: {
            value: 30,
            message: 'Maksymalnie 30 znaków',
        },
    },
}

export const degree_validation = {
    name: 'degree',
    label: 'Stopień studiów',
    type: 'number',
    id: 'degree_reserv',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        pattern: {
            value:
                /(1|2)/,
            message: 'Nieprawidłowe',
        }
    },
}

export const additional_info_validation = {
    name: 'message',
    label: 'Uwagi/informacje dodatkowe',
    multiline: true,
    id: 'message_reserv',
    placeholder: '',
    validation: {
        required: {
            value: true,
            message: 'Wymagane',
        },
        maxLength: {
            value: 200,
            message: 'Maksymalnie 200 znaków',
        },
    },
}