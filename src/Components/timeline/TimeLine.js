import React, {useState} from 'react';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
import "../gallery/gallerylightbox.css"
import {FaChevronLeft, FaChevronRight, FaWindowClose } from "react-icons/fa";
import {GiSpiderWeb} from "@react-icons/all-files/gi/GiSpiderWeb";
import {FiGithub} from "@react-icons/all-files/fi/FiGithub";

const TimeLine = () => {
    // from lightbox
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [index, setIndex] = useState(0);

    const { id, link, image, title, buttonText, date, description, icon } = timelineElements[index];

    const checkNumber = (number) => {
        if (number > timelineElements.length - 1) {
            return 0;
        }
        if (number < 0) {
            return timelineElements.length - 1;
        }
        return number;
    };
    const nextElement = (e) => {
        e.stopPropagation();
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevElement = (e) => {
        e.stopPropagation();
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    }
    //function to show a specific image in the lightbox, amd make lightbox visible
    const showInBox = () => {
        setLightBoxDisplay(true);
    };
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    // native timeline component
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    let webIconStyle, gitIconStyle = { background: "#fff" };
    return (
        <>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    // let {} = element;
                    let isWorkIcon = element.icon === "work";
                    let isGitIcon = element.icon === "git";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            // iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            // icon={isWorkIcon ?<WorkIcon /> : <SchoolIcon />}
                            iconStyle={webIconStyle}
                            icon={isGitIcon ? <FiGithub/> : <GiSpiderWeb/>}
                            id={element.link} // Link name for smooth-menu
                        >
                            {/*<h1>{element.id}</h1>*/}
                        <div className="element-content">
                            <img
                                src={element.image}
                                className="image-card"
                                onClick={
                                    () => showInBox( setIndex((element.id - 1)) )
                                }
                            />
                            <div>
                                <h2 className="vertical-timeline-element-title">
                                    {element.title}
                                </h2>
                                <p id="description">{element.description}</p>
                            </div>
                        </div>

                            {/*<h5 className="vertical-timeline-element-subtitle">*/}
                            {/*    {element.location}*/}
                            {/*</h5>*/}
                            {/*<p id="description">{element.description}</p>*/}
                            {/*{showButton */}
                            {/*    && (*/}
                            {/*        <a */}
                            {/*            className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}*/}
                            {/*            href="/">{element.buttonText}*/}
                            {/*        </a>*/}
                            {/*        )*/}
                            {/*}*/}


                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
            { lightboxDisplay ?
                <div id="lightbox" onClick={hideLightBox}>
                    <button className='close-btn'><FaWindowClose /></button>
                    <article className='project-box' onClick={stopPropagation}>
                        <div className='img-container'>
                            <img src={image} alt={title} className='project-img' />
                        </div>
                        <strong className='title'>{title}</strong>
                        <p className='info'>{description}</p>
                        <div className='button-container'>
                            <button className='prev-btn' onClick={prevElement}>
                                <FaChevronLeft />
                            </button>
                            <button className='next-btn' onClick={nextElement}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </article>
                </div>
                : "" }
        </>
    );
};

export default TimeLine;