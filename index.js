
let subscribers = 0;

const headSelector = $('#head')
const tavernImage = $('#tavern-image')
const tavernWrapper = $('#tavern-wrapper')

$('#subscribers')[0].innerHTML = subscribers

let angle = 0;
let stepAngle = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
        '-moz-transform' : 'rotate('+ degrees +'deg)',
        '-ms-transform' : 'rotate('+ degrees +'deg)',
        'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

const characters = {
    vampire : {
        url : 'https://cdn.discordapp.com/attachments/593498694918078476/816402938443989032/drakula.gif',
        speedmin : 16000,
        speedmax : 19000
    },
    mumia : {
        url : 'https://cdn.discordapp.com/attachments/320600301700775936/816357098828595200/mumia.gif',
        speedmin : 10000,
        speedmax : 15000
    },
    zombie : {
        url : 'https://cdn.discordapp.com/attachments/593498694918078476/816600525323501588/zombie.gif',
        speedmin : 20000,
        speedmax : 25000
    }
}

const spawnSubscriber = _ => {
    let subscriberDiv = document.createElement("img")
    let character = characters[Object.keys(characters)[Math.floor(Math.random() * Object.keys(characters).length)]]
    subscriberDiv.src = character.url
    subscriberDiv.id = `subscriber-${subscribers}`
    subscriberDiv.draggable = false
    subscriberDiv.style.display = 'block'
    subscriberDiv.style.position = 'absolute'
    subscriberDiv.style.gridArea = '1/1'
    subscriberDiv.style.width = '5%'
    if((clickCounter % 10 === 0)) {
        tavernWrapper.append(subscriberDiv)
        let selector = $(`#${subscriberDiv.id}`)
        setTimeout(_=> {
            selector.animate({
                top: subscriberDiv.offsetTop + tavernWrapper.height() - subscriberDiv.offsetHeight-(tavernWrapper.height()/100)*1,
            },300)
        },100)
        setTimeout(_=> {
            setTimeout(_=> {
                selector.animate({
                    left: subscriberDiv.offsetLeft + tavernWrapper.width() - subscriberDiv.offsetHeight-(tavernWrapper.width()/100)*13,
                },Math.floor(character.speedmin + Math.random() * (character.speedmax + 1 - character.speedmax)), _ => {
                    selector.hide(300, _=> {
                        selector.remove()
                    })
                })
            },100)
        },100)
    }
}


headSelector.attr('src','https://cdn.discordapp.com/attachments/593498694918078476/816253797264785459/lol.png')
tavernImage.attr('src','https://cdn.discordapp.com/attachments/593498694918078476/816312725285371984/tavern_bg_2_00000.png')

let animationFlag = false
let clickCounter = 0
let speedFlag = false

headSelector.click(_ => {
    clickCounter++;
    let clicks = clickCounter
    speedFlag = true;
    subscribers ++
    if(stepAngle < 2) {
        stepAngle += 0.05
    }
    $('#subscribers')[0].innerHTML = subscribers
    setTimeout(_=> {
        if(clicks === clickCounter) {
            speedFlag = false;
        }
    },500)
})

headSelector.click(_ => {
    if(!animationFlag) {
        animationFlag = true
        headSelector.animate({
            width: '30%'
        }, 200, _ => {
            headSelector.animate({
                width: '25%'
            },200, _=> {
                animationFlag = false
            })
        }) ;
    }

})

headSelector.click(_ => {
    spawnSubscriber()
})

setInterval(() => {
    if(stepAngle > 0 && !speedFlag) {
        stepAngle -= 0.05;
    }
    if(stepAngle < 0) {
        stepAngle = 0;
    }
}, 100)

setInterval(() => {
    angle += stepAngle;
    headSelector.rotate(angle)
},1)

