import {useEffect, useState} from "react";
import bookmarkOff from "../Assets/북마크 아이콘 - off.png";
import bookmarkOn from "../Assets/북마크 아이콘 - on.png";

function Bookmark({id}) {
  const [bookmark, setBookmark] = useState(false);
  useEffect(() => {
    if (bookmark) {
      localStorage.setItem("bookmark", id);
    } else {
      localStorage.getItem("bookmark, ");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmark]);
  return (
    <>
      {bookmark ? (
        <img
          src={bookmarkOn}
          alt="북마크-on"
          onClick={() => setBookmark(false)}
          className="bookmark-icon"
        />
      ) : (
        <img
          src={bookmarkOff}
          alt="북마크-off"
          onClick={() => setBookmark(true)}
          className="bookmark-icon"
        />
      )}
    </>
  );
}

export default Bookmark;
