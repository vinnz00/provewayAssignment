document.addEventListener('DOMContentLoaded', () => {
    const PRICES = {
        '1': '10.00',
        '2': '18.00',
        '3': '24.00'
    };

    const options = document.querySelectorAll('.option');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const addToCartBtn = document.querySelector('.add-to-cart');

    // Handle radio button changes
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const selectedUnits = e.target.value;
            
            // Update total price
            const totalPrice = document.getElementById('total-price');
            totalPrice.textContent = `$${PRICES[selectedUnits]} USD`;

            // Show/hide variant selectors
            document.querySelectorAll('.variant-selectors').forEach(selector => {
                selector.style.display = 'none';
            });

            const selectedOption = document.querySelector(`[data-units="${selectedUnits}"]`);
            const selectedVariantSelectors = selectedOption.querySelector('.variant-selectors');
            selectedVariantSelectors.style.display = 'block';

            // Update selected state visually and add active class
            options.forEach(option => {
                if (option.dataset.units === selectedUnits) {
                    option.classList.add('active'); // Add active class
                } else {
                    option.classList.remove('active'); // Remove active class from others
                }
            });
        });
    });

    // Initialize cart button animation
    addToCartBtn.addEventListener('click', () => {
        addToCartBtn.style.transform = 'scale(0.98)';
        setTimeout(() => {
            addToCartBtn.style.transform = 'scale(1)';
        }, 100);
    });

    // Initialize with default selection
    const defaultSelection = document.querySelector('input[type="radio"]:checked');
    if (defaultSelection) {
        defaultSelection.dispatchEvent(new Event('change'));
    }
});
