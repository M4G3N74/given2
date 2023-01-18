import React from 'react';
import { DiFirebase, DiPostgresql, DiReact, DiWordpress, DiZend ,DiLinux, } from 'react-icons/di';
import { SiKalilinux, SiTryhackme } from 'react-icons/si';
import { GrArchlinux } from 'react-icons/gr'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of Technologies and platforms over the years in 
      the web development world
      From Back-end To Design
    </SectionText>
    {/* software geek items */}
    <List>
    <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPostgresql size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListTitle>CMS</ListTitle>
          <ListParagraph>
            Experience with <br/>
            CMS like Wordpress
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
{/* Hacker items */}
   <List >
    <ListItem>
        <GrArchlinux size="3rem" />
        <ListContainer>
          <ListTitle>Arch Linux</ListTitle>
          <ListParagraph>
            As my daily driver distro<br/>
            Arch is by far the best distro to use
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiKalilinux size="3rem" />
        <ListContainer>
          <ListTitle>Kali Linux</ListTitle>
          <ListParagraph>
            Every hackers go <br/>
            to penetesting distro
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiTryhackme size="3rem" />
        <ListContainer>
          <ListTitle>Try Hack Me</ListTitle>
          <ListParagraph>
            Did i mention that am one <br/>
            the best at what i do? check the leaderboards(Zambia)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);
export default Technologies;
