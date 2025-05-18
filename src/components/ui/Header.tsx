import {Button, NavItem, BurgerButton, AuthLink} from '@/components/ui';
import Link from "next/link";
import Image from "next/image";

// Logo
import Logo from "@/assets/images/logo.svg";
// Icons
import Search from "@/assets/images/icons/search.svg";
import Bag from "@/assets/images/icons/bag.svg";
import User from "@/assets/images/icons/user.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__body container">
                <div className="header__body-inner">
                    <Link href="/" className="header__logo logo">
                        <Image
                            className="logo__image"
                            src={Logo}
                            alt="Logo"
                            quality={100}
                            priority
                            width="56" height="63"
                        />
                    </Link>
                    <div className="header__overlay">
                        <nav className="header__menu">
                            <ul className="header__menu-list">
                                <NavItem href="/" name="Home"/>
                                <NavItem href="/products" name="Products"/>
                                <NavItem href="/blog" name="Blog"/>
                                <NavItem href="/faq" name="FAQ"/>
                                <NavItem href="/contact-us" name="Contact Us"/>
                            </ul>
                        </nav>
                        <div className="header__overlay-buttons">
                            <Button imageSrc={Search} className="header__button" aria-label="Search"/>
                            <Button imageSrc={Bag} className="header__button" aria-label="Bag"/>
                            {null === "" ? (
                                <Button imageSrc={User} className="header__button" aria-label="User"/>

                            ) : (
                                <AuthLink/>
                            )}

                        </div>
                    </div>
                    <BurgerButton/>
                </div>
            </div>
        </header>
    )
}

export default Header;