# Catálogo de Componentes

Este proyecto es un catálogo de componentes reutilizables en React, que incluye diversos elementos de interfaz de usuario como botones, modales y contenedores. Cada componente está diseñado para ser flexible y fácil de personalizar.

## Contenido

- [Instalación](#instalación)
- [Componentes](#componentes)
  - [Botón Personalizado](#botón-personalizado)
  - [Modal](#modal)
  - [Contenedor Responsive](#contenedor-responsive)
  - [Image](#images)
  - [Text](#texts)
  - [Toast](#toasts)
- [Uso](#uso)


## Instalación

Para instalar este proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AlvaroMartinCrespo/catalago-componentes.git
   cd catalogo-componentes
   ```

2. Instalación de dependencias:
   ```bash
   npm install
   ```

3. Iniciar la aplicación:
    ```bash
    npm run dev
    ```

## Componentes

### Botón Personalizado

Un botón reutilizable con diferentes variantes y tamaños.

#### Props

- **label**: Texto del botón (por defecto: "Click Me").
- **variant**: Estilo del botón (`primary`, `secondary`, `success`, `error`).
- **size**: Tamaño del botón (`small`, `medium`, `large`).
- **onClick**: Función que se ejecuta al hacer clic.

#### Ejemplo de Uso

```jsx
import CustomButton from './CustomButton';

<CustomButton 
  label="Primary Button" 
  variant="primary" 
  size="medium" 
  onClick={() => alert('Button clicked!')} 
/>
```

### Modal

Un modal que se puede abrir y cerrar con contenido personalizado.

#### Props

- **isOpen**: Booleano que determina si el modal está visible.
- **onClose**: Función para cerrar el modal.
- **title**: Título del modal (por defecto: "Modal Title").
- **children**: Contenido que se mostrará dentro del modal.

#### Ejemplo de Uso

```jsx
import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="My Custom Modal">
        <p>This is the content inside the modal!</p>
      </Modal>
    </div>
  );
}
```

### Contenedor Responsive

Un contenedor flexible que se adapta a diferentes tamaños de pantalla.

#### Ejemplo de Uso

```jsx
import Container from './ResponsiveContainer';

function App() {
  return (
    <Container>
      <p>Your content goes here!</p>
    </Container>
  );
}
```

