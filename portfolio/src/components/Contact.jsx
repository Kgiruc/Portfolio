import send from '../assets/icons/send.png';
import {useState} from "react";
import swal from 'sweetalert';

function Contact() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const formId = 'oRG4pJqJ';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const submitForm = async (e) => {
        e.preventDefault();
        await fetch(formSparkUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });
        swal({
            icon: "success",
            timer: 3000,
            buttons: false,
        });
    };

    return (
        <section className='contact__container'>
            <h4>
                <img src={send} alt='paper plane icon' className='contact__icon icons'/>
                Kontakt ze mną
                <span>

                </span>
            </h4>
            <form onSubmit={submitForm} className='contact__form__container'>
                <input type="text" placeholder="Imię" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea value={message} placeholder="Wiadomość..." onChange={(e) => setMessage(e.target.value)}/>
                <button type='submit'>
                    Wyślij
                </button>
            </form>
        </section>
    );
}

export default Contact;