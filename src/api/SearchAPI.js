import { getAllTags } from './TagsApi';
import { index } from '../algolia';

export async function searchableTags() {
  let tags = [];
  await getAllTags()
    .then((res) => {
      res.forEach((element) => {
        element.objectID = element.id;
        delete element.id;
      });
      tags = res;
      console.log(tags);
    })
    .catch((e) => console.log(e));

  index.saveObjects(tags).then(({ objectIDs }) => {
    console.log(objectIDs);
  });
}
