import React from 'react'
import { Col, Row } from 'react-bootstrap';

import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from '../../components/video/Video'

const HomeScreen = () => {
    return (
        <div>

            <CategoriesBar />
            <Row >

                {
                    [...new Array(20)].map(() => (

                        <Col lg={3} md={4}>
                            <Video />
                        </Col>
                    ))
                }
            </Row>

        </div>
    )
}

export default HomeScreen
