import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="headerSection1"></div>

            <div className="headerSection2">
                <div className="subsectionHeader" data-redirect="start" id="start">
                    <img className="iconSubSectionHeader" src="/images/icons/start.png" />
                    <h5 className="subsectionTitle">Inicio</h5>
                </div>

                <div className="subsectionHeader" data-redirect="about" id="about">
                    <img className="iconSubSectionHeader" src="/images/icons/user.png" />
                    <h5 className="subsectionTitle">Acerca de</h5>
                </div>

                <div className="subsectionHeader" data-redirect="projects" id="projects">
                    <img className="iconSubSectionHeader" src="/images/icons/project.png" />
                    <h5 className="subsectionTitle">Proyectos</h5>
                </div>

                <div className="subsectionHeader" data-redirect="education" id="education">
                    <img className="iconSubSectionHeader" src="/images/icons/book.png" />
                    <h5 className="subsectionTitle">Educación</h5>
                </div>

                <div className="subsectionHeader" data-redirect="certifications" id="certifications">
                    <img className="iconSubSectionHeader" src="/images/icons/certification.png" />
                    <h5 className="subsectionTitle">Certificaciones</h5>
                </div>

                <div className="subsectionHeader" id="subsectionHeaderContact">
                    <img className="iconSubSectionHeader" src="/images/icons/phone.png" />
                    <h5 className="subsectionTitle">Contacto</h5>
                </div>
            </div>

            <div className="headerSection3">
                <h5 className="updatedDate">Actualizado: Marzo 13 de 2025</h5>
            </div>
        </header>
    );
}

export default Header;
