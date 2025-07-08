    // Redirect to one-page checkout if on cart page
  if (window.location.pathname === "/cart") {
    window.location.href = "https://stickup.ma/checkout/all-in-one";
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname === "/checkout/all-in-one") {
      const buttons = document.querySelectorAll(".button.primary-button");
      if (buttons.length < 3) return;

      const targetBtn = buttons[2]; // Third button
      const parent = targetBtn.parentNode;

// Create WhatsApp button
const waButton = document.createElement("button");
waButton.style.cssText = `
  background-color: #25D366;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: none;
  border: 1px solid #25d366;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  direction: ltr;
`;

// Create icon
const waIcon = document.createElement("img");
waIcon.src = "https://kariim-digital.github.io/template/toko-wa-plus-blogger-template/img/whatsapp.png";
waIcon.alt = "WhatsApp";
waIcon.style.cssText = `
  width: 22px;
  height: 22px;
  display: inline !important;
  vertical-align: middle;
  margin-left: 5px;
`;

// Create text
const waText = document.createElement("span");
waText.textContent = "اطلب عبر واتساب";

// Append both to button
waButton.appendChild(waText);
waButton.appendChild(waIcon);



      // Button click event
      waButton.addEventListener("click", function () {
        let message = "🧾 *ملخص الطلب:*\n\n";

        // Customer inputs
        const inputs = document.querySelectorAll(".checkout-groups input");
        inputs.forEach(input => {
          const label = input.closest("label")?.innerText || input.placeholder || input.name;
          const value = input.value.trim();
          if (value) {
            message += `• ${label}: ${value}\n`;
          }
        });

        // Products
        const productItems = document.querySelectorAll(".sidebar .aside-products > li");
        if (productItems.length > 0) {
          message += `\n🛍️ *الملصقات:*\n`;
          productItems.forEach(li => {
            const nameElem = li.querySelector(".product-info");
            let name = nameElem ? nameElem.textContent.replace(/\n/g, " ").trim() : "";

            const priceElem = li.querySelector(".product-price .price");
            let price = priceElem ? priceElem.textContent.replace(/\n/g, " ").trim() : "";

            let quantity = "1";
            const quantityElem = li.querySelector(".product-quantity");
            if (quantityElem) {
              quantity = quantityElem.textContent.replace(/x/i, "").trim();
            }

            if (name && price) {
              message += `• ${name} - ${price} (x${quantity})\n`;
            } else if (name) {
              message += `• ${name} (x${quantity})\n`;
            }
          });
        }

        // Shipping method
        const selectedShipping = document.querySelector("#shipping-information-form .shipping-methods input[type='radio']:checked");
        if (selectedShipping) {
          let label = selectedShipping.closest(".radio-group")?.innerText || "";
          label = label.replace(/\s+/g, " ").trim();
          if (label) {
            message += `\n🚚 *طريقة الشحن:* ${label}\n`;
          }
        }

        // Total
        const total = document.querySelector(".sidebar .aside-total .value")?.innerText.trim();
        if (total) {
          message += `\n💰 *المجموع:* ${total} درهم\n`;
        }

        // Payment method
        const selectedPayment = document.querySelector(".payment-gateway.expanded");
        if (selectedPayment) {
          const label = selectedPayment.innerText.trim().split("\n")[0];
          message += `\n💳 *وسيلة الدفع:* ${label}\n`;
        }

        // Delivery notes (textarea fallback)
        const allTextAreas = document.querySelectorAll("textarea");
        allTextAreas.forEach((ta, i) => {
          const value = ta.value.trim();
          if (value) {
            message += `\n📝 *ملاحظات:* ${value}\n`;
          }
        });

        // WhatsApp redirect
        const phone = "212719736729";
        const waURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(waURL, "_blank");
      });

      // Insert button after the target one
      parent.insertBefore(waButton, targetBtn.nextSibling);

      function updateButtonVisibility() {
        const paymentGateways = document.querySelectorAll(".payment-gateway");
        let selectedIndex = -1;
        paymentGateways.forEach((pg, i) => {
          if (pg.classList.contains("expanded")) {
            selectedIndex = i;
          }
        });

        if (selectedIndex === 0) {
          targetBtn.style.display = "block";
          waButton.style.display = "none";
        } else {
          targetBtn.style.display = "none";
          waButton.style.display = "block";
        }
      }

      // Initial check
      updateButtonVisibility();

      // Observe payment selection
      const paymentGateways = document.querySelectorAll(".payment-gateway");
      paymentGateways.forEach(pg => {
        pg.addEventListener("click", () => {
          setTimeout(updateButtonVisibility, 100);
        });
      });
    }
  });
  
