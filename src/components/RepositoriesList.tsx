import React, { FormEvent, useState } from 'react'


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