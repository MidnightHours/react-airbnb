import "./index.css";

import Heading from "../../element/heading";
import ListItem from "../../element/list-item";
import Box from "../../element/box";

import guest from "./guest-icon.svg";
import bedroom from "./bedroom-icon.svg";
import bed from "./bed-icon.svg";
import bathroom from "./bathroom-icon.svg";

export default function PropertyList({ property }) {
  return (
    <Box shadow column>
      <Heading border>Деталі:</Heading>
      <ListItem imageSrc={guest}>{property.guests} гостей</ListItem>
      <ListItem imageSrc={bedroom}>{property.bedrooms} спальня</ListItem>
      <ListItem imageSrc={bed}>{property.beds} ліжко</ListItem>
      <ListItem imageSrc={bathroom}>{property.baths} ванна кімната</ListItem>
    </Box>
  );
}
