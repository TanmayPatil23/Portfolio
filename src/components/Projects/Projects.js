import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map((pro) => (
        <BlogCard key={pro.id}>
          <Img src={pro.image}/>
          <TitleContent >
            <HeaderThree title = ''>{pro.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {pro.description}
          </CardInfo>
          <div>
            <TitleContent >Stack</TitleContent>
            <TagList>
              {pro.tags.map((tag, id) => (
                <Tag key={id}> {tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={pro.visit}>
                Code
            </ExternalLinks>
            <ExternalLinks href={pro.source}>
              Source
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;