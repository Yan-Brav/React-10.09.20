import React, { useState, useEffect } from 'react';
import {Route, useHistory} from 'react-router-dom'
import Header from './components/Header';
import StickersList from './components/StickersList';
import api from './api';
import Modal from './components/Modal';

const EMPTY_STICKER = {
    title: '',
    description: '',
    x: 10,
    y: 10,
};

function App() {
    const [stickers, setStickers] = useState([]);
    const [selectedSticker, setSelectedSticker] = useState(EMPTY_STICKER)
    const history = useHistory();

    useEffect(() => {
        api.get().then(({ data }) => setStickers(data));
    }, []);

    function addNewSticker(){
        setSelectedSticker(EMPTY_STICKER);
        openForm();
    }

    function editSticker(sticker){
        setSelectedSticker(sticker);
        openForm();
    }

    function openForm(){
        history.push('/form')
    }

    function saveSticker(sticker){
        sticker.id ? updateSticker(sticker) : createSticker(sticker);
    }

    function createSticker(sticker) {
        api.post('', sticker).then(({ data }) =>
            setStickers([...stickers, data])
        );
    }

    function updateSticker(sticker){
        changeSticker(sticker.id, sticker);
        sendSticker(sticker);
    }

    function deleteSticker(sticker) {
        api.delete(sticker.id).then(() => {
            setStickers(stickers.filter((el) => el !== sticker));
        });
    }

    function changeSticker(id, updatedData) {
        let sticker = stickers.find((el) => el.id === id);

        sticker = {
            ...sticker,
            ...updatedData,
        };

        const newStickers = stickers.map((el) =>
            el.id === sticker.id ? sticker : el
        );
        setStickers(newStickers);
    }

    function sendSticker(value){
        const sticker = (typeof value === "object") ? value : stickers.find(item => item.id == value);
        api.put(sticker.id, sticker);
    }

    return (
        <>
            <Header onAddClick={addNewSticker} />
            <StickersList
                stickers={stickers}
                onDelete={deleteSticker}
                onEdit={editSticker}
                onChange={changeSticker}
                onSave={sendSticker}
            />
            <Route path='/form'>
                <Modal sticker={selectedSticker} onSave={saveSticker} />
            </Route>
        </>
    );
}

export default App;
