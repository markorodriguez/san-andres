import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Axios from "axios";
import {Modal, Button} from "react-bootstrap"
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Navbar from "components/headers/light";
import Footer from "components/footers/FiveColumnWithInputForm";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
//const Select = tw.select``;
//const Option = tw.option``;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

export default () => {
  const [dni, setDni] = useState("");
  const [digito, setDigito] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const [msj, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const data = {
      dni: dni,
      digito: digito,
    };
    Axios.post("https://backend-clinica2331.herokuapp.com/verresultados", data)
      .then((res) => {
        console.log(res.data)
        setMessage(res.data);
        handleShow()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AnimationRevealPage>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>!Atención!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{msj}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="primary">
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar />
      <Container>
        <Content>
          <FormContainer>
            <div tw="mx-auto max-w-4xl">
              <h2>Vea sus resultados</h2>
              <form action="#">
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="name-input">DNI</Label>
                      <Input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="Ingrese su DNI"
                        value={dni}
                        onChange={(e) => {
                          setDni(e.target.value);
                        }}
                        maxLength="8"
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="email-input">
                        CARACTER DE VALIDACIÓN
                      </Label>
                      <Input
                        id="email-input"
                        type="email"
                        name="email"
                        placeholder="Ingrese el caracter"
                        maxLength="1"
                        value={digito}
                        onChange={(e) => {
                          setDigito(e.target.value);
                        }}
                      />
                    </InputContainer>
                  </Column>
                </TwoColumn>

                <SubmitButton type="submit" value="Submit" onClick={handleForm}>
                  Enviar
                </SubmitButton>
              </form>
            </div>
            <SvgDotPattern1 />
          </FormContainer>
        </Content>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
