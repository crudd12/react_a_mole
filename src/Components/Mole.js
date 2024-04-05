import { useEffect } from "react"
import mole from '../Images/mole.png'

function Mole({ toggle, moleBopClick }) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ width: '15vw' }} src={mole} alt="mole" onClick={moleBopClick} />
        </div>
    )
}

export default Mole
