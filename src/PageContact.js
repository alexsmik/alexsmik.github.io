import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormspark } from "@formspark/use-formspark";
const FORMSPARK_FORM_ID = "eLGYm7xV";

export default function PageContact() {
    const navigate = useNavigate();
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });
    const [message, setMessage] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        await submit({ message });
        alert("Сообщение отправлено.");
        navigate('/');
    };
    return (
        <div>
            <article className='form'>
                <form action="http://localhost:3000/contact/eLGYm7xV" onSubmit={onSubmit}>
                    <div className='form-control'>
                    <label htmlFor="name">Ваше Имя</label>
                    <input type="text" id="name" name="name" placeholder="..." required=""/>
                    {/*<label htmlFor="email">Email</label>*/}
                    {/*<input type="email" id="email" name="email" placeholder="Email" required=""/>*/}
                    </div>
                    <div className='form-control'>
                    <label htmlFor="message">Можете добавить почту, телефон, и сообщение... </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="..."
                        required=""
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit" disabled={submitting} className='btn'>Отправить</button>
                    </div>
                </form>
            </article>
        </div>
    );
}