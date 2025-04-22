import { FaUserDoctor } from "react-icons/fa6";
import './Pagina.css'
import Button from 'react-bootstrap/Button';
import Doctor from '../Imagenes/doctor.webp'
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
      <div className="ncont">
      <h2>Best Doctor Anywhere And Anytime</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem tempora dignissimos ipsum obcaecati nostrum quod itaque iusto possimus. Unde perferendis itaque quos quis at odit, vitae adipisci laboriosam odio eius.</p>
        <div className="btn">
      <Button variant="primary">Primary</Button>
        </div>
      </div>
        <img src={Doctor} alt="" />
        </>
    )
}

export default Principal;
