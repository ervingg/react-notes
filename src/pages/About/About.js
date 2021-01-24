import classes from './About.module.scss';
import authorAvatar from '../../images/ervin.jpg'

export const About = () => {
   return (
      <>
         <h1 className="mb-4 text-center">Project author</h1>
         <div className={`jumbotron ${classes.About}`}>
            <div className="info row">
               <img src={authorAvatar} alt="Author" className="col-xl-3 rounded" />
               <div className="col-xl-9 info">
                  <h2>
                     Khamoido Ervin &nbsp; 
                     <span className="badge badge-primary">Full-stack developer</span>
                  </h2>
                  
                  <ul className='list'>
                     <li className="list-item">
                        <strong>Location: </strong>
                        Kyiv, Ukraine
                     </li>
                     <li className="list-item">
                        <strong>Email: </strong>
                        <a href="mailto:hamoydoerik@gmail.com">hamoydoerik@gmail.com</a>
                     </li>
                     <li className="list-item">
                        <strong>Phone: </strong>
                        <a href="tel:+380507603161">+380507603161</a>
                     </li>
                     <li className="list-item">
                        <strong>LinkedIn: </strong>
                        <a href="https://www.linkedin.com/in/ervin-khamoido-b67700188/" target="_blank" rel="noreferrer">/ervin-khamoido-b67700188</a>
                     </li>
                     <li className="list-item">
                        <strong>Telegram: </strong>
                        <a href="t.me/ervingg" target="_blank" rel="noreferrer">t.me/ervingg</a>
                     </li>
                     <li className="list-item">
                        <strong>Skills: </strong>
                        <span className="badge badge-primary ml-1">HTML5</span>
                        <span className="badge badge-primary ml-1">Pug</span>
                        <span className="badge badge-primary ml-1">CSS3</span>
                        <span className="badge badge-primary ml-1">SASS/SCSS</span>
                        <span className="badge badge-primary ml-1">LESS</span>
                        <span className="badge badge-primary ml-1">Bootstrap</span>
                        <span className="badge badge-primary ml-1">Materialize</span>
                        <span className="badge badge-primary ml-1">JavaScript</span>
                        <span className="badge badge-primary ml-1">jQuery</span>
                        <span className="badge badge-primary ml-1">React</span>
                        <span className="badge badge-primary ml-1">Redux</span>
                        <span className="badge badge-primary ml-1">Gulp</span>
                        <span className="badge badge-primary ml-1">Webpack</span>
                        <span className="badge badge-primary ml-1">Git</span>
                        <span className="badge badge-primary ml-1">Markdown</span>
                     </li>
                     <li className="list-item">
                        <strong>I'm currently studying: </strong>
                        <span className="badge badge-primary ml-1">Jest</span>
                        <span className="badge badge-primary ml-1">Lodash</span>
                        <span className="badge badge-primary ml-1">TypeScript</span>
                        <span className="badge badge-primary ml-1">NodeJS</span>
                        <span className="badge badge-primary ml-1">ExpressJS</span>
                        <span className="badge badge-primary ml-1">MySQL</span>
                        <span className="badge badge-primary ml-1">MongoDB</span>
                        <span className="badge badge-primary ml-1">GraghQL</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}