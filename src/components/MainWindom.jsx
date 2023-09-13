import React from 'react'
import '../css/Windom.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';



const MainWindom = () => {

    return (
        <div className="block-flex">
            <div className="bacground_img"></div>
            <div className="second-flex">
                <div>
                    <h3 align="center"> Жестау тілін үйрету </h3>
                </div>
                <div className="lesson1">
                    <div>
                        <NavLink to="/lesson1" className="button19">Әліппе</NavLink>
                    </div>
                    <div>
                        <NavLink to="/lesson1" className="button19">Бірінші сабақ</NavLink>
                    </div>
                    <div>
                        <NavLink to="/lesson1" className="button19">Екінші сабақ</NavLink>
                    </div>
                    <div>
                        <NavLink to="/lesson1" className="button19">Үшінші сабақ</NavLink>
                    </div>
                    <div>
                        <NavLink to="/lesson1" className="button19">Төртінші сабақ</NavLink>
                    </div>
                </div>
            </div>
            <div className="bacground_img"></div>
        </div>

    )
}

export default MainWindom