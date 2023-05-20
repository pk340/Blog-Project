import useLocalStorage from "./useLocalStorage"

export default function Reset(){
    const {email, setEmail} = useLocalStorage("");
    return (
        <>
        
        <input type="email"  placeholder="Email" value={email}/>
        <button>Forget</button>
        </>
    )
}
