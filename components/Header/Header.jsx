import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='nav container'>
            <a href='#' className='nav__logo'>
                <i className='ri-leaf-line nav__logo-icon'>Flantex</i>
            </a>

            <div className='nav__menu'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href='#' className='nav__link'>Home</a>
                    </li>

                    <li className='nav__item'>
                        <a href='#' className='nav__link'>About</a>
                    </li>

                    <li className='nav__item'>
                        <a href='#' className='nav__link'>Products</a>
                    </li>

                    <li>
                        <a href='#' className='nav__link'>FAQs</a>
                    </li>

                    <li className='nav__item'>
                        <a href='' className='nav__link'>Contacts</a>
                    </li>
                </ul>

                <div className='nav__close'>
                    <i className='ri-close-line'></i>
                </div>

                <div className='nav__btns'>
                    {/* Theme change button */}
                    <i class='ri-moon-line change-theme' id='theme-button'></i>
                    <div class='nav__toggle' id='nav-toggle'>
                        <i class='ri-menu-line'></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header