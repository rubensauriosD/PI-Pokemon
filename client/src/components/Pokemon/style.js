import styled from 'styled-components';

export const DivStyle = styled.div
`
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
color:white;
text-shadow: 2px 2px black;
font-family: 'Staatliches', cursive;
.conteiner{
    width:1200px;
    higher:1200px;
    margin: 0 auto;
    display:grid;
    grid-template-areas:"izq der"
                        "izq der"
                        "izq der";
    grid-template-columns: 1fr 1fr;
}
.izq{
    grid-area:izq;
}
.der{
    grid-area:der;
}
img{
    width:600;
    heigth:600;
}
li{
    list-style:none
}
ul{
    padding-inline-start:0;
    margin:0;
}
p,li{
    font-size:1.2rem;
}
h2{
    margin:1rem;
}
p{
    margin:0;
}
`

export const DivStyle2 = styled.div
`
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
background-color:#9dd24e;
button{
    font-family: 'Staatliches', cursive;
    font-size:1.5rem;
}
`
