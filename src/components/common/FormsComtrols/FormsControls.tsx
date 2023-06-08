import React, {ReactNode} from 'react';
import s from './FormsControls.module.css'


type TextAreaType = {
    input: InputType
    meta: MetaType
    placeholder: string
    required: boolean
    children: ReactNode
}

type InputType = {
    name: string
    onBlur: () => void
    onChange: () => void
    onDragStart: () => void
    onDrop: () => void
}

type MetaType = {
    active: boolean
    asyncValidating: boolean
    autofilled: boolean
    dirty: boolean
    dispatch: () => void
    error: any
    touched: boolean
}


const FormControl = (props: TextAreaType) => {
    const {input, meta: {touched, error}, ...restProps} = props

    const hasError = touched && error

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const TextArea = (props: TextAreaType) =><FormControl {...props}>{<textarea {...props.input} {...props}/>}</FormControl>


export const Input = (props: TextAreaType) => <FormControl {...props}>{<input {...props.input} {...props}/>}</FormControl>


