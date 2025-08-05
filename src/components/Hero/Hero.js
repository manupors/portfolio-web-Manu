import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hola! <br />
          Soy Manuel
        </SectionTitle>
        <SectionText>
        Ingeniero en Informática con 5 años de experiencia desarrollando soluciones full stack escalables con React, Node.js, JavaScript y bases de datos.
        Especializado en gestión de proyectos tecnológicos, automatización de procesos y creación de interfaces de usuario modernas que resuelven problemas reales del negocio.
        Mi enfoque está en transformar ideas complejas en aplicaciones web elegantes y funcionales, manteniéndome siempre actualizado con las últimas tecnologías.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;