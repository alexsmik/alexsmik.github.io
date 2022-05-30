import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'
import propTypes from 'prop-types'
// components:
import { Avatar, Range, Title, Descr } from '../resume/UI/'

// icons:
import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg'
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg'
import { ReactComponent as RegionIcon } from '../../assets/icons/region.svg'
import {Route} from "react-router";
import {Link} from "react-router-dom";


const Wrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  box-shadow: 0 3px 0 #ddd;
  border-radius: 5px;
`
const WrapBlur = styled.div`
  color: #606060;
`
const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 0rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: -3rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`
const BreakLine = styled.hr`
  width: 100%; 
  height: 1px; 
  background: #fff;
  margin: 0.5rem 0rem;
`
const BoldLine = styled.hr`
  width: 100%; 
  height: 2px; 
  background: #bababa;
  margin: 0rem 0rem;
  border: #efefef 3px solid;
`
const DataExp = styled.b`
  float:right;
  margin: 0rem 0.1rem 0rem 0rem;
  background-color: white;
  box-shadow: 0 1px 0 #ddd;
  border-radius: 1px;
`
const Resume = () => {
  const [skillsCounter, setSkillsCounter] = useState(1)
  const [worksCounter, setWorksCounter] = useState(1)

  const componentRef = useRef()
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className='ui-wrapper' id='resume'>
      <a href="https://alexsmik.github.io">MY !!! Github</a>
      <div className='ui-content-wrapper'>
        <a href="https://alexsmik.github.io">MY !!! Github</a>
        <Wrapper>
          <a href="https://alexsmik.github.io">MY !!! Github</a>
          <Header onClick={handlePrintClick} />
          <div className='ui-container' ref={componentRef}>
            <Row itemsCenter>
              <a href="https://alexsmik.github.io">MY !!! Github</a>
              {/*<Sidebar>*/}
              {/*  <Avatar />*/}
              {/*</Sidebar>*/}
              <Content>
                <a href="https://alexsmik.github.io">MY !!! Github</a>
                <Title>RU Alexander Sergeevich Mikirtychev</Title>
                <Descr>
                  Efficient web developer with 10+ years experience, dedicated to developing and optimising interactive, user-friendly, and feature-rich
                  websites. Analytical skills and strong atention to detail. Provide technical knowledge and expertise, build new websites from start to finish,
                  and successfully colaborated with project managers and creative teams. Seeking to further improve ReactJS skills as the future ful stack
                  developer.
                  <BreakLine/>
                  <a href="https://alexsmik.github.io">MY !!! Github</a>
                  <a>• GitHub</a><a> • LinkedIn</a><a> • Codewars</a><a> • Portfolio</a>
                  <Link to={{ pathname: "https://alexsmik.github.io" }} target="_blank"> • WebSite</Link>
                  <a href="https://alexsmik.github.io">MY !!! Github</a>
                  {/*!!!! Why <a href="https://alexsmik.github.io">MY !!! Github</a> link don't work !!!!*/}
                </Descr>
                <a href="https://alexsmik.github.io">MY !!! Github</a>
              </Content>

            </Row>
            <Row>
              <Content>
                {/*<Title size='3' isUppercase>*/}
                {/*  Education:*/}
                {/*</Title>*/}
                {/*<Descr>Stanford University - BS Electrical Engineering</Descr>*/}
                <Title size='3' isUppercase>Work experience:</Title>
                <Descr>
                  <b>Entrepreneur</b> <DataExp>08/2010 - по настоящее время</DataExp>
                  <br/>Web Developer<br/>
                  • Developed client websites.
                  • Created UX and UI design.
                  • Managed a team of 6 freelance.
                  • Project management.
                  • Conducted market research and analysis.
                  <BoldLine/>
                </Descr>
                <Descr>
                  <b>Printing house “Agropack”</b> <DataExp>10/2006 - 08/2010</DataExp>
                  <br/>Graphic Designer<br/>
                  • Created a high volume of layout, graphic, and production design.
                  • Developed projects - brochures, catalogs, presentations, sites.
                  • Frequently integrated photographic, typographic, and design elements.
                  • Used inDesign, Ilustrator, Photoshop daily to produce.
                  <BoldLine/>
                </Descr>
                <Descr>
                  <b>Some were else Were</b> <DataExp>10/2005 - 08/2006</DataExp>
                  <br/>Developer<br/>
                  • Created a high volume of layout, graphic, and production design.
                  • Developed projects - brochures, catalogs, presentations, sites.
                </Descr>
                <Descr>
                  Solutions Architect, Stripe.
                </Descr>
              </Content>

              <Sidebar>
                <WrapBlur>
                <Title size='3' isUppercase>
                  Full-Stack Developer
                </Title>
                <Descr isPrimary>
                  <RegionIcon style={{ marginRight: '0.6rem', width: '1rem', opacity: '0.5' }} />
                  г. Москва, Россия<br/>
                  <MailIcon style={{ marginRight: '0.6rem' }} />
                  alexsmik@yandex.ru<br/>
                  <PhoneIcon style={{ marginRight: '0.6rem' }} />
                  +7 (985) 006 13 74
                </Descr>
                <Title size='3' isUppercase>Skills:</Title>
                <Descr>
                  JavaScript (ES5/ES6), PHP
                  <br/>HTML, CSS, Sass
                  <br/>React, Express, Bootstrap
                  <br/>NodeJS, SQL, NoSql
                </Descr>
                </WrapBlur>
              </Sidebar>
            </Row>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  )
}
const Header = ({ onClick }) => {
  return (
    <header className='Header'>
      <div className='ui-container'>
        <div className='Header_content'>
          <span className='Header_logo'>Резюме</span>
          <button className='ui-button isLink' onClick={onClick}>
            <PrintIcon style={{ marginRight: '0.6rem' }} />
            Распечатать
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  onClick: propTypes.func,
}

Header.defaultProps = {
  onClick: () => {},
}
const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='ui-container'>
        <a
          className='ui-link'
          href='https://github.com/alexsmik/'
          target='_blank'
        >
          Github
        </a>
      </div>
    </footer>
  )
};

export default Resume;
