
import useLocalStorage from "./useLocalStorage";

function LogIn() {
    const {email, setEmail} = useLocalStorage("");
    return (
        <>
            <h1> LogIn </h1>
            <form>
                <input onChange={(e)=> setEmail(e.target.value)} type="email" value={email} placeholder="email" />
                <input type="password"  placeholder="password" />
                <button>Submit</button>
                
            </form>
        </>
    )
}

export default LogIn;