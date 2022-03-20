import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector } from "../utils/hooks";

const Notifications = () => {
  const notifications = useAppSelector(
    (state) => state.notifications.notifications
  );

  return (
    <Box>
      <List>
        {notifications.map(({ id, title, description, url }) => (
          <ListItem
            button
            component="a"
            href={url}
            // target="_blank"
            rel="noopener noreferrer"
            divider
            key={id}
          >
            <ListItemText primary={title} secondary={description} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Notifications;
