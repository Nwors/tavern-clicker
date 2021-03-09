
const tavernStaff = {}
const admins = {
    lena : {
        url: 'https://cdn.discordapp.com/attachments/593498694918078476/816615271686733894/0CG2b6NhrHc.jpg',
        sps: 0.1,
        cost: 30
    }
}
const leftMenuSelector = $('#left-menu')

const createAdminHirePanel = admin => {
    let wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add('menu-item')

    let imgPlaceholder = document.createElement('div')
    imgPlaceholder.style.gridArea = '1 / 1 / 3 / 3'
    imgPlaceholder.style.background = `url('${admin.url}') no-repeat center`
    imgPlaceholder.style.backgroundSize = `cover`
    imgPlaceholder.style.padding = '10px';
    let spsPlaceholder = document.createElement('div')
    spsPlaceholder.innerHTML = admin.sps
    spsPlaceholder.style.gridArea = '1 / 4 / 2 / 4'
    spsPlaceholder.style.placeSelf = 'center'
    let costPlaceholder = document.createElement('div')
    costPlaceholder.innerHTML = admin.cost
    costPlaceholder.style.gridArea = '2 / 4 / 3 / 4'
    costPlaceholder.style.placeSelf = 'center'
    let buyButton = document.createElement('button')
    buyButton.style.gridArea = '1 / 5 / 3 / 5 '
    buyButton.innerHTML = 'Hire'
    let spsText = document.createElement('div')
    spsText.style.gridArea = '1 / 3 / 2 / 3'
    spsText.innerHTML = 'SPS'
    spsText.style.placeSelf = 'center'
    let costText = document.createElement('div')
    costText.style.gridArea = '2 / 3 / 3 / 3'
    costText.innerHTML = 'COST'
    costText.style.placeSelf = 'center'

    wrapperDiv.append(imgPlaceholder,spsText,spsPlaceholder,costText,costPlaceholder,buyButton)
    leftMenuSelector.append(wrapperDiv)
}
createAdminHirePanel(admins.lena)



