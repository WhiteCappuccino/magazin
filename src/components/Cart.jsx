import React from 'react'

const Cart = ({ items = [], onClose, onInc, onDec, onRemove }) => {
  const parsePrice = (p) => parseFloat(String(p).replace(',', '.')) || 0;
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + parsePrice(i.price) * i.qty, 0);
  const discount = 0; // можно подключить акционные правила позже
  const total = Math.max(0, subtotal - discount);
  return (
    <div className="cart-page">
      <div className="breadcrumb">
        <a href="#" onClick={(e)=>{e.preventDefault(); onClose && onClose();}}>Главная</a>
        <span className="breadcrumb-sep">—</span>
        <span>Корзина</span>
      </div>
      <div className="sale-head">
        <h1>Корзина <span className="cart-badge-heading">{totalItems}</span></h1>
      </div>
      <div className="cart-wrap">
        <div className="cart-list">
          {items.length === 0 && (
            <div className="cart-empty">Ваша корзина пуста</div>
          )}
          {items.map(item => (
            <div className="cart-row" key={item.id}>
              <div className="cart-left">
                <img src={item.image} alt={item.name} className="cart-img"/>
                <div className="cart-title">{item.name}</div>
              </div>
              <div className="cart-qty">
                <button className="qty-btn" onClick={() => onDec(item.id)}>-</button>
                <span className="qty-val">{item.qty}</span>
                <button className="qty-btn" onClick={() => onInc(item.id)}>+</button>
              </div>
              <div className="cart-price">{(parseFloat(String(item.price).replace(',', '.')) * item.qty).toFixed(2)} ₽</div>
              <button className="remove-btn" onClick={() => onRemove(item.id)}>×</button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="summary-line"><span>{totalItems} товара</span><b>{subtotal.toFixed(2)} ₽</b></div>
          <div className="summary-line"><span>Скидка</span><b>-{discount.toFixed(2)} ₽</b></div>
          <div className="summary-line total"><span>Итого</span><b>{total.toFixed(2)} ₽</b></div>
          <button className="checkout-btn">Оформить заказ</button>
          <button className="back-btn" onClick={onClose}>Назад к покупкам</button>
        </div>
      </div>
    </div>
  );
}

export default Cart


