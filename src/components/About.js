
import './../App.css'; // Tell webpack that Button.js uses these styles
import Image from './Image';

// import logo from './../logo.svg';
// import './../../public/';
function About() {
    return (
        <section className="About" id='About'>
            <div className='row'>
                <div className='container'>
                    <div class="leftpane large-4-12">
                        <Image/>
                    </div>
                    <div class="rightpane">
                        <h1>About me.</h1>
                        <p>Hello, I am Shubham Agrawal, a software engineer from Bangalore, India. </p>
                        <p>I am currently working as a Backend Engineer with amazing young guns @ <a href='https://okcredit.in/' target='_blank' rel='noopener'>OkCredit.</a> </p>
                        <br/>
                        <p>Playing Cricket is close to my heart. It doesn't mean I don't play other games. I can spend quality times playing Badminton and Carrom too.</p>
                        <p>I am fond of watching web series. Check out some of <a href='https://www.imdb.com/india/bharitya-web-series-tv/ls085448137/' target='_blank' rel='noopener'>my favourites.</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
export default About;