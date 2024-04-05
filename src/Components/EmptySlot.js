import { useEffect } from "react"
import molehill from '../Images/molehill.png'

function EmptySlot({ toggle }) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ width: '15vw' }} src={molehill} alt="molehill" />
        </div>
    )
}

export default EmptySlot