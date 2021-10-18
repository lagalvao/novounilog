import { InputHTMLAttributes, useCallback, useState } from "react";

import { Container } from "./styles";

type InputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);
    
    const handleNotInputFocus = useCallback(() => {
        setIsFocused(false);
    }, []);

    return (
        <Container isFocused={isFocused}>
            <input
                type="text"
                onFocus={handleInputFocus}
                onBlur={handleNotInputFocus}
                required
                {...rest}
            />
            <span>{label}</span>
        </Container>
    );
}

export default Input;