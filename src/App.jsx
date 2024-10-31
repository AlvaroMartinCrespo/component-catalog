import TestComponent from "./components/TestComponent/testComponent"
import Container from "./components/Container/container"
import Toast from "./components/Toast/toast"
import CustomButton from "./components/Button/button"
import Modal from "./components/Modal/modal"
import Text from "./components/Text/text"
import Input from "./components/Input/input"
import { useState } from "react"
import './App.css'

function App() {

  const [toastVisibleSuccess, setToastVisibleSuccess] = useState(false)
  const [toastVisibleError, setToastVisibleError] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

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
              <Input placeholder="Texto" type="text" />
            </Container>

      </TestComponent>
    </>
  )
}

export default App
