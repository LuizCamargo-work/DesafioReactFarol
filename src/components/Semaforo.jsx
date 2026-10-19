import Luz from './Luz'

// Componente Semaforo: responsável pela carcaça visual do semáforo
// e por organizar as três luzes (Vermelho, Amarelo, Verde).
//
// Props recebidas:
// - luzAtiva: indica qual cor está acesa no momento ('vermelho', 'amarelo' ou 'verde')
// - aoClicarLuz: função callback chamada caso o usuário clique diretamente em uma luz

export default function Semaforo({ luzAtiva, aoClicarLuz }) {
  return (
    <div className="semaforo-container">
      {/* Viseiras superiores decorativas do semáforo real */}
      <div className="semaforo-corpo">
        {/* Luz Vermelha (topo) */}
        <div className="slot-luz">
          <div className="pestana" />
          <Luz
            cor="vermelho"
            ativa={luzAtiva === 'vermelho'}
            onClick={() => aoClicarLuz && aoClicarLuz('vermelho')}
          />
        </div>

        {/* Luz Amarela (centro) */}
        <div className="slot-luz">
          <div className="pestana" />
          <Luz
            cor="amarelo"
            ativa={luzAtiva === 'amarelo'}
            onClick={() => aoClicarLuz && aoClicarLuz('amarelo')}
          />
        </div>

        {/* Luz Verde (base) */}
        <div className="slot-luz">
          <div className="pestana" />
          <Luz
            cor="verde"
            ativa={luzAtiva === 'verde'}
            onClick={() => aoClicarLuz && aoClicarLuz('verde')}
          />
        </div>
      </div>

      {/* Poste de sustentação para um efeito visual realista */}
      <div className="semaforo-poste" />
      <div className="semaforo-base" />
    </div>
  )
}

