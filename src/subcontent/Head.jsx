
function Head(get) {
    return (
        <>
            {console.log(get)}
            <h2>Details :- {` ${get['title']}`}</h2>
        </>
    )
}
export default Head;