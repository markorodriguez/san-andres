import React from "react";
import tw from "twin.macro";


import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
//import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
//import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import hospitalityIconImageSrc from "images/hospitality-icon.svg";
import emergencyIconImageSrc from "images/emergency-icon.svg";
import medicineIconImageSrc from "images/medicine-icon.svg";
import clinicphotoSrc from "images/camas.jpg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText= tw.span`bg-indigo-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  //const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero 
        heading={<>Clínica <HighlightedText>San Andrés</HighlightedText></>}
        description="La primera clínica de Huaral."
        imageSrc="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Reserva tu cita"
        primaryButtonUrl="/reserva"
      />
      <MainFeature
        subheading={<Subheading>Brindando el mejor servicio desde 2010</Subheading>}
        heading={
          <>
            Funcionando hace 
            <wbr /> <HighlightedText>más de 6 años.</HighlightedText>
          </>
        }
        description={
          <Description>
            Clínica San Andrés se compromete a cuidar la salud y brindar una buena atención a sus pacientes.  
            <br />
            <br />
            Mantenemos la integridad de nuestros doctores para brindar la confianza a nuestros pacientes.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}

      <Features
        heading={
          <>
            Servicios que <HighlightedText>brindamos.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: hospitalityIconImageSrc,
            title: "Hospitalización",
            description: "Contamos con doctores especializados para ",
            
          },
          {
            imageSrc: emergencyIconImageSrc,
            title: "Emergencia",
            description: "Servicio de emergencia las 24 horas, con doctores preparados para cualquier problema.",
            
          },
          {
            imageSrc: medicineIconImageSrc,
            title: "Farmacia",
            description: "Contamos con una basta cantidad de medicinas para nuestros pacientes.",
           
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>Una clínica con amplia experiencia</Subheading>}
        heading={<>¿Por qué <HighlightedText>elegirnos?</HighlightedText></>}
        statistics={[
          {
            key: "Doctores",
            value: "A++",
          },
          {
            key: "Amplia infraestructura",
            value: "A+"
          },
          {
            key: "Pacientes satisfechos",
            value: "18500+"
          }
        ]}
        primaryButtonText="Reserva ahora"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc = {clinicphotoSrc}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={<>Nuestros clientes nos <HighlightedText>recomiendan.</HighlightedText></>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
