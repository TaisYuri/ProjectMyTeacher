import { styled } from "@mui/system";

export const ListaContainer = styled("ul")`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(9)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    //Break ABAIXO de tamanho MD
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ItemLista = styled("li")`
  list-style: none;
`;

export const Foto = styled("img")`
  width: 100%;
`;

export const Nome = styled("h3")`
  margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
`;

export const Valor = styled("p")`
  margin: 0px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Descricao = styled("p")`
  word-break: break-word;
`;
export const ListaVazia = styled("h2")`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(20, 0)};
`;