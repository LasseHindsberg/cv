import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Avatar from '../images/Avatar.jpg'
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Profile() {

  return (
    <>
      <div className="profile">
        <div className="profile__imageContainer">
          <img
            className="profile__img"
            alt=""
            src={Avatar}
          />
        </div>

        {/* Socials*/}
        <div className="profile__alsoRead">
          <section>
            <h2>Socials</h2>
            <div className="profile__socials">
              <ul className="profile__socialsList">
                <li className="socialsItem">
                  <a
                    href="https://www.facebook.com/lasse-hindsberg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineFacebook />
                    <p>Facebook</p>
                  </a>
                  
                </li>
                <li className="socialsItem">
                  <a
                    href="https://github.com/LasseHindsberg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineGithub /> 
                    <p>Github</p>
                  </a>
                </li>
                <li className="socialsItem">
                  <a
                    href="https://www.linkedin.com/in/lasse-bruun-hindsberg/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLinkedin />
                    <p>LinkedIn</p>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* Skills Section */}
        <div className="profile__skills">
          <h4>Skills</h4>
          <p className="profile__skill">
            <Typography variant="body1" component="p">HTML</Typography>
            <Rating readOnly value={5}></Rating>
          </p>
          <p className="profile__skill">
            <Typography variant="inherit" component="p">CSS/SCSS</Typography>
            <Rating readOnly value={5}></Rating>
          </p>
          <p className="profile__skill">
            <Typography variant="inherit" component="p">JS</Typography>
            <Rating readOnly value={4}></Rating>
          </p>
          <p className="profile__skill">
            <Typography variant="inherit" component="p">JSReact</Typography>
            <Rating readOnly value={4}></Rating>
          </p>
          <p className="profile__skill">
            <Typography variant="inherit" component="p">CMS</Typography>
            <Rating readOnly value={3}></Rating>
          </p>
        </div>

        <div className="profile__aboutMeSection">
          <h4 className="profile__aboutMeHeader">
            Achievements &amp; Work Experience:
          </h4>
          <ul className="profile__aboutMeContent">
            <li>Brand Ambassador at HP</li>
            <li>Brand Ambassador at Dentsu X</li>
            <li>Service Worker at Kvickly</li>
            <li>Bartender at City Lounge</li>
          </ul>
          <ul>
            <li>Web Developer 2019-2021 &middot; RTS </li>
            <li>Math A / Programming B 2016-2018 &middot; RTS/HTX</li>
          </ul>
        </div>
        <div className="profile__aboutMeSection">
          <h4 className="profile__aboutMeHeader">Goals:</h4>
          <p className="profile__aboutMeContent">
            One day I aspire to own my own web development company. <br />
            I also wanna see a lot of the world in my life and travelling is one of my passions!
          </p>
        </div>
        <div className="profile__aboutMeSection">
          <h4 className="profile__aboutMeHeader">About Me:</h4>
          <p className="profile__aboutMeContent">
            I’m a fresh 20-year-old recently graduated Web Developer, which at this moment, is living at home with my parents in Jyllinge, however I’m available to move out if needed.
            I’m curious, imaginative and always helpful. In 2021 I learnt myself the basics of Next.JS, and I’m always ready to learn new tricks.
            In my day-to-day life, I’m good at having to multitask, and prioritizing my assignments after importance. I’m good at finding solutions to the issues I come across.
          </p>
          <p>
            In my free time I prioritize cooperation. I enjoy strategic board games and spending time playing video games that requires a bit more thinking than the average game
          </p>
        </div>
      </div>
    </>
  );
}
