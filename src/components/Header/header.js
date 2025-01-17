import styled from 'styled-components';

export const Container = styled.header`
height:5rem;

max-width:71.25rem;
margin:auto;


display:flex;
justify-content:center;
justify-content: space-evenly;
align-items:center;
color:#111;

a{
    text-decoration:none;
    color:#111
}



nav{
    padding:0 150px;
    a{
        padding:0 10px;
        &:hover{
            opacity:75%;
        }
    }
}

.social{
    a{
        padding:0 10px;

        &:hover{
            opacity:75%;
        }
    }
}


@media (max-width:1025px){
    height:15rem;
    max-width:800px;
    flex-direction:column;
    
}

@media (max-width:320px){
    height:15rem;
    max-width:71.25rem;
    margin:auto;


display:flex;
justify-content:center;
justify-content: space-evenly;
align-items:center;
color:#111;

a{
    text-decoration:none;
    color:#111
}



nav{
    padding:0 150px;
    a{
        padding:0 10px;
        &:hover{
            opacity:75%;
        }
    }
}

.social{
    a{
        padding:0 10px;

        &:hover{
            opacity:75%;
        }
    }
}

}
`;