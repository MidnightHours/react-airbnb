import "./index.css";

import ListItem from "../../element/list-item";
import Box from "../../element/box";
import Heading from "../../element/heading";

import pool from "./pool-icon.svg";
import gym from "./gym-icon.svg";
import free_breakfast from "./free_breakfast-icon.svg";
import free_wifi from "./free_wifi-icon.svg";
import parking from "./parking-icon.svg";
import pets_allowed from "./pets_allowed-icon.svg";
import airport_shutle from "./airport_shutle-icon.svg";
import concierge_service from "./concierge_service-icon.svg";
import room_service from "./room_service-icon.svg";
import child_friendly from "./child_friendly-icon.svg";

export default function Amenities({ amenities }) {
  return (
    <Box shadow column>
      <Heading border>Зручності</Heading>

      {amenities.hasPool && <ListItem imageSrc={pool}>Басейн</ListItem>}
      {amenities.hasGym && <ListItem imageSrc={gym}>Спортивний зал</ListItem>}
      {amenities.hasFreeBreakfast && (
        <ListItem imageSrc={free_breakfast}>Безкоштовний сніданок</ListItem>
      )}
      {amenities.hasFreeWiFi && (
        <ListItem imageSrc={free_wifi}>Безкоштовний Wi-Fi</ListItem>
      )}
      {amenities.hasParking && (
        <ListItem imageSrc={parking}>Безкоштовний вуличний паркінг</ListItem>
      )}
      {amenities.hasPetsAllowed && (
        <ListItem imageSrc={pets_allowed}>
          Дозволено розміщення з домашніми тваринами
        </ListItem>
      )}
      {amenities.hasAirportShuttle && (
        <ListItem imageSrc={airport_shutle}>Трансфер до/з аеропорту</ListItem>
      )}
      {amenities.hasConciergeService && (
        <ListItem imageSrc={concierge_service}>Консьєрж-сервіс</ListItem>
      )}
      {amenities.hasRoomService && (
        <ListItem imageSrc={room_service}>Обслуговування номерів</ListItem>
      )}
      {amenities.hasChildFriendly && (
        <ListItem imageSrc={child_friendly}>Підходить для дітей</ListItem>
      )}
    </Box>
  );
}
