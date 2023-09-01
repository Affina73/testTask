import { useTheme } from "@mui/material";
import { Grid } from "@mui/material";
import SmallCard from "../Cards/SmallCard/SmallCard";
import Room from "../Cards/Room/Room";
import RoomDetailsDialog from "../RoomDetailsDialog/RoomDetailDialog";
import { useRef } from "react";
import RoomDetailed from "../RoomDetailed/RoomDetailed";

const CardManager = ({
  cardMetadata,
  filterRoomsText = "",
  renderNewRoomButton = true,
  size,
}) => {
  const theme = useTheme();
  const dialogRef = useRef(null);

  const onRoomClick = (id) => {
    return () => {
      dialogRef.current.setOpen(true);
      dialogRef.current.setName(cardMetadata.rooms[id].roomProps.name);
      dialogRef.current.setContent(
        RoomDetailed(cardMetadata.rooms[id].roomProps)
      );
    };
  };

  return (
    <div>
      <Grid
        container
        margin="auto"
        spacing={theme.spacing()}
        justifyItems={"flex-end"}
      >
        {Object.keys(cardMetadata.rooms)
          .filter(
            (id) =>
              filterRoomsText === "" ||
              cardMetadata.rooms[id].roomProps.name
                .toLowerCase()
                .startsWith(filterRoomsText.toLowerCase())
          )
          .map((id) => (
            <Grid item xs={5.88} key={"grid-room-" + id}>
              <SmallCard
                onClick={onRoomClick(id)}
                color={cardMetadata.rooms[id].color}
                size={size}
                childrenComponent={
                  <Room {...cardMetadata.rooms[id].roomProps} />
                }
                key={"room-" + id}
              />
            </Grid>
          ))}
      </Grid>
      <RoomDetailsDialog ref={dialogRef} />
    </div>
  );
};

export default CardManager;
