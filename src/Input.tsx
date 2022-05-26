import {ChangeEvent} from "react";

type PropsInputType = {
    setTitle: (title: string) => void
    title: string

}

export const Input = (props: PropsInputType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeHandler}/>
    )
}