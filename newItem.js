function newItem(url){
    let item = newImage(url)
    item.addEventListener('dblclick', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}