let plus_font = document.getElementById('plus-font');
let minus_font = document.getElementById('minus-font');

function changeFont(value)
{
    let arrayOfElements = ["h1", "h2", "h3", "h4", "h5", "span", "label", "p", "li"];
    for (let j = 0; j < arrayOfElements.length; j++)
    {
        let toChange = document.getElementsByTagName(arrayOfElements[j].toString());

        for (let i = 0; i < toChange.length; i++)
        {
            let actualFontSize = window.getComputedStyle(toChange[i], null).getPropertyValue('font-size');
            let newFontSize = parseFloat(actualFontSize) + parseInt(value);
            toChange[i].style.fontSize = newFontSize+"px";
        }
    }
}

plus_font.addEventListener('click', function(){changeFont(2)});
minus_font.addEventListener('click', function(){changeFont(-2)});