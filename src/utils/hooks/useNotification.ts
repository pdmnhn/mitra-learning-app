import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect, useState } from "react";
import { vapidKey } from "../firebase";
import { FCMType } from "../types";

const messaging = getMessaging();

const useNotification = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [notification, setNotification] = useState<FCMType | null>();

  useEffect(() => {
    getToken(messaging, { vapidKey: vapidKey }).then((token) => {
      if (!token) {
        Notification.requestPermission();
      }
    });

    onMessage(messaging, (payload) => {
      setOpen(true);
      setNotification({
        body: payload.notification?.body as string,
        title: payload.notification?.title as string,
        image: payload.notification?.image,
        url: payload?.data && payload?.data["url"],
      });
    });
  }, []);

  const closeNotification = () => {
    setOpen(false);
    setNotification(null);
  };

  return {
    notificationOpen: open,
    notification,
    closeNotification,
  };
};

export default useNotification;
