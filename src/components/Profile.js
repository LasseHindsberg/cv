import { navigate } from '@reach/router';
import { useRef } from 'react';
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import LoadingBar from 'react-top-loading-bar';


export default function Profile() {
    var ref = useRef(null);

    return (
        <>
            <div className="profile">
                <LoadingBar
                    color="#F28585"
                    ref={ref}
                />
                <div className="profile__imageContainer">
                    <img className="profile__img" alt="" src='https://i.imgur.com/84Rqwbi.png' />
                </div>

                {/* mobile links thingies idk */}
                <div className="profile__alsoRead">
                    <h1>Check Out ...</h1>
                    <section>
                        <h2>Socials</h2>
                        <div className="profile__socials">
                        <ul className="profile__socialsList">
                            <li className="socialsItem"><a href="https://www.facebook.com/lasse-hindsberg" target="_blank" rel="noreferrer"><AiOutlineFacebook/></a></li>
                            <li className="socialsItem"><a href="https://github.com/LasseHindsberg" target="_blank" rel="noreferrer"><AiOutlineGithub/></a></li>
                            <li className="socialsItem"><a href="https://twitter.com/frostyy0w0" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a></li>
                        </ul>
                    </div>
                    </section>
                    <section>
                        <h2>My projects</h2>
                        <p>I've made multiple web applications.</p>
                        <button className="mobileBtn" onClick={() => {
                            ref.current.continuousStart(30);
                            setTimeout(() => {
                                console.log("...loading something");
                                ref.current.complete();
                            }, 100);
                            setTimeout(() => {
                                navigate("/projects")
                            }, 600);
                        }}>Read More</button>
                    </section>
                    <section>

                        <h2>My Blogposts</h2>
                        <p>Read my latest blog posts.</p>
                        <button className="mobileBtn" onClick={() => {
                            ref.current.continuousStart(30);
                            setTimeout(() => {
                                console.log("...loading something");
                                ref.current.complete();
                            }, 100);
                            setTimeout(() => {
                                navigate("/blog")
                            }, 600);
                        }}>Read More</button>
                    </section>
                </div>
                <div className="profile__skills">

                    <table>
                        <th>Skills</th>
                    </table>
                        
                    {/* <li className="profile__skill">
                        <Typography variant="inherit" component="p">Skill1</Typography>
                        <Rating readOnly value={1}></Rating>
                    </li>
                    <li className="profile__skill">
                        <Typography variant="inherit" component="p">Skill2</Typography>
                        <Rating readOnly value={2}></Rating>
                    </li>
                    <li className="profile__skill">
                        <Typography variant="inherit" component="p">Skill3</Typography>
                        <Rating readOnly value={3}></Rating>
                    </li>
                    <li className="profile__skill">
                        <Typography variant="inherit" component="p">Skill4</Typography>
                        <Rating readOnly value={4}></Rating>
                    </li>
                    <li className="profile__skill">
                        <Typography variant="inherit" component="p">Skill5</Typography>
                        <Rating readOnly value={5}></Rating>
                    </li> */}
                </div>

                <div className="profile__aboutMeSection">
                    <h4 className="profile__aboutMeHeader">Achievements &amp; Work Experience:</h4>
                    <ul className="profile__aboutMeContent">
                        <li>Brand Ambassador at HP</li>
                        <li>Brand Ambassador at Dentsu X</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="profile__aboutMeSection">
                    <h4 className="profile__aboutMeHeader">Goals:</h4>
                    <p className="profile__aboutMeContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum facere veritatis repudiandae maiores nihil quo! Omnis ipsam unde excepturi voluptas placeat animi quam optio, eius, voluptatum veniam accusantium quos quibusdam consequuntur beatae. Earum delectus possimus molestias perferendis a, ipsam atque vel aspernatur deleniti fuga laboriosam sint, dolor officiis. Voluptatem, id.</p>
                </div>
                <div className="profile__aboutMeSection">
                    <h4 className="profile__aboutMeHeader">Trivia:</h4>
                    <p className="profile__aboutMeContent">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nobis maxime qui esse deserunt. Natus autem nesciunt a sapiente fugit, consequatur placeat magnam harum corrupti similique est vero explicabo voluptatum sint voluptate? Inventore quod laborum officia accusantium dicta perspiciatis optio sint suscipit asperiores, nesciunt atque fugiat! Fugit delectus ipsum natus!</p>
                </div>
            </div>
        </>
    );
}