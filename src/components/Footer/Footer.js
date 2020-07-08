import React from 'react'
import './styles.scss';

const Footer = props => {
    return (
        <footer className="footer" data-test="footer"> 
            <div className="wrap" data-test="copyright">
                &copy; Guilt free
            </div>
        </footer>
    )
}

export default Footer
