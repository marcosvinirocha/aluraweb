import React from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core'

function App() {
  return (
    <Container component="article" maxWidth='sm'>
      <Typography variant='h3' component='h1'  >Formulario de cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCpf} />
    </Container>
  );
}


function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11dígitos' };
  } else {
    return { valido: true, texto: '' };
  }
}
export default App;
