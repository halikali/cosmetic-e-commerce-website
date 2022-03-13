import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import { CategoryCard } from '../../components/CategoryCard/categoryCard';

const SecondPage = () => {
  return (
    <Container style={{marginTop: '20px' }}>
      <Row>
        <Col md={4}>Sidebar Section</Col>
        <Col md={8}>
          <Row xs={1} md={2} lg={2} xl={3} className="g-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col>
              <CategoryCard />
            </Col>
          ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SecondPage