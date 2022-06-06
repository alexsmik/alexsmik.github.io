import React, {useRef, useState} from 'react';
import styled from 'styled-components';
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
const ExtLinks = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`
const ELink = styled.a`
  margin: 0 1rem;
  border-bottom: #303e49 solid 1px;
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
      <div className='ui-content-wrapper'>
        <Wrapper>
          <Header onClick={handlePrintClick} />
          <div className='ui-container' ref={componentRef}>
            <Row itemsCenter>
              <Content>
                {/*<Title className='ui-title-1'>Alexander Sergeevich Mikirtychev</Title>*/}
                <Title className='ui-title-1'>Александр Сергеевич Микиртычев</Title>
                <Descr>
                  Разработчик с опытом работы более десяти лет.
                  Реализация проектов как, полноценная разработка интернет ресурсов, оптимизация процессов,
                  дружественный дизайн интерфейсов, и широкий функционал для сайтов. Аналитический подход к работе и внимательность
                  к деталям. Проведение технических экспертиз от начала до завершения.
                  Успешное сотрудничество с менеджерами проектов и креативными командами. В поиске дальнейшего улучшения навыков,
                  и развития способностей в области интернет решений.
                  {/*Efficient web developer with 10+ years experience, dedicated to developing and optimising interactive, user-friendly, and feature-rich*/}
                  {/*websites. Analytical skills and strong atention to detail. Provide technical knowledge and expertise, build new websites from start to finish,*/}
                  {/*and successfully colaborated with project managers and creative teams. Seeking to further improve ReactJS skills as the future ful stack*/}
                  {/*developer.*/}
                  <BreakLine/>
                </Descr>
                <ExtLinks>
                  {/*WebSite: alexsmik.github.io*/}
                  <ELink><a href="https://alexsmik.github.io" target="_blank">Портфолио: alexsmik.github.io</a></ELink>•
                  {/*Github page*/}
                  <ELink><a href="https://github.com/alexsmik" target="_blank">Github</a></ELink>•
                  <ELink><a href="https://www.fl.ru/users/smik/" target="_blank">Дополнительные работы: Free-Lance.ru</a>
                  </ELink>
                </ExtLinks>
              </Content>

            </Row>
            <Row>
              <Content>
                {/*<Title size='3' isUppercase>*/}
                {/*  Education:*/}
                {/*</Title>*/}
                {/*<Descr>Stanford University - BS Electrical Engineering</Descr>*/}
                {/*Work experience:*/}
                <Title size='3' isUppercase>Опыт работы:</Title>
                <Descr>
                  {/*<b>Entrepreneur</b> <DataExp>08/2010 - по настоящее время</DataExp>*/}
                  {/*<br/>Web Developer<br/>*/}
                  {/*• Developed client websites.*/}
                  {/*• Created UX and UI design.*/}
                  {/*• Managed a team of 6 freelance.*/}
                  {/*• Project management.*/}
                  {/*• Conducted market research and analysis.*/}
                  {/*<BoldLine/>*/}
                  <b>Индивидуальный предприниматель</b> <DataExp>08/2010 - по настоящее время</DataExp>
                  <br/><em><b>Разработчик</b></em><br/>
                  • Разработка сайтов.<br/>
                  • Дизайн графических элементов.<br/>
                  • Управление командой из шести фрилансеров.<br/>
                  • Управление проектами.<br/>
                  • Маркетинговое сопровождение и аналитика.<br/>
                  <BoldLine/>
                </Descr>
                <Descr>
                  <b>Рекламное агентство “Акцент”</b> <DataExp>09/2010 - 06/2012</DataExp>
                  <br/><em><b>Дизайнер</b></em><br/>
                  • Дизайн - брошюры, POS-материалов, каталоги, презентации, сайты.<br/>
                  • Интеграция фото материалов, технический дизайн, типография, логотипы.<br/>
                  • Программы: inDesign, Illustrator, Photoshop, CorelDRAW.<br/>
                  <BoldLine/>
                </Descr>
                <Descr>
                  {/*<b>Printing house “Agropack”</b> <DataExp>10/2006 - 08/2010</DataExp>*/}
                  {/*<br/><em><b>Graphic Designer</b></em><br/>*/}
                  {/*• Created a high volume of layout, graphic, and production design.</b>*/}
                  {/*• Developed projects - brochures, catalogs, presentations, sites.</b>*/}
                  {/*• Frequently integrated photographic, typographic, and design elements.</b>*/}
                  {/*• Used inDesign, Ilustrator, Photoshop daily to produce.</b>*/}
                  {/*<BoldLine/>*/}
                  <b>Типография “Агропак”</b> <DataExp>10/2006 - 08/2010</DataExp>
                  <br/><em><b>Графический дизайнер</b></em><br/>
                  • Создание макетов, графика, дизайн.<br/>
                  • Разработка - брошюры, POS-материалов, каталоги, презентации, сайты.<br/>
                  • Интеграция фото материалов, технический дизайн, типография, логотипы.<br/>
                  • Программы: inDesign, Illustrator, Photoshop, CorelDRAW.<br/>
                  <BoldLine/>
                </Descr>
              </Content>

              <Sidebar>
                <WrapBlur>
                  {/*<Title size='3' isUppercase>*/}
                  {/*  Full-Stack Developer*/}
                  {/*</Title>*/}
                  {/*<Descr isPrimary>*/}
                  {/*  <RegionIcon style={{ marginRight: '0.6rem', width: '1rem', opacity: '0.5' }} />*/}
                  {/*  г. Москва, Россия<br/>*/}
                  {/*  <MailIcon style={{ marginRight: '0.6rem' }} />*/}
                  {/*  alexsmik@yandex.ru<br/>*/}
                  {/*  <PhoneIcon style={{ marginRight: '0.6rem' }} />*/}
                  {/*  +7 (985) 006 13 74*/}
                  {/*</Descr>*/}
                <Title size='3' isUppercase>
                  Разработчик
                </Title>
                <Descr isPrimary>
                  <RegionIcon style={{ marginRight: '0.6rem', width: '1rem', opacity: '0.5' }} />
                  г. Москва, Россия<br/>
                  <MailIcon style={{ marginRight: '0.6rem' }} />
                  alexsmik@yandex.ru<br/>
                  <PhoneIcon style={{ marginRight: '0.6rem' }} />
                  +7 (985) 006 13 74
                </Descr>
                  <Title size='3' isUppercase>Образование:</Title>
                  <Descr>
                    Машиностроительный техникум.<br/>
                    Программист.<br/>
                    1996-1998
                  </Descr>
                  <Title size='3' isUppercase>Сертификаты:</Title>
                  <Descr>
                    Конфигурирование и администрирование в<br/>
                    системе "1С:Предприятие 8.3"<br/>
                    <hr/>
                    Ведение бухгалтерского учета в программе<br/>
                    "1С:Бухгалтерия 8"
                  </Descr>
                  {/*Skills*/}
                <Title size='3' isUppercase>Навыки:</Title>
                <Descr>JavaScript (ES5/ES6), PHP
                  <br/>HTML, CSS, Sass
                  <br/>React, Express, Bootstrap
                  <br/>NodeJS, SQL, NoSql
                  <br/>Дизайн, верстка
                </Descr>
                  <Title size='3' isUppercase>Языки:</Title>
                  <Descr>Русский<br/>Английский</Descr>
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
const HeaderWrapper = styled.b`
  margin: 0rem 0.1rem 0rem 0rem;
  text-align: end;
`
const HeaderLinkWrapper = styled.b`
  margin: 0rem -1rem;
`
const Header = ({ onClick }) => {
  return (
    <header>
      <HeaderWrapper>
      <div className='ui-container'>
        <HeaderLinkWrapper>
        <a
            className='ui-button isLink'
            href='https://alexsmik.github.io/public/alexsmik.pdf'
            target='_blank'
        >
          Скачать pdf
        </a>
        </HeaderLinkWrapper>
          <button className='ui-button isLink' onClick={onClick}>
            <PrintIcon style={{ marginRight: '0.6rem'}} />
            Распечатать
          </button>
      </div>
      </HeaderWrapper>
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
      {/*<div className='ui-container'>*/}
      {/*  <a*/}
      {/*    className='ui-link'*/}
      {/*    href='https://github.com/alexsmik/'*/}
      {/*    target='_blank'*/}
      {/*  >*/}
      {/*    Github*/}
      {/*  </a>*/}
      {/*</div>*/}
    </footer>
  )
};

export default Resume;
