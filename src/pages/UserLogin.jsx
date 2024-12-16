import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Kullanıcı doğrulama işlemi için geçici veriler verip, veritabanında var olan bilgilerle
    // eşleşip eşleşmediğini kontrol eden bir fonksiyoun yazıyorum.

    const handleLogin = (e) => {
        e.preventDefault();

        if ( username == 'admin' && password === 'password' ) {
            navigate('/mainpage')
            // Buradaki navigate parametremi App.jsx dosyamdaki route bileşeninin içerisinde tanımladığım 
            // adresten alıyorum.

        } else {
            alert("Access Denied!");
        }

    }


    return (
        <>
            <form className="flex min-h-screen justify-center items-center" onSubmit={handleLogin} >
                <div className="bg-white p-8 rounded-lg shadow-xl w-96 border-2 border-pastel-primary/50" >
                    <h1 className="text-pastel-primary text-xl font-semibold mb-6" >Welcome to Task Manager App!</h1>
                    <input type="text"
                        value={username}
                        onChange={ (e) => setUsername(e.target.value) } 
                        // target.value sayesinde girilen bilgiye erişerek, tanımladığım fonksiyon ile kontrol edebiliyorum.
                        
                        placeholder="Enter your user name" 
                        className="w-full p-3 mb-4 border-2 border-pastel-secondary rounded-lg" 
                        required />
                    <input type="password" 
                    value={password} 
                    onChange={ (e) => setPassword(e.target.value) }
                    // Aynı işlemi burada da password kısmı için gerçekleştiriyorum.
                    
                    placeholder="Enter your password " 
                    className="w-full p-3 mb-4 border-2 border-pastel-secondary rounded-lg" required />
                    <button type="submit" className="w-full bg-pastel-primary text-white p-2 rounded-md hover:bg-pastel-primary/80 transition-all ease" > Login</button>
                    <button className="w-full bg-pastel-primary text-white p-2 mt-2 rounded-md hover:bg-pastel-primary/80 transition-all ease" > Register</button>
                </div>
            </form>
        </>
    )
}

export default UserLogin