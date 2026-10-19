# 🚦 Desafio React — Semáforo Interativo

Projeto desenvolvido em **React** utilizando **Vite**, focado na máxima clareza didática, código limpo e uma experiência de usuário (UI/UX) moderna e realista.

---

## 🚀 Como Executar o Projeto

1. Abra o terminal nesta pasta (`d:\Users\luiz.camargo\Desktop\DesafioReactFarol`).
2. Se ainda não tiver instalado as dependências, execute:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o link gerado no navegador (geralmente `http://localhost:5173`).

---

## 🧱 Arquitetura e Componentização

O projeto segue rigorosamente o requisito de divisão em no mínimo 3 componentes:

```
src/
├── App.jsx                 # Componente Principal (Estado e Lógica)
├── components/
│   ├── Semaforo.jsx        # Carcaça e Estrutura do Semáforo
│   └── Luz.jsx             # Componente de Lâmpada Individual
├── App.css                 # Estilização realista com efeito Neon Glow
├── index.css               # Estilos globais e tema
└── main.jsx                # Ponto de entrada do React
```

### 1. `App.jsx` (Componente Pai)
- **Responsabilidade:** Único responsável pelo **estado** da aplicação.
- Guarda qual luz está ativa (`luzAtiva`) com `useState`.
- Contém a função `proximaLuz()` que segue a sequência do desafio:
  **🔴 Vermelho ➔ 🟢 Verde ➔ 🟡 Amarelo ➔ 🔴 Vermelho**.

### 2. `Semaforo.jsx` (Componente Intermediário)
- **Responsabilidade:** Representa a estrutura física do semáforo (carcaça, viseiras, suporte).
- Recebe via `props` a informação `luzAtiva`.
- Renderiza três instâncias do componente `Luz`, calculando para cada uma se ela deve estar acesa ou apagada (`ativa={luzAtiva === 'cor'}`).

### 3. `Luz.jsx` (Componente Filho)
- **Responsabilidade:** Renderizar cada lâmpada individualmente.
- Recebe via `props`:
  - `cor`: `'vermelho'`, `'amarelo'` ou `'verde'`
  - `ativa`: booleano (`true` ou `false`)
  - `onClick`: função para permitir clique direto na lâmpada
- Aplica renderização condicional de classes CSS:
  ```jsx
  className={`luz luz-${cor} ${ativa ? 'ativa' : ''}`}
  ```

---

## 🎯 Conceitos Chave Aplicados

| Conceito | Onde e Como foi Usado |
| :--- | :--- |
| **Componentização** | Separação em `App`, `Semaforo` e `Luz`, tornando o código reutilizável e legível. |
| **Props** | Passagem de dados de pai para filho (`App` ➔ `Semaforo` ➔ `Luz`). |
| **useState** | `const [luzAtiva, setLuzAtiva] = useState('vermelho')` para controlar a luz acesa. |
| **Eventos (`onClick`)** | No botão "Avançar Sinal" e nas lâmpadas para acionar `setLuzAtiva`. |
| **Renderização Condicional** | A classe CSS `.ativa` e os estilos só são ativados quando `ativa === true`. |

---

## 🎤 Perguntas Obrigatórias do Desafio (Para Apresentação)

### 1. Qual componente é responsável pelo estado?
> **Resposta:** O componente `App`. É nele que está declarado `const [luzAtiva, setLuzAtiva] = useState('vermelho')`. O estado fica no componente mais alto comum para que ele possa distribuir os dados para os filhos e coordenar os botões de ação.

### 2. Como as props são utilizadas?
> **Resposta:** As `props` funcionam como argumentos passados de um componente pai para os seus filhos. O `App` passa `luzAtiva` para o `Semaforo`. Por sua vez, o `Semaforo` passa para cada `Luz` as props `cor`, `ativa` (um booleano indicando se aquela cor é a ativa) e a função `onClick`.

### 3. O que acontece quando o usuário clica no botão?
> **Resposta:** O evento `onClick` do botão dispara a função `proximaLuz()`. Essa função verifica qual é a cor atual e chama `setLuzAtiva` passando a próxima cor do ciclo.

### 4. Por que a interface é atualizada automaticamente?
> **Resposta:** Por conta do mecanismo de **reatividade** do React. Quando chamamos `setLuzAtiva`, o React identifica que o estado do componente mudou e dispara uma nova renderização (re-render) da árvore de componentes, atualizando os elementos visuais no DOM sem que precisemos manipular nada manualmente.

---

## ⭐ Desafio Extra Implementado

- **Mensagem de Trânsito Dinâmica:** Badge com `PARE!` (Vermelho), `ATENÇÃO!` (Amarelo) e `SIGA!` (Verde), com orientações ao motorista.
- **Botões de Seleção Direta:** Três botões para pular diretamente para qualquer cor desejada.
- **Clique nas Lâmpadas:** Clicar diretamente em qualquer luz do semáforo também a acende.
- **Painel Didático Integrado:** Botão na tela que abre o resumo das 4 perguntas diretamente na interface!
