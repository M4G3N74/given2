import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hi there, I'm <br />
      Given Malambo <br />
      @M4G3N74
      </SectionTitle>
      <SectionText>
      A software engineer and Red Teamer(Ethical Hacker)
      </SectionText>
      <Button onClick={() => window.location = "#about"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;