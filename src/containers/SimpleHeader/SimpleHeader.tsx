import React from "react";
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

const SimpleHeader = () => {
    const handleBackPress = () => {
        window.history.back();
    };

    return (
        <header className="SimpleHeader">
            <div className="container">
                <div className="SimpleHeader-wrapper">
                    <div className="SimpleHeader-subtitle flex items-center">
                        <Button
                            iconName={EIconName.ArrowLeftShort}
                            iconColor={EIconColor.LYNCH}
                            styleType={EButtonStyleType.OUTER_SPACE}
                            onClick={handleBackPress}
                        />
                        Go Back
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SimpleHeader;
