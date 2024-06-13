import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {notificationSlice, NotificationType} from "../../redux/slices/notification"

const Notification = () => {
    const notification = useAppSelector(state => state.notification);
    const dispatch = useAppDispatch();
    const typeStr = notification.type === NotificationType.error ? "danger" : "success";

    if (notification.shown) {
        return null;
    }

    const close = () => {
        dispatch(notificationSlice.actions.hideAlert());
    }
    return <>
        <div className={"alert alert-" + typeStr} role="alert" onClick={close} data-testID="alert">{notification.text}<div className={"close-icon"} data-testID="error-alert-close">X</div></div>

    </>
}
export default Notification;
