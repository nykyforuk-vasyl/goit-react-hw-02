import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  const getHtmlElements = friends.map((friend) => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));
  return <ul className={s.friendList}>{getHtmlElements}</ul>;
};

export default FriendList;
