import React, { useState } from 'react'


const RepositoriesList = () =>
{
    const [term, setTerm] = useState<string>("")

    return (
        <div>
            <form action="">
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