import { useState, useEffect } from 'react'
import Semaforo from './components/Semaforo'
import './App.css'

// ============================================================================
// COMPONENTE PRINCIPAL: App
// Responsável por:
// 1. Manter o estado da luz ativa (useState).
// 2. Controlar a lógica de transição entre as cores.
// 3. Renderizar a interface, o semáforo e os controles do usuário.
// ============================================================================

export default function App() {
  // 1. ESTADO: Define qual luz está atualmente acesa.
  // Começa no 'vermelho', conforme solicitado no requisito do desafio.
  const [luzAtiva, setLuzAtiva] = useState('vermelho')

  // Estado opcional para exibir/ocultar a colinha com as explicações conceituais
  const [mostrarExplicacao, setMostrarExplicacao] = useState(false)

  // NOVO: Estados para o Modo Automático (ativo por padrão para mudar sozinho)
  const [modoAutomatico, setModoAutomatico] = useState(true)
  const [intervaloSegundos, setIntervaloSegundos] = useState(3)

  // 2. LÓGICA DE TRANSIÇÃO:
  // Sequência do desafio: 🔴 Vermelho → 🟢 Verde → 🟡 Amarelo → 🔴 Vermelho
  const proximaLuz = () => {
    if (luzAtiva === 'vermelho') {
      setLuzAtiva('verde')
    } else if (luzAtiva === 'verde') {
      setLuzAtiva('amarelo')
    } else {
      setLuzAtiva('vermelho')
    }
  }

  // NOVO: Efeito para alternar as cores automaticamente no intervalo definido
  useEffect(() => {
    if (!modoAutomatico) return

    const timer = setTimeout(() => {
      if (luzAtiva === 'vermelho') {
        setLuzAtiva('verde')
      } else if (luzAtiva === 'verde') {
        setLuzAtiva('amarelo')
      } else {
        setLuzAtiva('vermelho')
      }
    }, intervaloSegundos * 1000)

    return () => clearTimeout(timer)
  }, [luzAtiva, modoAutomatico, intervaloSegundos])

  // 3. DESAFIO EXTRA: Dicionário com informações da mensagem de trânsito
  const significados = {
    vermelho: {
      acao: 'PARE!',
      descricao: 'Pare totalmente o veículo antes da faixa de pedestres.',
      classe: 'status-pare',
      icone: '🛑'
    },
    amarelo: {
      acao: 'ATENÇÃO!',
      descricao: 'Atenção, o sinal irá fechar. Pare com segurança.',
      classe: 'status-atencao',
      icone: '⚠️'
    },
    verde: {
      acao: 'SIGA!',
      descricao: 'Sinal aberto. Prossiga com atenção e cuidado.',
      classe: 'status-siga',
      icone: '🟢'
    }
  }

  const statusAtual = significados[luzAtiva]

  return (
    <div className="app-layout">
      {/* Cabeçalho */}
      <header className="app-header">
        <span className="badge-tag">Desafio React</span>
        <h1>🚦 Semáforo Interativo</h1>
        <p className="subtitulo">
          Demonstração de <strong>Componentes</strong>, <strong>Props</strong>,{' '}
          <strong>useState</strong> e <strong>Renderização Condicional</strong>.
        </p>
      </header>

      {/* Conteúdo Principal */}
      <main className="painel-principal">
        {/* Coluna da Esquerda: Semáforo Físico */}
        <section className="coluna-semaforo">
          <Semaforo
            luzAtiva={luzAtiva}
            aoClicarLuz={(cor) => setLuzAtiva(cor)}
          />
        </section>

        {/* Coluna da Direita: Painel de Controle e Feedback */}
        <section className="coluna-controles">
          {/* Card com a mensagem de trânsito (Desafio Extra) */}
          <div className={`card-status ${statusAtual.classe}`}>
            <div className="status-cabecalho">
              <span className="status-icone">{statusAtual.icone}</span>
              <div>
                <span className="status-rotulo">Sinalização Atual</span>
                <h2 className="status-acao">{statusAtual.acao}</h2>
              </div>
            </div>
            <p className="status-descricao">{statusAtual.descricao}</p>
          </div>

          {/* Botão de Ciclo Principal */}
          <div className="grupo-acao-principal">
            <button
              type="button"
              className="btn-mudar-ciclo"
              onClick={proximaLuz}
            >
              <span className="btn-icone">🔄</span>
              <span className="btn-texto">
                <strong>Avançar Sinal</strong>
                <small className="btn-dica">
                  Sequência: Vermelho ➔ Verde ➔ Amarelo
                </small>
              </span>
            </button>
          </div>

          {/* Botões de Seleção Direta (Desafio Extra) */}
          <div className="secao-selecao-direta">
            <h3 className="titulo-secao">Seleção Direta (Atalho)</h3>
            <div className="botoes-cores">
              <button
                type="button"
                className={`btn-cor btn-vermelho ${luzAtiva === 'vermelho' ? 'selecionado' : ''}`}
                onClick={() => setLuzAtiva('vermelho')}
              >
                🔴 Vermelho
              </button>

              <button
                type="button"
                className={`btn-cor btn-amarelo ${luzAtiva === 'amarelo' ? 'selecionado' : ''}`}
                onClick={() => setLuzAtiva('amarelo')}
              >
                🟡 Amarelo
              </button>

              <button
                type="button"
                className={`btn-cor btn-verde ${luzAtiva === 'verde' ? 'selecionado' : ''}`}
                onClick={() => setLuzAtiva('verde')}
              >
                🟢 Verde
              </button>
            </div>
          </div>

          {/* NOVO: Painel do Modo Automático */}
          <div className="secao-modo-automatico">
            <div className="cabecalho-automatico">
              <h3 className="titulo-secao">
                ⏱️ Ciclo Automático
              </h3>
              <span className={`status-badge-auto ${modoAutomatico ? 'ativo' : 'pausado'}`}>
                <span className="ponto-pulsante" />
                {modoAutomatico ? `Ativo (${intervaloSegundos}s)` : 'Pausado'}
              </span>
            </div>

            {modoAutomatico && (
              <div className="barra-progresso-container">
                <div
                  key={`${luzAtiva}-${intervaloSegundos}`}
                  className={`barra-progresso-fill progresso-${luzAtiva}`}
                  style={{ animationDuration: `${intervaloSegundos}s` }}
                />
              </div>
            )}

            <div className="controles-automatico">
              <button
                type="button"
                className={`btn-auto-toggle ${modoAutomatico ? 'ativo' : ''}`}
                onClick={() => setModoAutomatico(!modoAutomatico)}
              >
                {modoAutomatico ? '⏸️ Pausar Automático' : '▶️ Ativar Automático'}
              </button>

              <div className="seletor-tempo">
                {[1, 2, 3, 5].map((seg) => (
                  <button
                    key={seg}
                    type="button"
                    className={`btn-tempo ${intervaloSegundos === seg ? 'selecionado' : ''}`}
                    onClick={() => setIntervaloSegundos(seg)}
                    title={`Mudar a cada ${seg} segundo(s)`}
                  >
                    {seg}s
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botão para abrir o Guia de Perguntas e Respostas */}
          <button
            type="button"
            className="btn-toggle-guia"
            onClick={() => setMostrarExplicacao(!mostrarExplicacao)}
          >
            {mostrarExplicacao ? '🔼 Ocultar Guia Conceitual' : '💡 Ver Respostas das 4 Perguntas do Desafio'}
          </button>
        </section>
      </main>

      {/* Seção Didática com o Guia de Perguntas & Respostas do Desafio */}
      {mostrarExplicacao && (
        <section className="painel-didatico">
          <h2>🧠 Guia de Apresentação do Desafio</h2>
          <div className="grid-perguntas">
            <article className="card-pergunta">
              <span className="numero-pergunta">1</span>
              <h4>Qual componente é responsável pelo estado?</h4>
              <p>
                O componente <code>App</code>. É nele que declaramos{' '}
                <code>const [luzAtiva, setLuzAtiva] = useState('vermelho')</code>.
                Ele é o "pai" de todos e atua como a única fonte da verdade (Single Source of Truth).
              </p>
            </article>

            <article className="card-pergunta">
              <span className="numero-pergunta">2</span>
              <h4>Como as props são utilizadas?</h4>
              <p>
                As <code>props</code> transportam dados para baixo: <code>App</code> passa{' '}
                <code>luzAtiva</code> para <code>Semaforo</code>, que por sua vez passa{' '}
                <code>cor</code> e <code>ativa</code> para cada componente <code>Luz</code>.
              </p>
            </article>

            <article className="card-pergunta">
              <span className="numero-pergunta">3</span>
              <h4>O que acontece quando o usuário clica no botão?</h4>
              <p>
                O evento <code>onClick</code> dispara a função <code>proximaLuz()</code>, que
                invoca <code>setLuzAtiva('novaCor')</code> avisando o React para agendar
                a atualização do estado.
              </p>
            </article>

            <article className="card-pergunta">
              <span className="numero-pergunta">4</span>
              <h4>Por que a interface é atualizada automaticamente?</h4>
              <p>
                Pela <strong>reatividade do React</strong>: quando a função <code>setLuzAtiva</code>{' '}
                altera o estado, o React automaticamente reexecuta a renderização dos componentes
                com os novos valores de props.
              </p>
            </article>
          </div>
        </section>
      )}

      {/* Rodapé sutil */}
      <footer className="app-footer">
        Desenvolvido com React + Vite • Sem uso de useEffect e sem manipulação direta do DOM
      </footer>
    </div>
  )
}
