const mycolorCodeArray = init();
console.log(mycolorCodeArray + ' -> outside the function'); // ? I thought this line can have the return value from the  'return colorCodeArray' in the function. However, the function did not return anything? :( to line 42
    
const getColorSchemeBtn = document.getElementById("getColorSchemeBtn");
getColorSchemeBtn.addEventListener("click", init);

function init(){
    //button click
    const getColorSchemeBtn = document.getElementById("getColorSchemeBtn");
    //Array: all the five divs to show the color
    const colorShowBoxArray = document.getElementsByClassName("colorShowBox");
    //Array: all the five <p>s to show the color code
    const colorCodeBoxArray = document.getElementsByClassName("colorCodeBox");

    const colorSeed = document.getElementById("colorPicker").value.substring(1); //need to remove the first #
    console.log('---color seed: ' + colorSeed);
    const colorMode = document.getElementById("color-styles").value.toLowerCase();
    console.log('---color mode: ' + colorMode);

    const myColorUrl = `https://www.thecolorapi.com/scheme?hex=${colorSeed}&mode=${colorMode}&count=5`;
    console.log('---my url: ' + myColorUrl);
    
    let colorCodeArray =[];

    fetch(myColorUrl)
        .then( res => res.json())
            .then( data => {
                console.log('---success: get the data :)');
                //Array: five color hex value
                colorCodeArray = data.colors.map( item => item.hex.clean);
                console.log(colorCodeArray + ' -> in the fetch and the function');
                //go through div array and the hex value array
                for (let i=0; i<5; i++){
                    //update the div background color
                    colorShowBoxArray[i].style.backgroundColor = '#' + colorCodeArray[i];
                    //update the <p> w/ the hex code
                    colorCodeBoxArray[i].innerHTML = colorCodeArray[i];
                }
                console.log('---Rendered');
            })
            
    return colorCodeArray; // ; looks not working ? not return anything... Could u help me XD
}

