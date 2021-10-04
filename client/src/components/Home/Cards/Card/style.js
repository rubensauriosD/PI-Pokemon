import styled from 'styled-components';

const DivStyle = styled.div
`
color:black;
text-shadow: 2px 2px white;
text-decoration:none;
.conteiner{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
h3{
    margin:5px;
    color:black;
    text-shadow: 2px 2px white;
}
h4{
    margin:5px;
}
li{
    list-style:none;
}
ul{
    padding-inline-start:0;
    margin:0;
}
img{
    Background-color: rgba(0, 0, 0, 0.70);
    width:400px;
    heigth:400px;
}
.link{
    text-decoration:none;
    color:white;
}
`

export default DivStyle;