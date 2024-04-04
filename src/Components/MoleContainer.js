import { useState } from "react"
import Mole from "./Mole"
import EmptySlot from "./EmptySlot"

function MoleContainer({ score, setScore }) {
    let [mole, setMole] = useState(false)

    const moleBopClick = (e) => {
        setScore(score + 1)
        setMole(false)
    }

    let displayMole = mole ? <Mole setScore={setScore} toggle={setMole} moleBopClick={moleBopClick} /> : <EmptySlot toggle={setMole} />

    return (
        <div style={{ display: "inline-block" }}>
            {displayMole}
        </div>
    )
}

export default MoleContainer