import silvero from '../../images/portfolioimg/silvero.jpg';
import avto from '../../images/portfolioimg/avto.jpg';
import marfin from '../../images/portfolioimg/marfin.jpg';
import ekom from '../../images/portfolioimg/ekom.jpg';
import feniks from '../../images/portfolioimg/feniks.jpg';
import gitworks from '../../images/codepen.svg';

let timelineElements = [
  {
    id: 1,
    image: gitworks,
    link: "",
    title: "gitworks",
    description:
        "Converting data to a graphical interface",
    buttonText: "View Frontend Projects",
    date: "August 2016 - present",
    icon: "git",
  },
  {
    id: 2,
    image: avto,
    link: "resume",
    title: "avto",
    description:
      "Converting data to a graphical interface",
    buttonText: "View Frontend Projects",
    date: "August 2016 - present",
    icon: "web",
  },
  {
    id: 3,
    image: silvero,
    link: "resume",
    title: "silvero",
    description:
      "Creating the logic to make the web app function properly, ",
    buttonText: "View Backend Projects",
    date: "June 2013 - August 2016",
    icon: "web",
  },
  {
    id: 4,
    image: marfin,
    link: "resume",
    title: "marfin",
    description:
      "Assessing the quality of specifications",
    buttonText: "Company Website",
    date: "September 2011 - June 2013",
    icon: "web",
  },
  {
    id: 5,
    image: ekom,
    link: "ekom",
    title: "Oak Ridge College",
    description:
      "Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet,",
    buttonText: "Course Certificate",
    date: "September 2011",
    icon: "school",
  },
  {
    id: 6,
    image: feniks,
    link: "resume",
    title: "feniks Hawking College",
    description:
      "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    buttonText: "College Projects",
    date: "2007 - 2011",
    icon: "school",
  },
];

export default timelineElements;
