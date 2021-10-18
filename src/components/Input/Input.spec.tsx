import { render, screen } from '@testing-library/react';
import React from 'react';
import Input from '.';

describe('<Input />', () => {
    it('Must show component with user label', () => {
        render(<Input label="usuario" />);

        const labelText = screen.getByText('usuario');

        expect(labelText).toBeInTheDocument();
    });
});