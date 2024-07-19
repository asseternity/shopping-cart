import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockProduct = {
  title: 'productName',
  description: 'mock product description',
  price: 10,
};

describe('Card', () => {
  it('renders product title', () => {
    render(<Card product={mockProduct} addToCartMethod={vi.fn()} />);
    expect(screen.getByRole('heading').textContent).toMatch(mockProduct.title);
  });

  it('renders product description', () => {
    render(<Card product={mockProduct} addToCartMethod={vi.fn()} />);
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  it('renders product price', () => {
    render(<Card product={mockProduct} addToCartMethod={vi.fn()} />);
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
  });
});
