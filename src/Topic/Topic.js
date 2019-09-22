import React from 'react';
import { List, Avatar, Dropdown, Menu, Button } from 'antd';
import TopicHeading from './TopicHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faThumbsUp as thumbsUp,
faReply as replyIcon,
faQuoteLeft as quote,
faSortDown as arrowDownIcon
} from '@fortawesome/free-solid-svg-icons';
import './Topic.css';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `User ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Pantha rei.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const replyMenu = (
  <Menu onClick={null}>
    <Menu.Item key="1">
      <FontAwesomeIcon icon={replyIcon} />
       &nbsp; Reply as new topic
    </Menu.Item>
  </Menu>
);


const Topic = () => {
  return (
  <div className="topic-container">
    <TopicHeading />
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
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
           <span>
             <FontAwesomeIcon icon={thumbsUp} style={{ marginRight: 8 }} />
              10
           </span>,
           <Dropdown.Button
               overlay={replyMenu}
               icon={<FontAwesomeIcon icon={arrowDownIcon} />}
           >
              <FontAwesomeIcon icon={replyIcon} />
               &nbsp; Reply
           </Dropdown.Button>,
           <Button>
              <FontAwesomeIcon icon={quote} />
              &nbsp; Quote
           </Button>
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

export default Topic;
