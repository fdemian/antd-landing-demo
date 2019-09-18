import React from 'react';
import { Statistic, Row, Col, Badge } from 'antd';
import './Topic.css';

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

    </div>
  );
}

export default TopicHeading;
