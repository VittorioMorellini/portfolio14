import React from 'react'

function Footer() {
    
    return (
        <div className="py-6 flex flex-col">
            © Vittorio Morellini - Next.js 13 - {new Date().getFullYear()}
        </div>            
    )
}

export default Footer;