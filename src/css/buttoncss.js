import styled from "styled-components"

const Button = styled.div`

.create{
   
    font-size: 30px;
    font-family: Parisienne;
    padding: 1rem;
    margin-top: -3.25rem;
    margin-left: 3rem;
}

.container {
   position: absolute;
   margin-left: 78.25%;
   margin-top: -4.3%;
}
.button {
    background: #facc16;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.3s cubic-bezier(0.75, -0.5, 0, 1.75);
    border: 0;
}

.button::before {
    display: block;
    content: '';
    border-radius: 20px;
    opacity: 0.4;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #eee;
    transition: 0.3s cubic-bezier(0.75, -0.5, 0, 1.75);
}
.button::after {
    display: block;
    content: '';
    border-radius: 30px;
    opacity: 0.8;
    width: 60px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    transition: 0.3s cubic-bezier(0.75, -0.5, 0, 1.75);
    z-index: -2;
}

.button:hover::before {
    background: #fff;
    width: 145px;
    height: 60px;
    border-radius: 30px;
    opacity: 0.4;
    border: 1px solid #eee;
    background: transparent;
}

.button:hover::after {
    width: 120%;
    height: 120%;
}

.button:hover {
    transform: scale(1.2);
    -webkit-box-shadow: 0px 0px 13px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 13px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 13px -2px rgba(0, 0, 0, 0.75);
    width: 125px;
}
.button:hover svg {
    transform: rotate(360deg) scale(0.8);
}
.button svg {
    position: absolute;
    left: 14px;
    top: 14px;
    transition: 0.3s cubic-bezier(0.75, -0.5, 0, 1.75);
    z-index: 1;
}
.button span {
    display: inline-block;
    white-space: nowrap;
    position: absolute;
    left: 50px;
    opacity: 0;
    transition: 0.3s;
    color: #fff;
}
.button:hover span {
    opacity: 1;
}
.button:active {
    outline: none;
    -webkit-box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.75);
}
.button:active::after {
    width: 160%;
    opacity: 0;
}
.button:active::before {
    width: 160%;
    height: 160%;
    opacity: 0;
}
.button:focus {
    outline: none;
}
.button div {
    width: 28px;
    height: 28px;
    transform: scale(0);
    position: absolute;
    left: 11px;
    top: 11px;
    background: #fff;
    transition: 0.3s cubic-bezier(0.75, -0.5, 0, 1.75);
    border-radius: 50%;
}
.button:hover div {
    transform: scale(1);
    transition: 0.3s cubic-bezier(0.75, -0.5, 0, 1.75);
    transition-delay: 0.2s;
}
.button:hover rect {
    fill: #facc16;
    stroke: #facc16;
    transition-delay: 0.2s;
}
.button rect {
    transition: 0.3s;
}
`

export default Button;