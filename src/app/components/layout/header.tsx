import React from 'react';
import TerminalLogo from './TerminalLogo';

const Header = () => {
    return (
        <header className="w-full">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex h-16 items-center justify-between">
                    
                    {/* Left Side LOGO */}
                    <TerminalLogo />
                    
                    
                    <nav>
                        ...
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
