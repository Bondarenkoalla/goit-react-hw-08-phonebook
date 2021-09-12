import React from 'react';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={s.wrapper}>
    <img className={s.avatar} src={avatar} alt="" width="32" />
    <span className={s.name}>Welcome, {name}</span>
    <button className={s.button} type="button" onClick={onLogout}>
      LogOut
    </button>
  </div>
);