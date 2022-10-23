import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [professorSelecionado, setProfessorSelecionado] =
    useState<Professor | null>(null);
  const [mensagem, setMensagem] = useState("");

  const [nomeProfessor, setNomeProfessor] = useState("");
  const [valorHora, setValorHora] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");
  const [newAccount, setNewAccount] = useState(false);

  useEffect(() => {
    ApiService.get("/professores").then((response) => {
      setListaProfessores(response.data);
    });
  }, [mensagem]);

  useEffect(() => {
    limparFormulario();
  }, [professorSelecionado]);

  function marcarAula() {
    if (professorSelecionado !== null) {
      if (validarDadosAula()) {
        ApiService.post(`/professores/${professorSelecionado.id}/aulas`, {
          nome,
          email,
        })
          .then(() => {
            setProfessorSelecionado(null);
            setMensagem("Cadastrado com sucesso");
          })
          .catch((error) => {
            setMensagem(error.response?.data.message);
          });
      } else {
        setMensagem("Preencha os dados corretamente!");
      }
    }
  }

  function cadastrarProfessor() {
    ApiService.post(`/professores/cadastrar`, {
      nome: nomeProfessor,
      valor_hora: valorHora,
      descricao:descricao,
      foto: foto,
    })
      .then(() => {
        setMensagem("Cadastrado com sucesso");
        setNewAccount(false)
      })
      .catch((error) => {
        setMensagem(error.response?.data.message);
      });
  
  }

  function validarDadosAula() {
    return nome.length > 0 && email.length > 0;
  }

  function limparFormulario() {
    setNome("");
    setEmail("");
    setNomeProfessor("");
    setValorHora(0);
    setDescricao("");
    setFoto("");
  }

  return {
    listaProfessores: listaProfessores,
    nome, //mesma coisa que colocar nome: nome
    setNome,
    email,
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    mensagem,
    setMensagem,
    limparFormulario,
    nomeProfessor,
    setNomeProfessor,
    valorHora,
    setValorHora,
    descricao,
    setDescricao,
    foto,
    setFoto,
    cadastrarProfessor,
    setNewAccount,
    newAccount
  };
}
