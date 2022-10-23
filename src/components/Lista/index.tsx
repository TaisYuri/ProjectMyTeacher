import {
  Avatar,
  Button,
  Card,
  CardContent,
  createStyles,
  makeStyles,
} from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/formatadorService";
import {
  Box,
  Cabecalho,
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
             
              <Card style={{ minWidth: 400, minHeight: 390 }}>
                <CardContent>
                <Box>
                    <Foto>
                      <Avatar
                        alt="Remy Sharp"
                        src={item.foto}
                        style={{ width: 120, height: 120 }}
                        />
                    </Foto>
                        <>
                    <Valor>
                      {`${FormatadorService.valorMonetario(item.valor_hora)}
                  por hora`}
                    </Valor>
                    <Nome>{item.nome}</Nome>
                    <Descricao>
                      {FormatadorService.limitarTexto(item.descricao, 300)}
                    </Descricao>
                  
                  </>
                  <Button
                    sx={{
                      width: "50%",
                      borderRadius: 8,
                      backgroundColor: "#6f1df4",
                      alignSelf: "flex-end",
                    }}
                    onClick={() => onSelect(item)}
                  >
                    Marcar aula
                  </Button>
                </Box>
                </CardContent>
              </Card>
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
