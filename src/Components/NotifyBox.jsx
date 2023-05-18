import {useSelector} from "react-redux";
import Toast from "./Toast";

function NotifyBox() {
  const notificationList = useSelector(
    (notification) => notification.notificationReducer
  );
  return (
    <div className="fixed z-20 w-auto bottom-5 right-5">
      {notificationList.notification.map((notify) => (
        <Toast
          key={notify.key}
          message={notify.message}
          delayTime={notify.delayTime}
        />
      ))}
    </div>
  );
}

export default NotifyBox;
