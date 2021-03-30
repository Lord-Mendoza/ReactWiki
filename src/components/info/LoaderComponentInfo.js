import React, {Component} from 'react';
import '../../styling/ComponentStyling.css';
import {Carousel, Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Prism from "prismjs";

class LoaderComponentInfo extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>
                <h1 className="display-4" style={{textAlign: "center"}}>Loader Component</h1>

                <section data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                    <div style={{textAlign: "left", paddingLeft: 30}}>
                        <ol>
                            <li><a className="nav-link glossary" href="#demo"> Available Configurations </a></li>
                            <li><a className="nav-link glossary" href="#implementation">Sample Implementation</a></li>
                            <li><a className="nav-link glossary" href="#props">Props</a></li>
                        </ol>
                    </div>
                </section>

                {/*=======================================================
                   ====================== Next Section ===================
                   =======================================================*/}
                <section id={"demo"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}>  Available Configurations  </h3>

                    <Carousel pauseOnHover={true}>
                        <Carousel.Item>
                            <Image
                                src="./loader.gif"
                                alt="Code for rendering form"
                                style={{width: "50%"}}
                            />
                            <Carousel.Caption>
                                <h3>Default appearance</h3>
                                <p>This is how the LoaderComponent appears with inverted not being specified. </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image
                                src="./loaderInverted.gif"
                                alt="Code for rendering form"
                                style={{width: "50%"}}
                            />
                            <Carousel.Caption>
                                <h3><i>inverted</i> = false</h3>
                                <p>You can set the LoaderComponent to have a dark background.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>

                {/*=======================================================
                   ====================== Next Section ===================
                   =======================================================*/}
                <section id={"implementation"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Implementation </h3>

                    <section className={"codeSampleImplementation"}>
                        <pre className={"language-javascript"}>
                            <code>
                                {loaderSampleCode}
                            </code>
                        </pre>
                    </section>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"props"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Props </h3>

                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Required </h5>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> isLoading</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Determines if the content needs to be overlayed.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A boolean</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> content</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> The content to be overlayed.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> An object</dd>
                    </dl>

                    {/*====================== Additional Section ======================*/}

                    <hr width={"95%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional Customization </h5>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> loadingMessage</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> What message to appear at the center of the overlay.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A string</dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> inverted</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Whether to invert the background color of the overlay.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> true
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A boolean</dd>
                    </dl>

                </section>

                <ScrollUpButton showAtPosition={500}/>
            </div>
        );
    }
}

const loaderSampleCode = `<LoaderComponent
//Required Ones 
isLoading={this.state.isLoadingGrid}
content={gridComponentVariable}

//Optional Ones 
loadingMessage={"Loading..."}
inverted={false}
/>`

export default LoaderComponentInfo;
