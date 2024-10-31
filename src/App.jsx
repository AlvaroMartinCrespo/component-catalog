import TestComponent from "./components/TestComponent/testComponent"
import Container from "./components/Container/container"
import Toast from "./components/Toast/toast"
import CustomButton from "./components/Button/button"
import Modal from "./components/Modal/modal"
import Text from "./components/Text/text"
import Input from "./components/Input/input"
import Card from "./components/Card/card"
import Loader from "./components/Loader/loader"
import Accordion from "./components/Accordion/accordion"
import Image from "./components/Image/image"
import Gallery from "./components/Gallery/gallery"
import { useState } from "react"
import './App.css'

function App() {

  const [toastVisibleSuccess, setToastVisibleSuccess] = useState(false)
  const [toastVisibleError, setToastVisibleError] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLoaderVisible, setIsLoaderVisible] = useState(false)
  const [isAccordionVisible, setIsAccordionVisible] = useState(false)

  const imagenes = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTd00LthTsvFQAEL2jlWb2aubmv6DdBbN_g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-I6HHEOwYgL5v4GoL17cJgKDfnOqzD3uvqQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnXHt7v15IR3VVABxAGLwkSjYrP59owqlsw&s'
  ]

  return (
    <>
      <TestComponent>

        {/* Toast */}
        <Container>

          <div className="containerButtons">

            <CustomButton label="Success Toast" onClick={()=>setToastVisibleSuccess(true)}/>
            <CustomButton label="Error Toast" variant="secondary" onClick={()=>setToastVisibleError(true)} />

          </div>


          {
            toastVisibleSuccess && (
              <Toast 
                message="This is a success toast"
                type="success"
                position="top-right"
                duration={3000}
                onClose={()=>setToastVisibleSuccess(false)}
              />
            )
          }

          {
            toastVisibleError && (
              <Toast 
                message="This is an error toast"
                type="error"
                duration={3000}
                onClose={()=>setToastVisibleError(false)}
              />
            )
          }
          
        </Container>

          {/* Modal */}

          <Container>
            <div className="containerButtons">

              <CustomButton onClick={()=>setIsOpenModal(true)}>Open Modal</CustomButton>
              
            </div>
          </Container>



          <Modal isOpen={isOpenModal} onClose={()=>setIsOpenModal(false)} title="Modal Title">
            <Container>
              <h1>Este es un titulo en la modal</h1>
              <p>Este es el contendido de la modal</p>
              <p>Este es el contendido de la modal</p>
              <p>Este es el contendido de la modal</p>
              <ul>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
              </ul>
            </Container>
          </Modal>

            {/* Text */}

            <Container>
              <Text size="2rem" color="red" weight="bold" align="center">Hello World</Text>
            </Container>

            {/* Input */}
            <Container>
              <Text
                size="20px"
                color="black"
                weight="bold"
                align="left"
              >Introduce aqui tu nombre:</Text>
              <Input placeholder="Nombre" type="text" onChange={()=>{console.log('Estas escribiendo')}}/>
            </Container>

            {/* Card */}
            <Container>
              <section className="flex">
              <Card 
                title="Con imagen" 
                description="Card Description Card Description Card Description Card Description Card Description " 
                image="src\assets\img\example.jpg" 
              />
              <Card 
                title="Sin imagen" 
                description="Card Description Card Description Card Description Card Description Card Description " 
                actions={<section className="flex center">
                  <CustomButton size="small" label="Action 1"/>
                  <CustomButton size="small" label="Action 2"/>
                </section>}
                 
              />
              </section>
              
            </Container>

            {/* Loader */}
            <Container> 

              {isLoaderVisible 
              
              ? <>
              
                <CustomButton onClick={()=>setIsLoaderVisible(false)} label="Hide loader" />
                  <Container >
                    <Loader size="medium" color="#007bff"/>
                  </Container>
                
              
              </> 
              
              : <>
              
                <CustomButton onClick={()=>setIsLoaderVisible(true)} label="Show loader" />
              
              </>}


            </Container>

            {/* Accordion */}
            <Container>
                <Accordion title="Detalles Importantes" color="#D63D1E">
                  <p>Este acordeón está abierto por defecto. Puedes cerrar o abrir haciendo clic en el encabezado.</p>
                </Accordion>
            </Container>

            {/* Galery */}
            <Container>
              <Gallery images={imagenes}/>
            </Container>

            {/* Image */}
            <Container >
              <section className="flex center">
                <Image width="50%" className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTd00LthTsvFQAEL2jlWb2aubmv6DdBbN_g&s" alt="Imagen de prueba"/>
                <Image width="50%" borderRadius="0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTd00LthTsvFQAEL2jlWb2aubmv6DdBbN_g&s" alt="Imagen de prueba"/>
              </section>
            </Container>

            
      </TestComponent>
    </>
  )
}

export default App
