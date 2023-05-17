import {useState, useEffect} from "react";
import bookmarkOff from "../Assets/Images/bookmarkIconOff.png";
import bookmarkOn from "../Assets/Images/bookmarkIconOn.png";
import {useDispatch, useSelector} from "react-redux";
import {addBookmark, removeBookMark} from "../Actions";
import {LocalStorage} from "../Utils/BrowserStorage";

function Bookmark({id}) {
  const [isBookmarked, setIsBookmarked] = useState(() => {
    const storedBookmarkList = LocalStorage.get("bookmarkList");
    if (storedBookmarkList) {
      const parsedBookmarkList = JSON.parse(storedBookmarkList);
      return parsedBookmarkList.includes(id);
    }
    return false;
  });
  const bookmarkState = useSelector((state) => state.bookmarkReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isBookmarked) {
      if (!bookmarkState.includes(id)) dispatch(addBookmark(id));
    } else {
      dispatch(removeBookMark(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBookmarked]);

  useEffect(() => {
    if (!bookmarkState.includes(id))
      LocalStorage.set("bookmarkList", JSON.stringify(bookmarkState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarkState]);

  return (
    <>
      {isBookmarked ? (
        <img
          src={bookmarkOn}
          alt="북마크-on"
          onClick={() => setIsBookmarked(false)}
          className="bookmark-icon"
        />
      ) : (
        <img
          src={bookmarkOff}
          alt="북마크-off"
          onClick={() => setIsBookmarked(true)}
          className="bookmark-icon"
        />
      )}
    </>
  );
}

export default Bookmark;
