"use strict"
new TradingView.widget({
  "width": 1150,
  "height": 800,
  "symbol": "BINANCE:BTCUSDT",
  "interval": "1D",
  "timezone": "Etc/UTC",
  "theme": "white",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "withdateranges": true,
  "hide_side_toolbar": false,
  "allow_symbol_change": true,
  "save_image": false,
  "details": true,
  "hotlist": true,
  "calendar": true,
  "news": [
    "headlines"
  ],
  "show_popup_button": true,
  "popup_width": "1000",
  "popup_height": "650",
  "container_id": "tv_chart_container"
});

document.querySelector('#trading_view_form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  let data = new FormData(document.querySelector('#trading_view_form'));
  fetch('/save_data', {
      method: 'POST',
      body: data
  }).then(function(response) {
      console.log('Data saved successfully');
  });
})

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const title = item.querySelector('.faq-item-title');
  title.addEventListener('click', () => {
    item.classList.toggle('active');
  });
}); 

const faqs = document.querySelectorAll('.faq_wrapper');

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});