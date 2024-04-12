import logo from '../../../public/logo/logo.svg'
import basket from '../../../public/icons/basket.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ModalContent from '../ModalContent/ModalContent'
import Modal from 'react-modal'


export default function Header() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setModalIsOpen(false)
        document.body.style.overflow = 'auto'
    }

    return (
        <>
        
            <header className="header">

                <NavLink to="/">
                    <div className="logo">

                    <img src={logo} alt="" />
                    <a href="#">clothes</a>

                    </div>
                </NavLink>

                <ul className="nav">

                    <NavLink to="/"><a href="#">Главная</a></NavLink>
                    <NavLink to="/catalog"><a href="#">Каталог</a></NavLink>


                </ul>

                <div className="icons">


                    <img onClick={openModal} src={basket} alt="basket" />
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <ModalContent closeModal={closeModal} />
                    </Modal>

                </div>

            </header>
        
        </>
    )
}