import styled from 'styled-components';
import TNTLogo from '../assets/ttn-logo.png';
import { useState, useEffect } from 'react';

import Actions from '../components/Actions';
import SmallPrint from '../components/SmallPrint';

const Landing = () => {
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const openRegisterModal = () => setRegisterModalIsOpen(true);
    const openLoginModal = () => setLoginModalIsOpen(true);

    return (
        <Wrapper>
            <div className="logo-container">
                <img src={TNTLogo} alt="TNT Logo" />
            </div>
            <Actions openRegisterModal={openRegisterModal} openLoginModal={openLoginModal} />
            <SmallPrint />
        </Wrapper>
    )
}

export default Landing;

const Wrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;

    align-items: center;

    background-color: var(--black);
    color: var(--light);

    & .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      max-width: 30vw;
    }

    @media screen and (max-width: 800px) {
        grid-column: span 2;
        justify-self: start;
        margin-left: 2rem;
        margin-top: 2rem;

        & img {
            max-width: 15vw;
        }
        }
    }

    @media screen and (max-width: 800px) {
        justify-items: center;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
    }
`;