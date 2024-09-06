import s from "../FriendList/FriendList.module.css";

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const classNames = [
    s.friendsItemStatus,
    isOnline ? s.friendsStatusOnline : s.friendsStatusOffline,
  ];

  return (
    <li className={s.item} id={id}>
      <img className={s.photo} src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
      <p className={classNames.join(" ")}>{isOnline ? "Online" : "Offline"}</p>
    </li>
  );
};

export default FriendListItem;
