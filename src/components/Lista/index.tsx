import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/formatadorService";
import {
  Box,
  Cabecalho,
  Card,
  Descricao,
  Foto,
  Item,
  ItemLista,
  ListaContainer,
  ListaVazia,
  Nome,
  Titulo,
  Valor,
} from "./styles";

interface ListaProps {
  data: Professor[];
  onSelect: (professor: Professor) => void;
}

const Lista = ({ data, onSelect }: ListaProps) => {
  return (
    <>
      {data.length > 0 ? (
        <ListaContainer>
          {data.map((item) => (
            <ItemLista key={item.id}>
              <Box>
                <Cabecalho>
                  <Titulo>
                    Conheça {item.nome},<br />
                    seu professor do curso.
                  </Titulo>
                  <Descricao>{item.descricao}</Descricao>
                  <Button sx={{ width: "50%", borderRadius: 8 , backgroundColor:'#6f1df4'}} onClick={() => onSelect(item)}>
                    Marcar aula
                  </Button>
                </Cabecalho>
              </Box>
              <Item>
                <Foto src={item.foto} />
                <Card>
                  <Nome>{item.nome}</Nome>
                  <Valor>
                    {`${FormatadorService.valorMonetario(item.valor_hora)}
                  por hora`}
                  </Valor>
                  <Descricao>
                    {FormatadorService.limitarTexto(item.descricao, 42)}...
                  </Descricao>
                </Card>
              </Item>
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
