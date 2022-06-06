import React, { useState } from "react";
import './gallerylightbox.css';
import people from './reviewdata';
import {FaChevronLeft, FaChevronRight, FaQuoteRight, FaWindowClose } from "react-icons/fa";

const GalleryLightBox = () => {
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [index, setIndex] = useState(0);

    const { name, job, image, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };
    const nextPerson = (e) => {
        e.stopPropagation();
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = (e) => {
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
    const hideLightBox = () => {setLightBoxDisplay(false);
    };
    return (
        <>
        <div className="gallery-list">
            {people.map((person) => {
                    const {id, image, name, text} = person;
                    return(
                    <div  key={id} >
                    <img
                        src={image}
                        className="image-card"
                        onClick={
                            () => showInBox( setIndex((person.id - 1)) )
                        }
                    />
                    {/*<h4 className='title'>{name}</h4>*/}
                    {/*<p className='info'>{text}</p>*/}
                    </div>
                        );
                    }
                )
            }
        </div>
            { lightboxDisplay ?
                    <div id="lightbox" onClick={hideLightBox}>
                        <button className='close-btn'><FaWindowClose /></button>
                        <article className='project-box' onClick={stopPropagation}>
                            <div className='img-container'>
                                <img src={image} alt={name} className='project-img' />
                                {/*<span className='quote-icon'><FaQuoteRight /></span>*/}
                            </div>
                            <h4 className='title'>{name}</h4>
                            <p className='job'>{job}</p>
                            <p className='info'>{text}</p>
                            <div className='button-container'>
                                <button className='prev-btn' onClick={prevPerson}>
                                    <FaChevronLeft />
                                </button>
                                <button className='next-btn' onClick={nextPerson}>
                                    <FaChevronRight />
                                </button>
                            </div>
                        </article>
                    </div>
                    : "" }
        </>
    );
}
export default GalleryLightBox;