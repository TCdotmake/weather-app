const localLoad = (key)=>{
    const obj = JSON.parse(localStorage.getItem(key));
    return obj
}
export default localLoad;