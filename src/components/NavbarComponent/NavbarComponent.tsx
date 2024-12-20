import React, { useState, useContext } from "react";
import "./NavbarComponentStyles.css";
import { TfiAlignLeft } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { PiKeyBold } from "react-icons/pi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { HiLogin } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logohotel from  "../../assets/logohotel.png"
import logoletra from "../../assets/logoletras.png"


import { 
    NavbarSection, 
    LogoMenu, 
    LogoText, 
    IconsSection, 
    ListMenu, 
    MenuSection, 
    NavCopy, 
    NavFooter, 
    NavRights, 
    PersonButton, 
    PersonCard, 
    PersonEmail, 
    PersonImg, 
    PersonName, 
    UlMenu, 
    DashboardNav, 
    InputSearch,
    DashboardText,
    IconContainer
} from "./NavbarStyled";
import { NavLink } from "react-router-dom";
import { PopupUserComponent } from "../PopUpUserComponent/PopUpUserComponent";
import { AuthContext } from "../../context/AuthUserContext";

export const NavbarComponent: React.FC = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("AuthContext is not available");
    }

    const { state, logout, updateUser } = context;
    const [openMenu, setIsOpenMenu] = useState<boolean>(false);
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsOpenMenu(prev => !prev);
    };

    const handleEditUserClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleLogoutClick = () => {
        logout();
        navigate("/");
    };

    return (
        <>
            <NavbarSection>
                <IconsSection>
                <div>
                    <LogoMenu src={logohotel} alt="Logo" />
                    </div>
                    <div>
                    <LogoText src={logoletra} alt="trav" />
                    </div>
                </IconsSection>
                {openMenu &&  
                <MenuSection>
                    <UlMenu>
                        <NavLink to="/dashboard" className="dashboardlink list-link">
                            <ListMenu><MdDashboard className="menuicon"/>Dashboard</ListMenu>
                        </NavLink>
                        <NavLink to="/rooms" className="roomslink list-link">
                            <ListMenu><PiKeyBold className="menuicon"/>Rooms</ListMenu>
                        </NavLink>
                        <NavLink to="/booking" className="bookinlink list-link">
                            <ListMenu><LuCalendarCheck2 className="menuicon"/>Bookings</ListMenu>
                        </NavLink>
                        <NavLink to="/users" className="list-link">
                            <ListMenu><MdOutlinePersonOutline className="menuicon"/>Users</ListMenu>
                        </NavLink>
                        <NavLink to="/contact" className="list-link">
                            <ListMenu><MdContactPhone className="menuicon"/>Contact</ListMenu>
                        </NavLink>
                    </UlMenu>
                    <PersonCard>
                        <PersonImg src="src/assets/1.jpg" alt="Person" />
                        <PersonName>{state.name}</PersonName> 
                        <PersonEmail>{state.email}</PersonEmail>
                        <PersonButton onClick={handleEditUserClick}>Edit User</PersonButton>
                    </PersonCard>
                    
                    <NavFooter>
                        <NavCopy>Travl Hotel Admin Dashboard</NavCopy>
                        <NavRights>© 2024</NavRights>
                    </NavFooter>
                </MenuSection>}
                <IconContainer isOpen={openMenu} className="displaymenu" onClick={handleClick}>
                    <TfiAlignLeft className="menuicon" />
                </IconContainer>
                <IconContainer>
                    <IoIosSearch className="menuicon" />
                </IconContainer>
                <IconContainer>
                    <IoMdHeartEmpty className="menuicon" />
                </IconContainer>
                <IconContainer>
                    <MdOutlineMail className="menuicon" />
                </IconContainer>
                <IconContainer>
                    <TbMessage className="menuicon" />
                </IconContainer>
                <IconContainer>
                    <HiLogin className="menuicon" onClick={handleLogoutClick} />
                </IconContainer>
            </NavbarSection>
            {isPopupOpen && <PopupUserComponent onClose={handleClosePopup} isOpen={isPopupOpen} editUser={updateUser} user={state} />}
        </>
    );
};