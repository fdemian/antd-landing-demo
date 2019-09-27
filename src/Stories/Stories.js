import React from 'react';
import { List, Avatar, Tooltip, Badge} from 'antd';
import StoriesHeading from './StoriesHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faComment as commentIcon,
faClock as clock
} from '@fortawesome/free-solid-svg-icons';
import './Stories.css';

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `The great american ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: <a href="/">Uncategorized</a>,
    content: (i%2 === 0 ? 'How string theory failed.' : ''),
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
      bordered={false}
      renderItem={(item, index) => (
      <List.Item
         key={item.title}
         actions={[
           <Tooltip placement="bottom" title="10 people commented on this.">
             <Badge count={10}>
              <FontAwesomeIcon
                icon={commentIcon}
                style={{ marginRight: 8, marginTop: 9 }}
              />
            </Badge>
           </Tooltip>,
          <span>
            <FontAwesomeIcon
              icon={clock}
              style={{ marginRight: 8, marginTop: 9 }}
            />
            &nbsp; 7 minute read
          </span>
         ]}
         extra="4 weeks ago"
      >
         <List.Item.Meta
           avatar={<Avatar src={item.avatar} />}
           title={<a href={item.href}>{item.title}</a>}
           description={item.description}
         />
         <span className="story-summary">{item.content}</span>
      </List.Item>
      )}
    />
    </div>
  );
}

export default Stories;
