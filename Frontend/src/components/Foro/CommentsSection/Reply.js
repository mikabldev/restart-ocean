import React, { useState } from "react";

const Reply = () => {
    const [reply, setReply] = useState("");

    const enviarReply = (e) => {
        e.preventDefault();
        console.log({ reply });
        setReply("");
    };

    return (
        <main className='replies'>
            <form className='modal__content' onSubmit={enviarReply}>
                <label htmlFor='reply'>Reply to the thread</label>
                <textarea
                    rows={5}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    type='text'
                    name='reply'
                    className='modalInput'
                />

                <button className='modalBtn'>SEND</button>
            </form>
        </main>
    );
};

export default Reply;