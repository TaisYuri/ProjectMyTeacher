import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import {
  Descricao,
  Foto,
  ItemLista,
  ListaContainer,
  ListaVazia,
  Nome,
  Valor,
} from "./styles";

interface ListaProps {
  data: Professor[];
}

const Lista = ({ data }: ListaProps) => {
  return (
    <>
      {data.length > 0 ? (
        <ListaContainer>
          {data.map((item) => (
            <ItemLista key={item.id}>
              <Foto src={item.foto} />
              <Nome>{item.nome}</Nome>
              <Valor>
               { `${item.valor_hora.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
                 por hora`}
              </Valor>
              <Descricao>{item.descricao}</Descricao>
              <Button sx={{ width: "70%" }}>Marcar aula</Button>
            </ItemLista>
          ))}
        </ListaContainer>
      ) : (
        <ListaVazia>Nenhum item encontrador</ListaVazia>
      )}
    </>
  );
};

export default Lista;
