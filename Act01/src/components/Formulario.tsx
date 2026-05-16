import { useState } from 'react'
import { validarDatos, type FormInput } from './validaciones'
import CampoTexto from './CampoTexto'
import BotonEnviar from './BotonEnviar'

function Formulario() {
  const [formData, setFormData] = useState<FormInput>({
    nombre: '',
    email: '',
    curso: '',
  })

  const handleChange = (campo: keyof FormInput) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [campo]: e.target.value as FormInput[typeof campo],
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const resultado = validarDatos(formData)

    if (resultado.success) {
      alert(
        'Validación exitosa\n\n' +
        'JSON generado:\n' +
        JSON.stringify(resultado.data, null, 2)
      )
    } else {
      alert(
        'Error de validación:\n\n' +
        resultado.error.issues[0].message
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Formulario de Registro
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <CampoTexto
            label="Nombre"
            valor={formData.nombre}
            alCambiar={handleChange('nombre')}
            placeholder="Tu nombre completo"
          />

          <CampoTexto
            label="Email"
            tipo="email"
            valor={formData.email}
            alCambiar={handleChange('email')}
            placeholder="tu@email.com"
          />

          <CampoTexto
            label="Curso"
            valor={formData.curso}
            alCambiar={handleChange('curso')}
            placeholder="1 DAM o 2 DAM"
          />

          <BotonEnviar texto="Validar y Guardar" />
        </form>
      </div>
    </div>
  )
}

export default Formulario