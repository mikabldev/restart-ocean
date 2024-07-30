import React, { useState } from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

const Login = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const imprimirDatos = (e) => {
        e.preventDefault()

        const validadorCaracteres = /^[a-zA-Z\s]+$/
        const validadorPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/; // Expresión regular para la clave

        if (name === '') {
            alert('Por favor ingresa tu nombre');
            return;
        } else if (!validadorCaracteres.test(name)) {
            alert('El nombre solo puede contener letras');
            return;
        }

        if (lastName === '') {
            alert('Por favor ingresa tu apellido');
            return;
        } else if (!validadorCaracteres.test(lastName)) {
            alert('El apellido solo puede contener letras');
            return;
        }

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

        console.log(name)
        console.log(lastName)
        console.log(email)
        console.log(password)
        setName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className='w-100 mt-4 d-flex justify-content-center align-self-center' >
            <form className="w-75 p-3 " onSubmit={imprimirDatos}>
                <MDBRow className='mb-4'>
                    <MDBCol>
                        <MDBInput id='form3Example1' label='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput id='form3Example2' label='Apellido' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </MDBCol>
                </MDBRow>
                <MDBInput className='mb-4' type='email' id='form3Example3' label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <MDBInput className='mb-4' type='password' id='form3Example4' label='Clave' value={password} onChange={(e) => setPassword(e.target.value)} />

                <MDBCheckbox
                    wrapperClass='d-flex justify-content-center mb-4'
                    id='form3Example5'
                    label='Recibir noticias'
                    defaultChecked
                />

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