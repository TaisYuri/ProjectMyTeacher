import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista'

const Home: NextPage = () => {

  const professores: Professor[] = [
    {id: 1, nome: 'Maria', foto:'https://www.github.com/taisyuri.png', descricao: 'Professora de matematica', valor_hora: 100.00},
    {id: 2, nome: 'Maria', foto:'https://www.github.com/taisyuri.png', descricao: 'Professora de matematica', valor_hora: 100.00},
    {id: 3, nome: 'Maria', foto:'https://www.github.com/taisyuri.png', descricao: 'Professora de matematica', valor_hora: 100.00},
    {id: 4, nome: 'Maria', foto:'https://www.github.com/taisyuri.png', descricao: 'Professora de matematica', valor_hora: 100.00},
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista data={professores}/>
    </Box>
  )
}

export default Home
