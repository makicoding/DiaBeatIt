import React from 'react'
import {
    Card, CardText, CardBody, Container, CardTitle,
} from 'reactstrap';
import ImgCarousel from './ImgCarousel';
import ImgCarousel1 from './ImgCarousel1';
import { diaTypes, preWay, Symptoms } from './diabetesData';
import "../Text/text.css";
// import { types } from '@babel/core';

const Resource = (props) => {
    return (
        <Container>

            {/* introduction card */}
            <Card className="firstCard mb-5">
                <CardBody>
                    <CardTitle className="mb-5">
                        <h2 className="cardTitle">What is diabetes?</h2>
                    </CardTitle>
                    {/* <ImgCarousel1 /> */}
                    <CardText className="text-left mt-4 mainContentTextBlack">Diabetes is the condition in which the body does not properly process food for use as energy.
                    Most of the food we eat is turned into glucose or sugar for our bodies to use as energy. The
                    pancreas, an organ that lies near the stomach, makes a hormone called insulin to help
                    glucose get into the cells of our bodies. When you have diabetes, your body either does not
                    make enough insulin or cannot use its own insulin as well as it should. This causes sugars to
                    build up in your blood. Diabetes can cause serious health complications including heart disease, blindness, kidney
                    failure, and lower-extremity amputations. Diabetes is the seventh leading cause of death in
                    the United States.
                    </CardText>
                    <br></br>
                </CardBody>
            </Card>

            {/* symptoms of diabetes */}
            <Card className="firstCard mb-5">
                <CardBody>
                    <CardTitle className="mb-5">
                        <h2 className="cardTitle">Symptoms of diabetes</h2>
                    </CardTitle>
                    <ul className="unorderedList">
                        {Symptoms.map((sym) => {
                            return (
                                <li className="list-item d-inline-flex col-md-4" key={sym.symptom}>
                                    <div className="list-content mainContentTextBlack">
                                        <img className="rounded-circle"
                                            src={sym.img}
                                            // style={{ width: "100%", }}
                                            alt={sym.symptom} />
                                            <br></br>
                                        <p className="symptomsSubText">{sym.symptom}</p>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </li>
                            )
                        })
                        }
                    </ul>
                </CardBody>
            </Card>

            {/* types of diabetes */}
            {diaTypes.map((dataType) => {
                return (
                    <Card className="firstCard mb-5">
                        <CardBody>
                            <CardTitle className="cardTitle">
                                <span>{dataType.header}</span>
                            </CardTitle>
                            <CardText className="text-left p-4 mainContentTextBlack">
                                {dataType.description}
                            </CardText>
                        </CardBody>
                    </Card>
                )
            })}
            
            {/* care image carousel */}
            {/* <ImgCarousel /> */}

            {/* self caring with picture */}
            <Card className="firstCard mb-5">
                <CardBody>
                    <CardTitle className="mb-5">
                        <h2 className="cardTitle">How to prevent becoming diabetic</h2>
                    </CardTitle>
                    <ul className="list p-0">
                        {preWay.map((prevention) => {
                            const image = prevention.img
                            return (
                                <li className="list-item d-inline-flex col-md-6" key={prevention.title}>
                                    <div className="list-content">
                                        <span className="cardTitle2">{prevention.title}</span>
                                        <img class="preventionImage" src={image} alt={prevention.title} />
                                        <br></br>
                                        <br></br>
                                        <p className='text-left mainContentTextBlack'>{prevention.description}</p>
                                        <br></br>
                                        <br></br>
                                    </div>
                                </li>
                            )
                        })
                        }
                    </ul>
                </CardBody>
            </Card>

        </Container>
    );
};

export default Resource;