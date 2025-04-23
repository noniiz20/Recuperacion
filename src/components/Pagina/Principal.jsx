import { FaUserDoctor } from "react-icons/fa6";
import './Pagina.css'
import Button from 'react-bootstrap/Button';
import Doctor from '../Imagenes/doctor.webp'
import Mia from '../Imagenes/Mia.avif'
import { FaHospital } from "react-icons/fa6";
import { CgAdd } from "react-icons/cg";
import './Pagina.css'
function Principal() {
    return (
        <>  
            <h1>Easy Steps And Get Your Solution</h1>
            <div className="pcont">
            <div className="Cont">
            <FaUserDoctor />
            <h6>Welcome to Easy Steps</h6>
            <p>lorem</p>
            </div>

            <div className="Cont">
            <FaUserDoctor />
            <h6>Welcome to Easy Steps</h6>
            <p>lorem</p>
            </div>

            <div className="Cont">
            <FaUserDoctor />
            <h6>Welcome to Easy Steps</h6>
            <p>lorem</p>
            </div>

            <div className="Cont">
            <FaUserDoctor />
            <h6>Welcome to Easy Steps</h6>
            <p>lorem</p>
            </div>
      </div>
      <div className="contL">
      <div className="ncont">
      <h2>Best Doctor Anywhere And Anytime</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem tempora dignissimos ipsum obcaecati nostrum quod itaque iusto possimus. Unde perferendis itaque quos quis at odit, vitae adipisci laboriosam odio eius.</p>
        <div className="btn">
      <Button variant="primary">Ayuda</Button>
        </div>
      </div>
      <div className="imgdc">
        <img src={Doctor} alt="" />
        </div>
        </div>

        <div className="contp">
      <div className="ncono">
      <h2>Urgent Online Care Solution Your Problem</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem tempora dignissimos ipsum obcaecati nostrum quod itaque iusto possimus. Unde perferendis itaque quos quis at odit, vitae adipisci laboriosam odio eius.</p>
        <div className="btno">
      <Button variant="primary">Quienes somos</Button>
        </div>
      </div>
      <div className="imgds">
        <img src={Mia} alt="" />
        </div>
        </div>
        <div className="contenedor">
          <div className="sub">
            <h2>What People Say About Us</h2>
          </div>
          <div className="cajas">
          <div className="conte">
            <FaHospital />
            <h3>Welcome to Easy Steps</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet dicta voluptatibus fuga reiciendis officiis </p>
            </div>

            <div className="conte">
            <FaHospital />
            <h3>Welcome to Easy Steps</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero accusamus ex fugit numquam eos, corrupti nobis </p>
            </div>
          </div>
          <div className="regis">
            <div className="txt">
            <h3>Want to register Easily?</h3>
            </div>
            <div className="bot">
            <Button variant="primary" size="lg" active>Primary button</Button>
            </div>
          </div>

        <div className="contenedorfo">
      <div className="footer">

        <div className="log">
        <div className="Contm">
          <div className="poque">
            <CgAdd />
            <h3>MediLop</h3>
            </div>
            <p>ljfnjdwekjyhkn</p>
            </div>
            <div className="icon-fo">
              <div className="sec-ico">
                <div className="icon">
                <CgAdd />
                <CgAdd />
                <CgAdd />
                <CgAdd />
                </div>
              </div>
            </div>

            
      </div>
      </div>

      

      <div className="section">
      <ul className="lkfoo">
        <h3>service</h3>
        <li><a href="#">Privacy polucy</a></li>
        <li><a href="#">Terms of service</a></li>
        <li><a href="#">contact us</a></li>
      </ul>
      </div>
      
      <div className="section">
      <ul className="lkfoo">
        <h3>facture</h3>
        <li><a href="#">Privacy polucy</a></li>
        <li><a href="#">Terms of service</a></li>
        <li><a href="#">contact us</a></li>
      </ul>
      </div>

      <div className="section">
      <ul className="lkfoo">
        <h3>legal</h3>
        <li><a href="#">Privacy polucy</a></li>
        <li><a href="#">Terms of service</a></li>
        <li><a href="#">contact us</a></li>
      </ul>
      </div>

      </div>

        </div>
        </>
        
    )
}

export default Principal;
