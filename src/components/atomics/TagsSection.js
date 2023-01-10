import React from 'react';
import Heading3 from '../textComponents/Heading3';
import Chip from './Chip';

const TagSection = ({ sectionTitle, tags, primary = true, mini = false }) => {
  const sectionItems = tags.map((tag) => (
    <Chip mini={mini} tagName={tag.name} key={tag.id} primary={primary}></Chip>
  ));

  return (
    <div className="tagsSection">
      <Heading3>{sectionTitle}</Heading3>
      <div className="tags">{sectionItems}</div>
    </div>
  );
};

export default TagSection;
