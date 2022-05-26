
type PropsType = {
    addMessage:(title: string)=>void
    name: string
    title:string
}

export const Button = (props: PropsType) => {

    const onClickHandler = () => {
        props.addMessage(props.title)
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}