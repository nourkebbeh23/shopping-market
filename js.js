//  لتخزين المنتجات المضافة إلى السلة
let cart = [];

// دالة لإضافة منتج إلى السلة
function addToCart(productName, productPrice) {
  // إضافة المنتج إلى السلة
  cart.push({ name: productName, price: productPrice });

  // تحديث عرض السلة
  updateCart();
}

// دالة لتحديث سلة الشراء
function updateCart() {
  // الحصول على عنصر عرض سلة الشراء
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.querySelector(".total-price");
  const submitBtn = document.getElementById("submitBtn");
  const inputBtn = document.getElementById("inputBtn");


  submitBtn.addEventListener("click", () => {
    const couponCode = inputBtn.value;
    if (couponCode === "DISCOUNT10") {
      totalPrice *= 0.9; 
      totalPriceElement.textContent = ` Total : $ ${totalPrice.toFixed(2) }` ;
    } else {
      alert("Invalid coupon code");
    }
  });
  // مسح العناصر السابقة في السلة
  cartItems.innerHTML = "";

  // حساب الإجمالي
  let totalPrice = 0;

  // إضافة العناصر إلى السلة
  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} $ - ${item.price} `;

    // إضافة زر "مسح" لكل منتج
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      removeFromCart(index);
    };
    listItem.appendChild(deleteButton);

    cartItems.appendChild(listItem);

    // إضافة سعر المنتج لل الإجمالي
    totalPrice += item.price;
  });

  

  // عرض الإجمالي
  totalPriceElement.textContent = ` Total : ${totalPrice} $`;
}

// دالة لإزالة منتج من السلة
function removeFromCart(index) {
  // حذف المنتج من السلة
  cart.splice(index, 1);

  // تحديث عرض السلة بعد الحذف
  updateCart();
}

// دالة لفتح/إغلاق نافذة السلة
function toggleCartPopup() {
  const popup = document.getElementById("cart-popup");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
  // const coupon  = document.getElementById("coupon");
  // coupon.style.display = coupon.style.display === "flex" ? "none" : "flex";
}

function closeCartPopup() {
  const popup = document.getElementById("cart-popup");
  popup.style.display = "none";
}