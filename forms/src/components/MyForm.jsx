import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ userName, userEmail }) => {
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const [bio, setBio] = useState("")
    const [role, setRole] = useState("admin")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleBio = (e) => {
        setBio(e.target.value)
    }
    const handleRole = (e) => {
        setRole(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email)

        //limpar os dados
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

    console.log(name, email, bio, role)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* htmlFor funciona tipo uma classe */}
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name='name' placeholder='Digite o seu nome' onChange={(e) => setName(e.target.value)} value={name || ""} />

                    <label htmlFor="name">Email: </label>
                    <input type="text" name='email' placeholder='Digite o seu email' onChange={handleEmail} value={email || ""} />
                </div>

                <label>
                    <span>Bio: </span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={handleBio} value={bio || ""}></textarea>
                </label>

                <label htmlFor="">
                    <span>Função no site: </span>
                    <select name="role" onChange={handleRole} value={role}>
                        <option value="user">Padrão</option>
                        <option value="editor">Editar</option>
                        <option value="admin">Admin</option>
                    </select>

                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm