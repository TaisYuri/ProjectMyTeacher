import { styled } from "@mui/system";

export const ListaContainer = styled("ul")`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(9)};

  //Break ABAIXO de tamanho MD
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ItemLista = styled("li")`
  list-style: none;
  /* box-shadow: 1px 6px 5px 0px rgba(0,0,0,0.1);
  border-radius: 4px;
  background-color: #fff;
  width: 20vw; */
`;

export const Item = styled("div")`
  position: relative;
  height: 29vh;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Foto = styled("div")`
  width: 122px;
  height: 122px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.palette.primary[500]};
`;

export const Card = styled("div")`  
  padding: ${({ theme }) => theme.spacing(4,0,0,0)};  
`;

export const Nome = styled("h2")`
  margin: ${({ theme }) => theme.spacing(0)};
`;

export const Valor = styled("p")`
  margin: 0px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary[500]};
`;

export const Descricao = styled("p")`
  word-break: break-word;
`;

export const Box = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height:390px;
`;

export const Cabecalho = styled("div")`
  display: block;
  margin: ${({ theme }) => theme.spacing(2,4,1,2)};
`;

export const Titulo = styled("h2")`
`;


export const ListaVazia = styled("h2")`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(20, 0)};
`;
