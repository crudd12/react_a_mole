import { useEffect } from "react"
import molehill from '../Images/molehill.png'

// how could I have used a variable to pass in rather than props for the toggle?
function EmptySlot(props) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
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