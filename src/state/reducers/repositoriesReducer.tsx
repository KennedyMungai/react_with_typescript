
interface RepositoriesState
{
    loading: boolean
    error: string | null
    data: string[]
}

const reducer = (state: RepositoriesState, action: any) =>
{
    return (
        <div>reducer </div>
    )
}

export default reducer