import { dataContext } from "./dataContext"
import { buttonNumbers, buttonOperators } from '../data/data'

export let DataState = props => {

    const data = buttonNumbers.concat(buttonOperators)

    return (
        <dataContext.Provider value={data}>
            {props.children}
        </dataContext.Provider>
    )
}