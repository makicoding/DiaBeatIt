import React from 'react'
import {
    Card, CardText, CardBody, Container, CardTitle,
} from 'reactstrap';
import ImgCarousel from './ImgCarousel';
import ImgCarousel1 from './ImgCarousel1';
import { diaTypes, preWay, Symptoms } from './diabitiesData';
// import { types } from '@babel/core';

const Resource = (props) => {
    return (
        <Container>
            {/* introduction card */}
            <Card className="firstCard mb-5">
                <CardBody>
                    <CardTitle className='cardTitle mb-4'>
                        <h2>What is diabetes?</h2>
                    </CardTitle>
                    <ImgCarousel1 />
                    <CardText className="text-left mt-4">Diabetes is the condition in which the body does not properly process food for use as energy.
                    Most of the food we eat is turned into glucose, or sugar, for our bodies to use for energy. The
                    pancreas, an organ that lies near the stomach, makes a hormone called insulin to help
                    glucose get into the cells of our bodies. When you have diabetes, your body either doesn't
                    make enough insulin or can't use its own insulin as well as it should. This causes sugars to
                    build up in your blood. This is why many people refer to diabetes as “sugar.”
                    Diabetes can cause serious health complications including heart disease, blindness, kidney
                    failure, and lower-extremity amputations. Diabetes is the seventh leading cause of death in
                    the United States.
                    </CardText>
                </CardBody>
            </Card>
            {/* symptoms of diabites */}
            <CardTitle className="">
                <h2 className="cardTitle">Symptoms of diabetes</h2>
            </CardTitle>
            <ul className="list  Types">
                {Symptoms.map((sym) => {
                    return (
                        <li className="list-item justify-content-center d-inline-flex col-lg-4 col-md-12 mb-4" key={sym.symptom}>
                            <div className="list-content">
                                <img className="rounded-circle"
                                    src={sym.img}
                                    style={{ width: "60%", }}
                                    alt={sym.symptom} />
                                <h5>{sym.symptom}</h5>
                            </div>
                        </li>
                    )
                })
                }
            </ul>

            {/* types of diabities */}
            {diaTypes.map((dataType) => {
                return (
                    <Card className="mt-5 Types" key={dataType.header}>
                        <CardTitle className="cardTitle">
                            <h2>{dataType.header}</h2>
                        </CardTitle>
                        <CardText className="text-left p-4">
                            {dataType.discription}
                        </CardText>
                    </Card>
                )
            })}
            {/* care image carousel */}
            <ImgCarousel />
            {/* self caring with picture */}
            <div className="mt-5">
                <CardTitle className="mb-5">
                    <h2 className="cardTitle">Taking Care of Your Diabetes </h2>
                </CardTitle>
                <ul className="list p-0">
                    {preWay.map((prevention) => {
                        const image = prevention.img
                        return (
                            <li className="list-item d-inline-flex col-lg-6 col-md-12 cardTitle2" key={prevention.title}>
                                <div className="list-content">
                                    <h4>{prevention.title}</h4>
                                    <img src={image} style={{ width: "100%" }} alt={prevention.title} />
                                    <p className='text-left'>{prevention.discription}</p>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            {/* medication */}

        </Container>
    );
};

export default Resource;