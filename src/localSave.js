const localSave = (key, value)=>{
    localStorage.setItem(key, JSON.stringify(value));
}

export default localSave;