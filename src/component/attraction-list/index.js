import "./index.css";

import { Fragment } from "react";

import Heading from "../../element/heading";
import Box from "../../element/box";
import ListItem from "../../element/list-item";

export default function AttractionsList({ list }) {
  return (
    <Box shadow column>
      <Heading>Пам'ятки поблизу</Heading>
      {list.map(({ id, ...rest }) => (
        <Fragment key={id}>
          <Item {...rest} />
        </Fragment>
      ))}
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem>
      <a className="attraction__link" href={link}>
        {name}
      </a>
    </ListItem>
  );
}
