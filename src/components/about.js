import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import pic from '../background-images/snow.jpg'


function About() {
  return (
    <div id="about" className='about'>
    <h2>About Me</h2>
        <img src={pic} alt="pic" className='photo'/>
    
      <p>Hello my name is James Moseley.  I am a student at Oregon State University set to graduate 
          Spring of 2022. I am a full stack engineer majoring in Computer Science. 
          I live in Renton, Washington.
      </p>

      <h3>My Skills</h3>
      <p>
          Languages: Java, Python, HTML, CSS, JavaScript, C, C++
      </p>
      <p>
      Tools: Linux, Git, node.js, Bootstrap, Bukkit, Eclipse, MySQL, NoSQL, React
      </p>

      <h3> My Interests</h3>
      <p>
      Golf , Star Wars ,  Dogs , Boba , 
      Traveling (currently planning for 2021 Hawaii trip – recommendations welcome!)</p>
      <p> and the Seattle Seahawks <i className='fas fa-football-ball'/>
      </p>

      <h3>My Links</h3>
      <br></br>
      <a className='pink' href='https://www.linkedin.com/in/james-moseley/'>
        LinkedIn <i className='fab fa-linkedin' />
      </a>
      <a className='pink' href="https://github.com/JamesWeiMoseley/Sudoku_Game_GUI">
                        Github <i className='fab fa-github'/>
                    </a>
      <a className='email'>Email: james.wei.moseley@gmail.com</a>
      </div>
  );
}

export default About;