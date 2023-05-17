import styled from "styled-components";
import Bookmark from "./Bookmark";

function Card({imageUrl, id}) {
  return (
    <div className="flex flex-col">
      <CardImg img={imageUrl}>
        <div className="z-1 absolute bottom-3 right-3 text-white">
          <Bookmark id={id} />
        </div>
      </CardImg>
    </div>
  );
}

const CardImg = styled.div`
  width: 16.5rem;
  height: 13rem;
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 12px;
`;

export default Card;
