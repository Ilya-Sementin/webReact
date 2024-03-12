export function MyButton(){

    const helloClick = () => {
        console.log("Лайк")
    };

    var n = 0;
    const plusNumber = () => {
        console.log("Число ", n++)
    };

    return(
        <>
            <h1>Мои Компонент Кнопки</h1>
            <div>
                <button onClick={helloClick}>Лайк!</button>
                <button onClick={plusNumber}>Плюс!</button>
            </div>
        </>
    )
}