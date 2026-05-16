interface BotonEnviarProps {
  texto?: string
}

function BotonEnviar({ texto = 'Enviar' }: BotonEnviarProps) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium cursor-pointer"
    >
      {texto}
    </button>
  )
}

export default BotonEnviar