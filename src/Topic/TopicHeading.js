import React from 'react';
import {
    Statistic,
    Row,
    Col,
    Badge,
    Menu,
    Dropdown
  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye as watchIcon,
  faEyeSlash as notWatchIcon,
  faVolumeMute as muteIcon,
  faReply as replyIcon,
  faSortDown as arrowDownIcon
} from '@fortawesome/free-solid-svg-icons';
import './Topic.css';

const watchStatus = (
  <Menu onClick={() => console.log("x")}>
    <Menu.Item key="1">
      <FontAwesomeIcon icon={watchIcon} /> &nbsp; Watching
    </Menu.Item>
    <Menu.Item key="2">
      <FontAwesomeIcon icon={notWatchIcon} /> &nbsp;  Not Watching
    </Menu.Item>
    <Menu.Item key="3">
      <FontAwesomeIcon icon={muteIcon} /> &nbsp; Muted
    </Menu.Item>
  </Menu>
);


const replyMenu = (
  <Menu onClick={null}>
    <Menu.Item key="1">
      <FontAwesomeIcon icon={replyIcon} />
       &nbsp; Reply as new topic
    </Menu.Item>
  </Menu>
);

const sortPosts =(
  <Menu onClick={null}>
    <Menu.Item key="1">
      Most recent first
    </Menu.Item>
    <Menu.Item key="2">
      Oldest first
    </Menu.Item>
    <Menu.Item key="2">
      Most popular
    </Menu.Item>
  </Menu>
);

const TopicHeading = () => {
  return (
    <div>
      <h1 className="topic-heading-text">Very Important Topic</h1>

      <div className="topic-category-heading">
        <h3>
          <Badge status="processing" />
          <a href="/">Important topics</a>
        </h3>
      </div>

      <div className="topic-stats-container">
        <Row gutter={12}>
          <Col span={6}>
            <Statistic title="Views" value={112893} />
          </Col>
          <Col span={6}>
            <Statistic title="Posts" value={10000} />
          </Col>
        </Row>
      </div>

      <div className="topic-actions-container">
        <Dropdown.Button
            className="topic-heading-button"
            overlay={sortPosts}
            size="large"
            icon={<FontAwesomeIcon icon={arrowDownIcon} />}
        >
            <FontAwesomeIcon icon={watchIcon} />  &nbsp;  Sort posts
        </Dropdown.Button>
          <Dropdown.Button
              className="topic-heading-button"
              overlay={watchStatus}
              size="large"
              icon={<FontAwesomeIcon icon={arrowDownIcon} />}
          >
              <FontAwesomeIcon icon={watchIcon} /> &nbsp;  Watching
          </Dropdown.Button>
          <Dropdown.Button
              className="topic-heading-button"
              overlay={replyMenu}
              size="large"
              icon={<FontAwesomeIcon icon={arrowDownIcon} />}
          >
             <FontAwesomeIcon icon={replyIcon} />
              &nbsp; Reply
          </Dropdown.Button>
      </div>

    </div>
  );
}

export default TopicHeading;
