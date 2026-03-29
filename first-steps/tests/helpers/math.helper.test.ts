import { add, div, mul, sub } from './../../src/helpers/math.helper';
import { describe, expect, test } from 'vitest';


describe('Math Helper', () => {

    describe('add function', () => {
        test('should add two numbers correctly', () => {
            // Arrange
            const a = 5;
            const b = 3;
            const expected = 8;

            // Act
            const result = add(a, b);

            // Assert
            expect(result).toBe(expected);
        });

        test('should add negative numbers correctly', () => {
            // Arrange
            const a = -5;
            const b = -3;
            const expected = -8;

            // Act
            const result = add(a, b);

            // Assert
            expect(result).toBe(expected);
        });

        test('should add zero to a number correctly', () => {
            // Arrange
            const a = 5;
            const b = 0;
            const expected = 5;

            // Act
            const result = add(a, b);

            // Assert
            expect(result).toBe(expected);
        });

        test('should add decimal numbers correctly', () => {
            // Arrange
            const a = 5.5;
            const b = 3.2;
            const expected = 8.7;

            // Act
            const result = add(a, b);

            // Assert
            expect(result).toBe(expected);
        });

        test('should add a positive and a negative number correctly', () => {
            // Arrange
            const a = 5;
            const b = -3;
            const expected = 2;

            // Act
            const result = add(a, b);

            // Assert
            expect(result).toBe(expected);
        });

    });

    describe('sub function', () => {

        test('should subtract two numbers correctly', () => {
            // Arrange
            const a = 5;
            const b = 3;
            const expected = 2;

            // Act
            const result = sub(a, b);

            // Assert
            expect(result).toBe(expected);
        });

        test('should subtract negative numbers correctly', () => {
            // Arrange
            const a = -5;
            const b = -3;
            const expected = -2;

            // Act
            const result = sub(a, b);

            // Assert
            expect(result).toBe(expected);
        });
    });

    describe('mul function', () => {

        test('should multiply two numbers correctly', () => {
            // Arrange
            const a = 5;
            const b = 3;
            const expected = 15;

            // Act
            const result = mul(a, b);

            // Assert
            expect(result).toBe(expected);
        });

        test('should multiply negative numbers correctly', () => {
            // Arrange
            const a = -5;
            const b = -3;
            const expected = 15;
            // Act
            const result = mul(a, b);

            // Assert
            expect(result).toBe(expected);
        });

        test('should multiply zero to a number correctly', () => {
            // Arrange
            const a = 5;
            const b = 0;
            const expected = 0;

            // Act
            const result = mul(a, b);

            // Assert
            expect(result).toBe(expected);
        });

        test('should multiply decimal numbers correctly', () => {
            // Arrange
            const a = 5.5;
            const b = 3.2;
            const expected = 17.6;

            // Act
            const result = mul(a, b);

            // Assert
            expect(result).toBe(expected);
        });

    });

    describe('div function', () => {

        test('dividing a number by zero should return Infinity', () => {
            // Arrange
            const a = 5;
            const b = 0;
            const expected = Infinity;

            // Act
            const result = div(a, b);

            // Assert
            expect(result).toBe(expected);
        });

        test('should divide two numbers correctly', () => {
            // Arrange
            const a = 10;
            const b = 2;
            const expected = 5;

            // Act
            const result = div(a, b);

            // Assert
            expect(result).toBe(expected);
        });

    });


});