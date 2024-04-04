import { useEffect } from "react"
import mole from '../Images/mole.png'

function Mole(props) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ width: '15vw' }} src={mole} alt="mole" onClick={props.moleBopClick} />
        </div>
    )
}

export default Mole
