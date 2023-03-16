import { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../hooks/useActions'


const RepositoriesList = () =>
{
    const [term, setTerm] = useState<string>("")

    const { searchRepositories } = useActions()

    const state = useSelector((state) => state.repositories)

    const submitHandler = (e: FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault()

        searchRepositories(term)
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