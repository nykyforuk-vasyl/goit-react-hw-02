import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapperProfile}>
      <div className={s.wrapper}>
        <img className={s.photo} src={image} alt={`${name}'s avatar`} />
        <p className={s.name}>{name}</p>
        <p className={s.tagLocation}>@{tag}</p>
        <p className={s.tagLocation}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span className={s.stats}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span className={s.stats}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span className={s.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
