import { useQuery } from "react-query";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Fragment } from "react";

import { Spinner } from "../feedback/Spinner";
import "./Profile.css";

export function Profile() {
  const { isLoading, data } = useQuery("profileData", () =>
    fetch("/api/profile").then((res) => res.json())
  );

  if (isLoading) return <Spinner useBackdrop />;
  return (
    <div className="full-size profile-wrapper">
      <Card
        sx={{
          maxWidth: "max-content",
          height: "max-content",
          minWidth: 370,
          m: 5,
        }}
      >
        <div className="flex-center">
          <Avatar sx={{ width: 85, height: 85, m: 2 }}>
            {(data.name || "").charAt(0)}
          </Avatar>
        </div>
        <CardContent className="profile-data">
          {Object.keys(data).map((k) => {
            if (k === "_id") return null;
            const val = data[k].toString();
            return (
              <Fragment key={val}>
                <Typography variant="body2" color="text.secondary">
                  {k}
                </Typography>
                <Typography variant="body1">{val}</Typography>
              </Fragment>
            );
          })}
        </CardContent>
        <CardActions>
          <Button>Edit Profile</Button>
        </CardActions>
      </Card>
    </div>
  );
}
