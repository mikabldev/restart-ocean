import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { jwtSign, jwtDecode } from '../utils/jwt/jwt.js'
import { verificarCredenciales, registrarUsuario, getUser } from '../models/models.users.js'
import { authToken } from '../middlewares/authToken.js'
import { registrarComentario, getPost, updatePost, deletePost } from '../models/models.foro.js'
import calendarioRoutes from '../calendar/calendarioRoutes.js'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT ?? 3005

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    // obtengo el email y el password que viene por el body
    await verificarCredenciales(email, password)
    // utilizo la función verificar credenciales para saber si coincide la clave o no
    const token = jwtSign({ email })
    // firmamos el token con jwtSing y le enviamos el email
    res.status(200).json({ token })
    // si tenemos una respuesta positiva, respondemos con el token como objeto porque el front está esperando un objeto
  } catch (error) {
    console.error('Error en el login:', JSON.stringify(error, null, 2))
    res.status(error.code || 500).send(error)
  }
})

app.post('/users', async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body
    console.log(nombre, apellido, email, password)
    // obtengo los datos del formulario desde el body
    await registrarUsuario({ nombre, apellido, email, password })
    res.status(201).json({ status: true, message: 'Usuario registrado con éxito' })
  } catch (error) {
    res.status(error.code || 500).json({ message: 'Error en la conexión', error })
  }
})

app.get('/users', authToken, async (req, res) => {
  try {
    const authorization = req.header('Authorization')
    console.log('Authorizatión ruta get: ', authorization)
    // obtengo el authorization enviada desde las cabeceras en el front

    const [, token] = authorization.split(' ')
    console.log('token desde GET:', token)
    // Se envía el bearer y el token desde las cabeceras pero aqui  necesitamos solo el token, así que lo separo con el .split

    const { email } = jwtDecode(token)
    console.log('Email desde GET/users', email)

    const user = await getUser(email)
    console.log(user)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error })
  }
})

app.post('/foro', async (req, res) => {
  try {
    const { title, content, usuarioId } = req.body
    console.log(title, content, usuarioId)
    // obtengo los datos del formulario desde el body
    await registrarComentario({ title, content, usuarioId })
    res.status(201).json({ status: true, message: 'Comentario registrado con éxito' })
  } catch (error) {
    res.status(error.code || 500).json({ message: 'Error en la conexión', error })
  }
})

app.get('/post', async (_, res) => {
  try {
    const posts = await getPost()
    res.status(200).json(posts)
  } catch (error) {
    res.status(404).json({ status: false, message: 'No se ha podido realizar la consulta', error })
  }
})

app.put('/post/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title, content } = req.body
    await updatePost({ id, title, content })
    res.status(200).send('Actualización exitosa!')
  } catch (error) {
    res.status(500).send('Post no se puso modificar')
  }
})

app.delete('/post/:id', async (req, res) => {
  try {
    const { id } = req.params
    await deletePost(id)
    res.status(200).send('Post eliminado')
  } catch (error) {
    res.status(500).send('No se encontró el post')
  }
})

app.use(bodyParser.json())
app.use('/calendario', calendarioRoutes)
app.all('*', async (req, res) => {
  res.status(404).json({ code: 404, message: 'La ruta consultada no existe' })
})

app.listen(PORT, () => console.log('Conectados al servidor 3000'))

export default app
