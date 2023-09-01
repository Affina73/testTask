import { Card, CardActionArea, CardContent, useTheme } from "@mui/material";

const SmallCard = ({
  color,
  childrenComponent,
  size = 150,
  onClick = onClick,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: size / 10 + "px",
        border: 1,
        display: "flex",
        borderColor: "grey.500",
        width: size,
        height: size,
        background:
          "linear-gradient(to left top, " +
          color.dark +
          ", " +
          color.light +
          ")",
        bgcolor: color,
        justifyContent: "center",
      }}
    >
      <CardActionArea
        onClick={(evt) => {
          onClick(evt);
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: 0,
          }}
        >
          {childrenComponent}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SmallCard;
