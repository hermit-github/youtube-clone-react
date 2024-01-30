import React from "react";
import Tag from "./Tag";

const tags = [
  "All",
  "Javascript",
  "Backend",
  "Songs",
  "Cooking",
  "Cricket",
  "Football",
  "Current Affairs",
];

const Tags = () => {

  // useEffect(() => {
  //   fetch(YOUTUBE_VIDEO_LIST_API).then(res => console.log(res))
  // },[])

  return (
    <div className=" flex flex-wrap">
      {tags.map((tagName) => {
        return (
          <React.Fragment key={tagName}>
            <Tag name={tagName} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Tags;
