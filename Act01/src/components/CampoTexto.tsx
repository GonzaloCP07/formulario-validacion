interface CampoTextoProps {
  label: string
  tipo?: string
  valor: string
  alCambiar: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

function CampoTexto({ label, tipo = 'text', valor, alCambiar, placeholder }: CampoTextoProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={tipo}
        value={valor}
        onChange={alCambiar}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        placeholder={placeholder}
      />
    </div>
  )
}

export default CampoTexto