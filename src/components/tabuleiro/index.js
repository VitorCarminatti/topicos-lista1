import React, { Component } from "react";

import { Container } from "./styles";
import Quadrado from "../quadrado";
import _ from "lodash";

export default class Tabuleiro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jogadorX: true,
      quadrados: Array(9).fill(null)
    };
  }

  verificaVitoria(quadrados) {
    const condicoesVitoria = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < condicoesVitoria.length; i++) {
      const [a, b, c] = condicoesVitoria[i];
      if (
        quadrados[a] &&
        quadrados[a] === quadrados[b] &&
        quadrados[a] === quadrados[c]
      ) {
        return condicoesVitoria[i];
      }
    }
    return null;
  }

  desenhaQuadrado() {
    const { quadrados } = this.state;
    const ganhador = this.verificaVitoria(quadrados.slice());
    let styleGanhador = false;

    const desenhaQuadrado = quadrados.map((quadrado, index) => {
      if (ganhador) {
        styleGanhador = ganhador
          ? ganhador.indexOf(index) !== -1
            ? true
            : false
          : true;
      } else {
        styleGanhador = false;
      }

      return (
        <Quadrado
          key={index}
          styleGanhador={styleGanhador}
          valor={quadrado}
          onClick={() => this.handleClick(index)}
        />
      );
    });

    return desenhaQuadrado;
  }

  restart() {
    this.setState({
      quadrados: Array(9).fill(null),
      jogadorX: true
    });
  }

  handleClick(i) {
    const { quadrados, jogadorX } = this.state;
    const ganhador = this.verificaVitoria(quadrados.slice());

    if (ganhador || quadrados[i]) {
      return;
    }

    quadrados[i] = jogadorX ? "X" : "O";
    this.setState({
      quadrados,
      jogadorX: !jogadorX
    });
  }

  render() {
    return <Container>{this.desenhaQuadrado()}</Container>;
  }
}
