import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import type { NextPage } from "next";
import Lista from "../src/components/Lista";
import { useIndex } from "../src/hooks/pages/useIndex";

const Home: NextPage = () => {
  const {
    listaProfessores,
    email,
    setEmail,
    nome,
    setNome,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    mensagem,
    setMensagem
  } = useIndex();

  return (
    <>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <Lista 
          data={listaProfessores} 
          onSelect={(professor) => setProfessorSelecionado(professor)}
        />
      </Box>

      <Dialog  open={professorSelecionado !== null} onClose={() => setProfessorSelecionado(null)} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite seu nome"
              type="text"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite seu email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setProfessorSelecionado(null)}>Cancelar</Button>
          <Button onClick={()=> marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        message={mensagem} 
        open={mensagem.length > 0}
        autoHideDuration={2000}
        onClose={ () => setMensagem("")}
      />
    </>
  );
};

export default Home;
