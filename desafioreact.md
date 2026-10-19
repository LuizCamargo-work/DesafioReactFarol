## 🚦 Desafio React — Semáforo Interativo

**⏱️ Tempo máximo: 45 minutos**

### 🎯 Objetivo
Desenvolver um semáforo interativo utilizando React, aplicando os conceitos de **componentização, props, useState, eventos e renderização condicional**.

### 📋 Requisitos

Crie uma aplicação que simule o funcionamento de um semáforo de trânsito.

**1. Interface**
- Exibir um semáforo com três luzes: vermelha, amarela e verde.
- Apenas uma luz poderá estar acesa por vez.
- As luzes apagadas devem apresentar uma aparência visual diferente.
- Criar um botão para mudar a luz do semáforo.

**2. Funcionamento**
- O semáforo deve iniciar na cor vermelha.
- A cada clique no botão, a luz deve mudar seguindo a sequência:
  - 🔴 Vermelho → 🟢 Verde → 🟡 Amarelo → 🔴 Vermelho.
- A interface deve atualizar automaticamente quando o estado mudar.

**3. Componentização**

A aplicação deverá possuir, no mínimo, três componentes:

- `App`: componente principal, responsável pelo estado do semáforo.
- `Semaforo`: responsável por exibir o semáforo.
- `Luz`: responsável por representar cada uma das luzes.

**4. Regras técnicas**
- Utilizar `useState` para controlar a luz ativa.
- Utilizar `props` para compartilhar informações entre componentes.
- Utilizar `onClick` para controlar a mudança de estado.
- Não manipular diretamente o DOM com `getElementById`, `querySelector` ou `innerHTML`.
- Não utilizar `useEffect`.

### 🤖 Uso de Inteligência Artificial

**Está permitido utilizar IA durante todo o desenvolvimento!**

Entretanto, vocês devem compreender o código produzido e conseguir explicar:

1. Qual componente é responsável pelo estado?
2. Como as props são utilizadas?
3. O que acontece quando o usuário clica no botão?
4. Por que a interface é atualizada automaticamente?

### ⭐ Desafio extra (opcional)

Para quem terminar antes:

- Adicionar três botões para selecionar diretamente cada cor.
- Exibir uma mensagem indicando o significado da luz ativa: PARE, ATENÇÃO ou SIGA.

### 📦 Entrega

Ao final dos 45 minutos, cada aluno deverá apresentar a aplicação funcionando e estar preparado para explicar as principais decisões de implementação.

**💡 Lembre-se:** o objetivo não é apenas fazer funcionar, mas compreender como o React utiliza componentes, propriedades e estados para construir interfaces interativas.

**Bom desenvolvimento! 🚀**