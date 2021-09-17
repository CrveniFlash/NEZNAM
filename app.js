const buttons = document.querySelectorAll('.btn')
const products = document.querySelectorAll('.products')


buttons.forEach(function (button) {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        /* active button */
        buttons.forEach((button) => {
            button.classList.remove('active')
        })
        button.className = 'active'
    })
        products.forEach(product => {
            showProduct = button.textContent
            
            product.style.display = 'none'
            if (product.getAttribute('data-filter') == showProduct.toLowerCase() || showProduct == 'all'){
                product.style.display = 'block'
            }
        })
}) 