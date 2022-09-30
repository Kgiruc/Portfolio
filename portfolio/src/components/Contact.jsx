import send from '../assets/icons/send.png';
import {useState} from "react";

function Contact() {
    const [message, setMessage] = useState('');

    const formId = 'oRG4pJqJ';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const submitForm = async (e) => {
        e.preventDefault();
        await fetch(formSparkUrl,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                message,
            }),
        });
        alert("Form submitted");
    };

    return (
        <section className='contact__container'>
            <h4>
                <img src={send} alt='paper plane icon' className='icons'/>
                Kontakt ze mną
            </h4>
            <form onSubmit={submitForm}>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;