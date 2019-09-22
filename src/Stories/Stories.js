import React from 'react';
import { List, Avatar, Dropdown, Menu, Button, Badge} from 'antd';
import StoriesHeading from './StoriesHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faComment as commentIcon,
faReply as replyIcon,
faQuoteLeft as quote,
faSortDown as arrowDownIcon
} from '@fortawesome/free-solid-svg-icons';
import './Stories.css';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `The great american ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Pantha rei.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const Stories = () => {
  return (
  <div className="stories-container">
    <StoriesHeading />
    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={(item, index) => (
      <List.Item
         key={item.title}
         actions={[
           <Badge count={10}>
            <FontAwesomeIcon icon={commentIcon} style={{ marginRight: 8, marginTop: 9 }} />
          </Badge>,
         ]}
      >
         <List.Item.Meta
           avatar={<Avatar src={item.avatar} />}
           title={<a href={item.href}>{item.title}</a>}
           description={item.description}
         />
         {item.content}
      </List.Item>
      )}
    />
    </div>
  );
}

export default Stories;
