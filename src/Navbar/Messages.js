import React from 'react';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faEnvelope as message
} from '@fortawesome/free-solid-svg-icons';

const Messages = (props) => {

  const {
    messages,
    clearFn,
    markRead,
  } = props;

  const onItemClick = (item, tabProps) => {
    const message = {
      id: item.id,
      type: item.type,
      text: item.title,
      link: item.link,
      read: true
    };
    markRead(message);
  }

  return (
  <NoticeIcon
    bell={
    <FontAwesomeIcon
      icon={message}
      size='lg'
      color="rgba(0,0,0,.65)"
    />
    }
    className="notice-icon"
    count={messages.length}
    onItemClick={onItemClick}
    onClear={clearFn}
    popupAlign={{ offset: [-40, -20] }}
  >
    <NoticeIcon.Tab
      list={messages}
      title="Personal Messages"
      emptyText="You have no unread messages."
    />
  </NoticeIcon>
  );
}

export default Messages;
