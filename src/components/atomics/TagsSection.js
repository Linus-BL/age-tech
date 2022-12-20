import React from 'react';
import Heading3 from '../textComponents/Heading3';
import Chip from './Chip';

const TagSection = ({ sectionTitle = 'Kolla in dessa', tags }) => {
  const sectionItems = tags.map((tag) => (
    <Chip tagName={tag.tagName} key={tag.id}></Chip>
  ));

  return (
    <div className="tagsSection">
      <Heading3>{sectionTitle}</Heading3>

      <div className="tags">{sectionItems}</div>
    </div>
  );
};

export default TagSection;
