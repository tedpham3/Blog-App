import {useState} from 'react';
export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function login(ev){
        ev.preventDefault();
        const response = fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        })
        if(response.ok){
            
        }

    }
    return  (
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
                <input type="text" 
                placeholder="username" 
                value={username} 
                onChange={ev => setUsername(ev.target.value)}/>
                <input type="password" 
                placeholder="password" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)}/>
                <button>Login</button>
            </form>
    )
}