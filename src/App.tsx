import { useState } from "react";
import "./App.css";
import { Modal } from "./components/modal";
import { Alignment } from "./components/align";
import { Padding } from "./components/padding";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal.Root isOpen={isOpen}>
        <Modal.Body rounded elevated>
          <Padding.All value={10}>
            <Alignment.Column>
              <Modal.Header>
                <Alignment.Row
                  to="between"
                  style={{ minWidth: "100%", backgroundColor: "green" }}
                >
                  <Alignment.Column to="start">
                    <Modal.Title className="black" size="small">
                      Título
                    </Modal.Title>
                    <Modal.Subtitle className="black">Subtítulo</Modal.Subtitle>
                  </Alignment.Column>
                  <button onClick={onClose}>X</button>
                </Alignment.Row>
              </Modal.Header>
              <Modal.Content className="black">Conteúdo do modal</Modal.Content>
              <Modal.Actions>
                <Modal.Action
                  onClick={(e) => {
                    console.log("Clicou: ", e.target);
                  }}
                >
                  Ok
                </Modal.Action>
              </Modal.Actions>
            </Alignment.Column>
          </Padding.All>
        </Modal.Body>
      </Modal.Root>

      <button onClick={() => setIsOpen(true)}>Show modal</button>
    </>
  );
}

export default App;
