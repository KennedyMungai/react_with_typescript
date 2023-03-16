import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'


const RepositoriesList = () =>
{
    const [term, setTerm] = useState<string>("")

    const dispatch = useDispatch()

    const submitHandler = (e: FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault()

        dispatch(actionCreators.searchRepositories(term))
    }

    return (
        <div>
            <form
                action=""
                onSubmit={submitHandler}
            >
                <input
                    type="text"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList