import { useState } from 'react'
import './modal.css'

const Modal = ({ children, onClick }) => {
    const [modal, setModal] = useState(false)
    return (
        <div onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onClick(false)
        }} id='backdrop'>{children}</div>

    )
}

export default Modal
