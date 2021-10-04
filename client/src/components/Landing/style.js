import styled from 'styled-components';
import img from  '../../imgaes/pokemon-unite-8254.jpg';

const DivStyle = styled.div
`
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
position:fixed;
width: 100%;
height: 100%;
.titulo{
    color:white;
    font-family: 'Staatliches', cursive;
    letter-spacing:5px;
    font-size:3.5rem;
    margin:0;
}
.btn{
    color:gray;
    background-color: #28BCE1;
    font-size:2rem;
    border: solid 2px #28BCE1;
    border-radius: 10px;
    font-family: 'Staatliches', cursive;
    margin:13px;
    &:hover{
        cursor:pointer;
    }
}
`

export default DivStyle;