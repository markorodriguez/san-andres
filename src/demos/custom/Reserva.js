import React, { useState, useEffect } from "react"
import styled from "styled-components";
import tw from "twin.macro";
import Axios from "axios"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Navbar from "components/headers/light"
import Footer from "components/footers/FiveColumnWithInputForm"
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg"
import { Modal, Button } from "react-bootstrap"

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
  input,textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }

    :disabled{
        ${tw`bg-red-500`}
    }
  }
`;


const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const Select = tw.select``;
const Option = tw.option``;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`



export default () => {

    const [dni, setDni] = useState("")
    const [digito, setDigito] = useState("")
    const [especialidad, setEspecialidad] = useState("")
    const [edad, setEdad] = useState(10)
    const [fecha, setFecha] = useState("")
    const [telefono, setTelefono] = useState("")
    const [msj, setMessage] = useState("")
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {

        setDisabled(false)

        const data = {
            fecha: fecha
        }



        if (fecha !== "") {
            console.log('fecha no est?? vac??o')


            const cita = {
                a??o: fecha.slice(0, 4),
                mes: fecha.slice(5, 7),
                dia: fecha.slice(8, 10),
            };

            //fecha actual

            const d = new Date();
            const dia = ("0" + d.getDate()).slice(-2);
            const mes = ("0" + (d.getMonth() + 1)).slice(-2);
            const a??o = d.getFullYear();


            if (cita.a??o >= a??o) {
                if (cita.mes === mes) {
                    if (cita.dia >= dia) {
                        console.log("Puede registrarse")
                        Axios.post("https://backend-clinica2331.herokuapp.com/citaspordia", data).then((res) => {
                            console.log(res.data)

                            if (res.data === "") {
                                console.log("est?? vac??o")
                            } else {
                                setMessage("La cantidad de citas disponibles para esta fecha es " + res.data.citas_disponibles)
                                handleShow()
                            }

                        }).catch((err) => console.log(err))
                    } else {
                        setDisabled(true)

                        setMessage("Mismo mes, pero d??a NO v??lido");
                        handleShow()
                    }
                } else {
                    if (cita.mes >= mes) {
                        setDisabled(true)
                        setMessage("Mes posterior");
                        handleShow()
                    } else {
                        setDisabled(true)
                        setMessage("Mes pasado, cita NO v??lida");
                        handleShow()
                    }
                }
            } else {
                setDisabled(true)
                setMessage('A??o pasado, cita NO v??lida');
                handleShow()
            }

        } else {
            console.log("primer renderizado")
        }

        /*
  const cita = {
    a??o: diaF.slice(0, 4),
    mes: diaF.slice(5, 7),
    dia: diaF.slice(8, 10),
  };

  //fecha actual

  const d = new Date();
  const dia = ("0" + d.getDate()).slice(-2);
  const mes = ("0" + (d.getMonth() + 1)).slice(-2);
  const a??o = d.getFullYear();
*/




    }, [fecha])

    useEffect(()=>{
        if(edad>=10 && edad <= 99){
            console.log("Edad v??lida")
        } else {
            setEdad(10)
            setDisabled(true)
            setMessage("Ingrese una edad v??lida")
            handleShow()
        }
    }, [edad])

    const handleForm = (e) => {
        e.preventDefault();
        //76599026 reni
        const data = {
            dni: dni,
            digito: digito,
            especialidad: especialidad,
            edad: edad,
            fecha: fecha,
            telefono: telefono
        }
        Axios.post('https://backend-clinica2331.herokuapp.com/registropacientes', data).then((r) => {
            //console.log(data)
            setMessage(r.data)
            console.log(r.data)
            handleShow()

        }).catch((err) => { console.log(err) })

    }

    const [show, setShow] = useState(false)

    const handleClose = () => { setShow(false) }
    const handleShow = () => { setShow(true) }



    return (
        <AnimationRevealPage>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>!Atenci??n!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{msj}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose} variant="primary">Cerrar</Button>
                </Modal.Footer>
            </Modal>
            <Navbar />
            <Container>
                <Content>
                    <FormContainer>
                        <div tw="mx-auto max-w-4xl">
                            <h2>Reserve su consulta</h2>

                            <h4></h4>
                            <form action="#" onSubmit={handleForm}>
                                <TwoColumn>
                                    <Column>
                                        <InputContainer>
                                            <Label htmlFor="name-input">DNI</Label>
                                            <Input required id="name-input" type="text" name="name" placeholder="Ingrese su DNI" value={dni} onChange={(e) => { setDni(e.target.value) }} />
                                        </InputContainer>
                                        <InputContainer>
                                            <Label htmlFor="email-input">CARACTER DE VALIDACI??N</Label>
                                            <Input required id="email-input" type="number" name="email" placeholder="Ingrese el caracter" maxLength='1' value={digito} onChange={(e) => { setDigito(e.target.value) }} />
                                        </InputContainer>
                                        <InputContainer>
                                            <Label htmlFor="email-input">EMAIL</Label>
                                            <Input required id="email-input" type="email" name="email" placeholder="Ingrese su email" value={telefono} onChange={(e) => { setTelefono(e.target.value) }} />
                                        </InputContainer>
                                    </Column>
                                    <Column>
                                        <InputContainer>
                                            <Label htmlFor="name-input">ESPECIALIDAD</Label>
                                            <Select required className="select" value={especialidad} onChange={(e) => { setEspecialidad(e.target.value) }} style={{ width: '100%', color: 'rgba(160,174,192,1)', background: 'transparent', borderBottom: '2px solid #e5e7eb', paddingTop: '0.5rem', paddingBottom: '0.5rem' }} >
                                                <Option value='descarte' className="option">Descarte COVID-19</Option>
                                            </Select>
                                        </InputContainer>
                                        <InputContainer>
                                            <Label htmlFor="email-a">EDAD</Label>
                                            <Input required id="email-a" type="number" min="0" max="100" maxLength="2" required name="email" value={edad} onChange={(e) => { setEdad(e.target.value) }} />
                                        </InputContainer>
                                        <InputContainer>
                                            <Label htmlFor="email-b">D??A DE LA CONSULTA</Label>
                                            <Input required id="email-b" type="date" name="email" placeholder="Ingrese el caracter" value={fecha} onChange={(e) => { setFecha(e.target.value) }} />
                                        </InputContainer>
                                    </Column>
                                </TwoColumn>

                                <SubmitButton disabled={disabled} type="submit" value="Submit"  >Enviar</SubmitButton>
                            </form>
                        </div>
                        <SvgDotPattern1 />
                    </FormContainer>
                </Content>
            </Container>
            <Footer />
        </AnimationRevealPage>
    )
}
