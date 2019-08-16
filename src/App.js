import React, { Fragment } from "react";
import {
  TableCalculos,
  Container,
  StyledInputNumber,
  Title,
  StyledButton,
  StyledSpan
} from "./styles";
import Tabuleiro from "./components/tabuleiro";

const columns = [
  {
    title: "Operação",
    dataIndex: "operacao",
    key: "operacao"
  },
  {
    title: "Valores",
    dataIndex: "valores",
    key: "valores"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor1: 5,
      valor2: 5,
      salario: 0,
      novoSalario: null,
      valorAumento: 0,
      percentualAumento: 0
    };
  }

  montaDados(valor1, valor2) {
    return [
      {
        key: "1",
        operacao: `${valor1} + ${valor2}`,
        valores: valor1 + valor2
      },
      {
        key: "2",
        operacao: `${valor1} - ${valor2}`,
        valores: valor1 - valor2
      },
      {
        key: "3",
        operacao: `${valor1} / ${valor2}`,
        valores: valor1 / valor2
      },
      {
        key: "4",
        operacao: `${valor1} % ${valor2}`,
        valores: valor1 % valor2
      }
    ];
  }

  montaTexto(salario, aumento) {
    this.setState({
      salarioIni: salario,
      novoSalario: (salario * aumento + salario).toFixed(2),
      valorAumento: (salario * aumento).toFixed(2),
      percentualAumento: aumento * 100
    });
  }

  calculaSalario(salario) {
    const formattedSalario = parseFloat(salario);

    if (formattedSalario < 1280) {
      this.setState({
        resultado: this.montaTexto(formattedSalario, 0.2)
      });
    } else if (formattedSalario >= 1280 && formattedSalario < 1700) {
      this.montaTexto(formattedSalario, 0.15);
    } else if (formattedSalario >= 1700 && formattedSalario < 2500) {
      this.montaTexto(formattedSalario, 0.1);
    } else if (formattedSalario >= 2500) {
      this.montaTexto(formattedSalario, 0.05);
    } else this.setState({ resultado: "Valor Inválido" });
  }

  render() {
    const {
      valor1,
      valor2,
      salario,
      novoSalario,
      valorAumento,
      percentualAumento,
      salarioIni
    } = this.state;
    return (
      <Container>
        <Title>Cálculos</Title>
        <StyledInputNumber
          type="number"
          name={valor1}
          onChange={value => this.setState({ valor1: value })}
          value={valor1}
        />
        <StyledInputNumber
          type="number"
          name={valor2}
          onChange={value => this.setState({ valor2: value })}
          value={valor2}
        />
        <TableCalculos
          columns={columns}
          dataSource={this.montaDados(valor1, valor2)}
          pagination={false}
        />

        <Title>Salários</Title>
        <StyledInputNumber
          type="number"
          onChange={value => this.setState({ salario: value })}
          value={salario}
        />
        <StyledButton onClick={() => this.calculaSalario(salario)}>
          Calcular
        </StyledButton>

        {novoSalario && (
          <Fragment>
            <StyledSpan>Salário antes do reajuste: R$ {salarioIni}</StyledSpan>
            <StyledSpan>
              Percentual de aumento aplicado: {percentualAumento}%
            </StyledSpan>
            <StyledSpan>Valor de aumento: R$ {valorAumento}</StyledSpan>
            <StyledSpan>Novo salário: R$ {novoSalario}</StyledSpan>
          </Fragment>
        )}
        <Title>Jogo da velha</Title>
        <Tabuleiro />
      </Container>
    );
  }
}

export default App;
