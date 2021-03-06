import React from 'react';
import Sticker from './Sticker';

function StickersList({ stickers, onDelete, onEdit,  onChange, onSave }) {
    return (
        <div style={stickersListStyle}>
            {stickers.map((sticker) => (
                <Sticker
                    key={sticker.id}
                    sticker={sticker}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onChange={onChange}
                    onSave={onSave}
                />
            ))}
        </div>
    );
}

const stickersListStyle = {
    height: '100%',
    backgroundColor: 'brown',
};

export default StickersList;
