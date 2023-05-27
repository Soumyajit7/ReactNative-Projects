import { Pressable, Text, ViewStyle } from 'react-native';
import React from 'react';
import styles from '../Styles';

interface SquareProps {
    value: string | null;
    onSquareClick: () => void;
    style?: ViewStyle[];
    isWinner?: boolean;
}

export default function Square({ value, onSquareClick, style, isWinner }: SquareProps) {
    return (
        <>
            <Pressable style={[styles.square, ...(style || [])]} onPress={onSquareClick}>
                <Text style={[styles.squareTxt, isWinner && styles.winningSquare]}>{value}</Text>
            </Pressable>
        </>
    );
}
