import React from 'react'
import './TodoPalette.css'

const Color = ({ color, active, onClick }) => {
    return (
        <div className={`color ${active && 'active'}`}
             style={{background: color}}
             onClick={onClick}
        >
        </div>
    )
}

const TodoPalette = ({colors, selected, onSelect}) => {
    const paletteItems = colors.map(
        (color, idx) =>
            <Color color={color} key={idx} active={selected===color} onClick={() => onSelect(color)}/>
    )
    return (
        <div className="palette">
            {paletteItems}
        </div>
    )
};

export default TodoPalette
