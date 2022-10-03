import send from '../assets/icons/send.png';
import {useState} from "react";

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
        alert("Wysłano pomyślnie");
    };

    return (
        <section className='contact__container'>
            <h4>
                <img src={send} alt='paper plane icon' className='contact__icon icons'/>
                Kontakt ze mną
            </h4>
            <form onSubmit={submitForm} className='contact__form__container'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type='submit'>
                    >>
                </button>
            </form>
        </section>
    );
}

export default Contact;