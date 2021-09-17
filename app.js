
const buttons = document.querySelectorAll('.btn')
const products = document.querySelectorAll('.products')


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        buttons.forEach((button) => {
            button.classList.remove('active')
        })
        button.classList.add('active')

        let targetBtn = e.target.textContent.toLowerCase()
        if (targetBtn === 'all'){
            products.forEach(product =>{
                if(product.classList.contains('hide')){
                    product.classList.remove('hide')
                } else {
                    null
                }
            })

            products.forEach(product =>{
                product.classList.add('hide')
                if(product.dataset.filter === targetBtn) {
                    product.classList.remove('hide')
                } else {
                    null
                }
            })
        }
    })
})

