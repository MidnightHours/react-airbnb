import "./index.css";

import Heading from "../../element/heading";
import ListItem from "../../element/list-item";
import Box from "../../element/box";

export default function AddPropertyList({ property }) {
  return (
    <Box shadow column>
      <Heading border>Додаткові властивості:</Heading>
      <ListItem title="Правила дому">{property.house_rules}</ListItem>
      <ListItem title="Політика скасування">
        {property.cancellation_policy}
      </ListItem>
      <ListItem title="Місцевий транспорт">
        {property.local_transportation}
      </ListItem>
      <ListItem title="Мови хоста">
        {property.host_languages[0]}, {property.host_languages[1]}
      </ListItem>
      <ListItem title="Спеціальні пропозиції:">
        {property.special_offers}
      </ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        {property.special_offers}
      </ListItem>
    </Box>
  );
}
