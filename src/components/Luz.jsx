// Componente Luz: responsável por representar individualmente cada uma das luzes do semáforo.
// Ele recebe por propriedades (props):
// - cor: 'vermelho' | 'amarelo' | 'verde'
// - ativa: booleano (true se a luz deve estar acesa, false se apagada)
// - onClick: função que pode ser disparada quando o usuário clica na luz

export default function Luz({ cor, ativa, onClick }) {
  return (
    <button
      type="button"
      className={`luz luz-${cor} ${ativa ? 'ativa' : ''}`}
      onClick={onClick}
      aria-label={`Luz ${cor} ${ativa ? 'acesa' : 'apagada'}`}
    >
      {/* Pequeno reflexo interno para dar realismo à lente de vidro */}
      <span className="brilho-lente" />
    </button>
  )
}

