import { FormEvent, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector';



const RepositoriesList = () =>
{
    const [term, setTerm] = useState<string>("")

    const { searchRepositories } = useActions()

    const { data, error, loading } = useTypedSelector((state) => state.repositories)

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

            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data}
        </div>
    )
}

export default RepositoriesList