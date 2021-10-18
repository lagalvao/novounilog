import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '.';

describe('<Button />', () => {
    it('Should show component with Confirm text', () => {
        render(<Button>Confirmar</Button>);

        const btnTitle = screen.getByText('Confirmar');

        expect(btnTitle).toBeInTheDocument();
    });
});