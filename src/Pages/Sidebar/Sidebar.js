import React from 'react';
import "./Sidebar.css";
import sakib from '../../images/sakib.jpg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={sakib}
          alt=""
        />
        <p>
          Amazing Tours is leading tour operator of Bangladesh and we are member of BD TOUR and Tour Operators Association of Bangladesh (TOAB). We are not only for tour operator, our Established Software company, This company provide many product is travel related and others kinds of software. Amazing Tours provides inbound and outbound tour operate. Inbound tours provide experience guide, standard and any categorys hotel, best tours spot selection and your security.

        
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}