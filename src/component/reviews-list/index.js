import "./index.css";
import { Fragment } from "react";

import Heading from "../../element/heading";
import Box from "../../element/box";

export default function ReviewsList({ list }) {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <span className="review__name">
        <span>{guestName}</span>
        <span>Рейтинг: {rating}</span>
      </span>
      <span>{review}</span>
    </Box>
  );
}
