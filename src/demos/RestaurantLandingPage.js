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
        subheading={<Subheading>Brindando el mejor servicio desde 2015</Subheading>}
        heading={
          <>
            Funcionando hace 
            <wbr /> <HighlightedText>más de 5 años.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
           
          },
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
           
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>Una clínica con reputación</Subheading>}
        heading={<>¿Por qué <HighlightedText>elegirnos?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Reserva ahora"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
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
