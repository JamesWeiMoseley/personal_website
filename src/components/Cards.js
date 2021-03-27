import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id='p' className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sudoku_pic.png'
              text='Sudoku GUI Interactive Game: the classic sudoku puzzle. The application is written 
              in python3 using pygames for the GUI.  The game has a number of built in unsolved sudoku 
              puzzles for you to try.  Try to finish it and click solve to finish an unsolved game.'
              label='Python3, Pygames'
              path='/sudoku/#s_top'
            />
            {/* </ul>
            <ul className='cards__items'> */}
            <CardItem
              src='images/narkman.png'
              text='Golf Academy Website: a golf website built for a Southern California Golf Academy.  
              The website is built using HTML5, CSS, Javascript, and noSQL.  All the pages are static
              and hosted by github.  Click here to go to the website and sign up 
              for lessons ;)'
              label='HTML5, CSS, Bootstrap, Javascript, noSQL'
              path='https://narkmangolf.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/minecraft.png'
              text='Bukkit Plugins: Plugins for Minecraft Java. It uses the 
              open source Bukkit API and works on any Spigot Server. It is written in Java 9 in the eclipse 
              IDE. All the files are complete and ready to be dragged into your own server as a JAR file. '
              label='Java SE 9, Bukkit, Spigot'
              path='/services'
            />
            {/* </ul>
            <ul className='cards__items'> */}
            <CardItem
              src='images/uqueue.jpeg'
              text='uQueue Hackathon Submission: A digital queuing application for small businesses.
              This is a submission for BeaverHacks Summer 2020 Hackathon'
              label='HandleBars, Node.js, Twilio, Javascript'
              path= 'https://github.com/computerHeads/beaverhacksSum20'
            />
            <CardItem
              src='images/IMG_5.jpeg'
              text='Snake Game: classic snake game using python and the turtle module'
              label='Python'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;