import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Header.module.css';

function Header() {
    const navigate = useNavigate();

    const navItems = [
        { id: "start", label: "Inicio", icon: "start", route: "/" },
        { id: "about", label: "Acerca de", icon: "user", route: "/about" },
        { id: "projects", label: "Proyectos", icon: "project", route: "/projects" },
        { id: "education", label: "Educación", icon: "book", route: "/education" },
        { id: "certifications", label: "Certificaciones", icon: "certification", route: "/certifications" },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.headerSection1}></div>

            <nav className={styles.headerSection2} aria-label="Navegación principal">
                {navItems.map(({ id, label, icon, route }) => (
                    <div
                        key={id}
                        className={styles.subsectionHeader}
                        id={id}
                        onClick={() => route && navigate(route)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && route && navigate(route)}
                    >
                        <img
                            className={styles.iconSubSectionHeader}
                            src={`/images/icons/${icon}.png`}
                            alt={`Ícono de ${label}`}
                        />
                        <h5 className={styles.subsectionTitle}>{label}</h5>
                    </div>
                ))}
            </nav>

            <div className={styles.headerSection3}>
                <h5 className={styles.updatedDate}>Actualizado: Julio 19 de 2025</h5>
            </div>
        </header>
    );
}

export default Header;
