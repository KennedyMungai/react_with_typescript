import React, { useState } from 'react'


const RepositoriesList = () =>
{
    const [term, setTerm] = useState<string>("")

    return (
        <div>
            <form action="">
                <input type="text" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList