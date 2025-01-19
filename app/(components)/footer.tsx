import React from 'react'

function Footer() {
    
    return (
        <div className="py-6 flex flex-col">
            © Vittorio Morellini - Next.js app router - {new Date().getFullYear()}
        </div>            
    )
}

export default Footer;