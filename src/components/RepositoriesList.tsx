import { FormEvent, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { searchRepositories } from '../state/action-creators/index';


const RepositoriesList = () =>
{
    const [term, setTerm] = useState<string>("")
    const { searchRepositories } = useActions()

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