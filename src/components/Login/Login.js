import React, { useState } from 'react';
import {
    MDBInput,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const imprimirDatos = (e) => {
        e.preventDefault()

        const validadorPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/; // Expresión regular para la clave



        if (email === '') {
            alert('Por favor ingresa tu email');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) { // validar el formato de email
            alert('Por favor ingresa un email válido');
            return;
        }

        if (password === '') {
            alert('Por favor ingresa tu clave');
            return;
        } else if (!validadorPassword.test(password)) {
            alert('La clave debe tener al menos 6 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial');
            return;
        }

        console.log(email)
        console.log(password)
 
        setEmail('')
        setPassword('')
    }

    return (
        <div className='w-100 mt-4 d-flex justify-content-center align-self-center' >
            <form className="w-75 p-3 " onSubmit={imprimirDatos}>

                <MDBInput className='mb-4' type='email' id='form3Example3' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <MDBInput className='mb-4' type='password' id='form3Example4' label='Clave' value={password} onChange={(e) => setPassword(e.target.value)} />


                <MDBBtn type='submit' className='mb-4' block >
                    Ingresar
                </MDBBtn>

                <div className='text-center'>
                    <p>
                        ¿No estás registrado? <a href='#!'>Regístrate</a>
                    </p>
                    <p>También puedes ingresar con:</p>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </div>
            </form>
        </div>
    );
}

export default Login;