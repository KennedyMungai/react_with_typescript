import { FormEvent, useState } from 'react'
import { useActions } from '../hooks/useActions'


const RepositoriesList = () =>
{
    const [term, setTerm] = useState<string>("")

    const submitHandler = (e: FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault()
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