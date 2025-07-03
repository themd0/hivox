document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/checkout/all-in-one") {
    const button = document.createElement("button");
    button.textContent = "اطلب عبر واتساب";
    button.style.cssText = `
      background-color: #25D366;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 15px;
      display: block;
    `;

    button.addEventListener("click", function () {
      let message = "🧾 *ملخص الطلب:*\n\n";

      // 1. Customer info from inputs
      const inputs = document.querySelectorAll(".checkout-groups input");
      inputs.forEach(input => {
        const label = input.closest("label")?.innerText || input.placeholder || input.name;
        const value = input.value.trim();
        if (value) {
          message += `• ${label}: ${value}\n`;
        }
      });

      // 2. Products & quantities with price on same line, no newlines inside text
      const productItems = document.querySelectorAll(".sidebar .aside-products > li");
      if (productItems.length > 0) {
        message += `\n🛍️ *الملصقات:*\n`;
        productItems.forEach(li => {
          // Extract name and remove new lines
          const nameElem = li.querySelector(".product-info");
          let name = "";
          if (nameElem) {
            name = nameElem.textContent.replace(/\n/g, " ").trim();
          }

          // Extract price and remove new lines
          const priceElem = li.querySelector(".product-price .price");
          let price = "";
          if (priceElem) {
            price = priceElem.textContent.replace(/\n/g, " ").trim();
          }

          // Extract quantity, clean 'x' and spaces
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

      // 3. Total price
      const total = document.querySelector(".sidebar .aside-total .value")?.innerText.trim();
      if (total) {
        message += `\n💰 *المجموع:* ${total} درهم\n`;
      }

      // 4. Selected payment method
      const selectedPayment = document.querySelector(".payment-gateway.expanded");
      if (selectedPayment) {
        const label = selectedPayment.innerText.trim().split("\n")[0];
        message += `\n💳 *وسيلة الدفع:* ${label}\n`;
      }

      // Send to WhatsApp
      const encoded = encodeURIComponent(message);
      const phone = "212719736729";
      const waURL = `https://wa.me/${phone}?text=${encoded}`;
      window.open(waURL, "_blank");
    });

    // Insert before the third button with class "button primary-button"
    const buttons = document.querySelectorAll(".button.primary-button");
    if (buttons.length >= 3) {
      const thirdButton = buttons[2]; // zero-based index
      thirdButton.parentNode.insertBefore(button, thirdButton);
    }

    // Function to update button visibility based on selected payment gateway
    function updateButtonVisibility() {
      const paymentGateways = document.querySelectorAll(".payment-gateway");
      let selectedIndex = -1;
      paymentGateways.forEach((pg, i) => {
        if (pg.classList.contains("expanded")) {
          selectedIndex = i;
        }
      });
      // Hide button if first or second gateway (index 0 or 1)
      if (selectedIndex === 0 || selectedIndex === 1) {
        button.style.display = "none";
      } else {
        button.style.display = "block";
      }
    }

    // Initial check
    updateButtonVisibility();

    // Listen for clicks on payment gateways to update visibility
    const paymentGateways = document.querySelectorAll(".payment-gateway");
    paymentGateways.forEach(pg => {
      pg.addEventListener("click", () => {
        // Delay to allow class changes (if any) after click
        setTimeout(updateButtonVisibility, 100);
      });
    });
  }
});
