  function addToCart(button) {
    var bookTitle = button.parentNode.querySelector('h3').innerText;
    var authorName = button.parentNode.querySelector('p').innerText;
    var price = button.parentNode.querySelector('.price').innerText;
  
    var item = {
      title: bookTitle,
      author: authorName,
      price: price
    };
  
    cartItems.push(item);
    updateCart();
  }
  
  function updateCart() {
    var cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
  
    var total = 0;
  
    for (var i = 0; i < cartItems.length; i++) {
      var item = cartItems[i];
  
      var listItem = document.createElement('li');
      listItem.innerHTML = '<span class="item-title">' + item.title + '</span> - <span class="item-author">' + item.author + '</span> - <span class="item-price">' + item.price + '</span>';
      cartList.appendChild(listItem);
  
      total += parseFloat(item.price.replace('$', ''));
    }
  
    document.getElementById('cart-total').textContent = '$' + total.toFixed(2);
  }
  
  function checkout() {
    // Perform the necessary actions to process the checkout
    // For this sample, we'll just log the cart items to the console
    console.log('Checkout:', cartItems);
    alert('Checkout complete!');
    cartItems = [];
    updateCart();
  }
    