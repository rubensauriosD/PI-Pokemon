import styled from 'styled-components';
import img from '../../imgaes/147104-pokemon-4k-ultra-hd-wallpaper.jpg'

const DivStyle = styled.div
`
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
background-image:url(${img});
background-size: cover;
background-repeat: repeat;
background-attachment: fixed;

width: 100%;
height: 100%;
color:white;
text-shadow: 2px 2px black;
font-family: 'Staatliches', cursive;
font-size:1.4rem;
.utils{
    display:flex;
    justify-content:space-around;
}
input, button{
font-family: 'Staatliches', cursive;
font-size:1.3rem;
margin-left:1rem;
margin-right:1rem;

` 

export default DivStyle;