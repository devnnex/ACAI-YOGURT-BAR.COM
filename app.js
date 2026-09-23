(() => {
  'use strict';

  const img = {
    drink: './images/matcha-latte.png',
    bowl: './images/acai-bowl.png',
    food: './images/green-toast.png',
  };
  const option = (id, name, price = 0) => ({ id, name, price });
  const group = (id, name, type, options, settings = {}) => ({ id, name, type, options, ...settings });
  const milk = group('milk', 'Elige tu leche', 'single', [option('whole', 'Entera'), option('lactose-free', 'Deslactosada'), option('oat', 'Avena', 3500), option('almond', 'Almendras', 3500)], { required: true, min: 1, max: 1 });
  const foam = group('foam', 'Foam it', 'single', [option('no-foam', 'Sin foam'), option('vanilla-foam', 'Vainilla foam', 3500), option('matcha-foam', 'Matcha foam', 3500), option('tiramisu-foam', 'Tiramisú foam', 3500)], { max: 1 });
  const topping = group('topping', 'Make it OKI · Toppings', 'multiple', [option('passionfruit', 'Maracuyá', 2500), option('strawberry', 'Fresa', 2500), option('tapioca', 'Tapioca pearls', 2500), option('lychee', 'Lyche', 2500), option('coconut', 'Coco', 2500)], { max: 3 });
  const toastExtra = group('toast-extra', 'Agrega algo más', 'multiple', [option('egg', 'Huevo', 5000), option('bacon', 'Tocineta', 7000)], { max: 2 });
  const protein = group('protein', 'Extra de proteína', 'multiple', [option('protein-scoop', 'Scoop de proteína', 7000)], { max: 1 });
  const bowlExtra = group('bowl-extra', 'Completa tu bowl', 'multiple', [option('fruit', 'Fruta extra', 3000), option('ice-cream', 'Helado', 5000), option('protein-scoop', 'Scoop de proteína', 7000)], { max: 2 });
  const eggStyle = group('egg-style', '¿Cómo prefieres tus huevos?', 'single', [option('scrambled', 'Revueltos'), option('fried', 'Fritos'), option('poached', 'Pochados')], { required: true, min: 1, max: 1 });
  const pancakeSauce = group('sauce', 'Elige una salsa', 'single', [option('chocolate', 'Chocolate'), option('caramel', 'Caramelo'), option('arequipe', 'Arequipe'), option('honey', 'Miel')], { required: true, min: 1, max: 1 });
  const sweetExtra = group('sweet-extra', 'Agrega algo más', 'multiple', [option('fruit', 'Fruta', 3000), option('ice-cream', 'Helado', 5000)], { max: 2 });
  const yogurtFruit = group('fruit-choice', 'Elige 2 frutas', 'multiple', [option('banana', 'Banano'), option('strawberry', 'Fresa'), option('blueberry', 'Arándanos'), option('mango', 'Mango')], { required: true, min: 2, max: 2 });
  const yogurtSauce = group('sauce-choice', 'Elige 1 salsa', 'single', [option('honey', 'Miel'), option('peanut', 'Crema de maní'), option('chocolate', 'Chocolate')], { required: true, min: 1, max: 1 });

  const products = [
    // Imagen 1 · All day, OKI
    { id:'mozzarella-toast', name:'Mozzarella toast', category:'Toasts', price:27000, image:img.food, description:'Jamón serrano, mozzarella de búfala, aguacate, cebollas encurtidas y miel.', modifiers:[toastExtra], featured:true },
    { id:'morning-toast', name:'Morning toast', category:'Toasts', price:25000, image:img.food, description:'Huevo cremoso, queso fresco, tocino crunchy, aguacate y dip de queso crema.', modifiers:[toastExtra], featured:true },
    { id:'green-toast', name:'Green toast', category:'Toasts', price:23000, image:img.food, description:'Mozzarella, tomates cherry confitados, rúgula, crema de aguacate y pesto fresco.', modifiers:[toastExtra], featured:true, badge:'OKI pick' },
    { id:'roast-sando', name:'Roast sando', category:'Sandos', price:28000, image:img.food, description:'Roast beef, jamón Blue York, mix de quesos, cebolla y salsa mayo.', featured:true },
    { id:'chicken-sando', name:'Chicken sando', category:'Sandos', price:25000, image:img.food, description:'Pollo desmechado, tocino, crema de aguacate, vegetales frescos y queso mozzarella.' },
    { id:'tuna-sando', name:'Tuna sando', category:'Sandos', price:25000, image:img.food, description:'Atún cremoso, aguacate y cebollas encurtidas sobre una cama de pesto fresco.' },
    { id:'eggs-your-way', name:'Huevos al gusto', category:'Huevos', price:20000, image:img.food, description:'Acompañados con pan, tocino y aguacate.', modifiers:[eggStyle] },
    { id:'omelette', name:'Omelette', category:'Huevos', price:25000, image:img.food, description:'Huevos, queso crema, mozzarella, aguacate, jamón serrano y rúgula. Acompañado de pan tostado.' },
    { id:'french-toast', name:'Tostada francesa', category:'Sweet', price:20000, image:img.food, description:'Pan brioche tostado tipo churro, mermelada de arándanos, fresas y helado.', modifiers:[sweetExtra], featured:true },
    { id:'banana-caramel', name:'Banana Caramel', category:'Sweet', price:null, image:img.food, description:'Pan brioche tostado tipo churro, salsa de caramelo toffee, banano, nueces y helado.', priceLabel:'Precio por confirmar' },
    { id:'pancakes', name:'Pancakes', category:'Sweet', price:13000, image:img.food, description:'Mini pancakes, 10 unidades. Incluye una salsa a elección.', modifiers:[pancakeSauce, sweetExtra] },
    { id:'veranito', name:'Veranito', category:'Drinks', price:20000, image:img.drink, description:'Vino tinto, soda de limón y zumos frescos.' },
    { id:'verano-rosa', name:'Verano Rosa', category:'Drinks', price:25000, image:img.drink, description:'Lambrusco rosado, tequila, almíbar simple, soda y limón.' },
    { id:'soda-mango-passion', name:'Soda Mango Passion', category:'Drinks', price:13000, image:img.drink, description:'Soda, puré de mango, limón y topping de maracuyá.', modifiers:[topping] },
    { id:'soda-red-berries', name:'Soda Frutos rojos', category:'Drinks', price:13000, image:img.drink, description:'Soda, puré de fresa, limón y toppings de fresa.', modifiers:[topping] },

    // Imagen 2 · Bowls & smoothies
    { id:'oki-bowl', name:'OKI bowl', category:'Bowls', price:26000, image:img.bowl, description:'Blend de matcha, aguacate, banano, miel y yogurt griego. Top de granola, coco, chía, banano, fresa y almendras.', modifiers:[bowlExtra], featured:true, badge:'Favorito' },
    { id:'acai-bowl', name:'Acai berries bowl', category:'Bowls', price:25000, image:img.bowl, description:'Blend de açaí, banano y berries. Top de granola, coco, chía, banano, fresa y crema de maní.', modifiers:[bowlExtra], featured:true },
    { id:'mango-bowl', name:'Mango bowl', category:'Bowls', price:25000, image:img.bowl, description:'Blend de mango, maracuyá, yogurt griego y miel. Top de granola, coco, chía, fresa, banano y arándanos.', modifiers:[bowlExtra] },
    { id:'yogurt-bowl', name:'Yogurt bowl', category:'Bowls', price:26000, image:img.bowl, description:'Blend de yogurt griego. Top de granola, coco, chía, 2 frutas y 1 salsa a elección.', modifiers:[yogurtFruit, yogurtSauce, bowlExtra] },
    { id:'berries-lover', name:'Berries lover', category:'Smoothies', price:15000, image:img.bowl, description:'Fresa, mora, arándanos, yogurt, miel y leche a elección.', modifiers:[milk, protein] },
    { id:'oki-smoothie', name:'Oki', category:'Smoothies', price:15000, image:img.bowl, description:'Matcha, banano, aguacate, yogurt y leche a elección.', modifiers:[milk, protein] },
    { id:'mornings', name:'Mornings', category:'Smoothies', price:15000, image:img.bowl, description:'Maracuyá, mango, yogurt y leche a elección.', modifiers:[milk, protein] },
    { id:'choco-banana', name:'Choco banana', category:'Smoothies', price:15000, image:img.bowl, description:'Banano, cacao, yogurt y mantequilla de maní.', modifiers:[milk, protein] },
    { id:'water', name:'Agua botella', category:'Bebidas', price:5000, image:img.drink, description:'Agua embotellada.' },
    { id:'hatsu-soda', name:'Soda Hatsu', category:'Bebidas', price:6000, image:img.drink, description:'Soda Hatsu fría.' },
    { id:'bretana', name:'Bretaña', category:'Bebidas', price:5000, image:img.drink, description:'Agua con gas Bretaña.' },
    { id:'hatsu-tea', name:'Té Hatsu', category:'Bebidas', price:10000, image:img.drink, description:'Té Hatsu frío.' },

    // Imagen 3 · Matcha, café, calientes y bakery
    { id:'matcha-latte', name:'Matcha Latte', category:'Matcha', price:15000, image:img.drink, description:'Té verde japonés con leche fría.', modifiers:[milk, foam], featured:true, badge:'Favorito' },
    { id:'matcha-mango', name:'Matcha Mango', category:'Matcha', price:16000, image:img.drink, description:'Té verde japonés, leche fría y mango puré.', modifiers:[milk, foam] },
    { id:'dirty-matcha', name:'Dirty Matcha', category:'Matcha', price:16000, image:img.drink, description:'Té verde japonés, leche fría y espresso.', modifiers:[milk, foam] },
    { id:'matcha-fresa', name:'Matcha Fresa', category:'Matcha', price:16000, image:img.drink, description:'Té verde japonés, leche fría y puré de fresa.', modifiers:[milk, foam] },
    { id:'matcha-tiramisu', name:'Matcha Tiramisú', category:'Matcha', price:17000, image:img.drink, description:'Té verde japonés, leche fría, foam de tiramisú y galleta de soletilla.', modifiers:[milk] },
    { id:'coco-matcha', name:'Coco Matcha', category:'Matcha', price:16000, image:img.drink, description:'Agua de coco con foam cremoso de matcha.', modifiers:[foam] },
    { id:'matcha-tonic', name:'Matcha Tonic', category:'Matcha', price:18000, image:img.drink, description:'Té verde japonés, agua tónica, miel y hielo.' },
    { id:'iced-latte', name:'Iced latte', category:'Café', price:12000, image:img.drink, description:'Espresso con leche fría.', modifiers:[milk, foam] },
    { id:'caramel-latte', name:'Caramel latte', category:'Café', price:14500, image:img.drink, description:'Espresso, leche fría y caramelo.', modifiers:[milk, foam] },
    { id:'tiramisu-latte', name:'Tiramisú Latte', category:'Café', price:15000, image:img.drink, description:'Espresso, leche fría y foam de tiramisú.', modifiers:[milk] },
    { id:'pistachio-latte', name:'Pistacho latte', category:'Café', price:15000, image:img.drink, description:'Espresso, leche fría y crema de pistacho.', modifiers:[milk, foam] },
    { id:'coffee-granizado', name:'Granizado de Café', category:'Café', price:14500, image:img.drink, description:'Espresso doble, leche y salsa de chocolate.', modifiers:[milk] },
    { id:'yuzu-coffee', name:'Yuzu Coffee', category:'Café', price:12000, image:img.drink, description:'Espresso, zumo de limón y miel.' },
    { id:'orange-coffee', name:'Orange Coffee', category:'Café', price:12000, image:img.drink, description:'Espresso, jugo de naranja y miel.' },
    { id:'ceremonial-matcha', name:'Matcha Ceremonial', category:'Calientes', price:8000, image:img.drink, description:'Té verde japonés con agua caliente.' },
    { id:'hot-matcha-latte', name:'Matcha latte caliente', category:'Calientes', price:11000, image:img.drink, description:'Té verde japonés con leche texturizada.', modifiers:[milk] },
    { id:'masala-chai', name:'Masala Chai', category:'Calientes', price:10000, image:img.drink, description:'Té chai con leche texturizada.', modifiers:[milk] },
    { id:'hot-taro-latte', name:'Taro latte caliente', category:'Calientes', price:12000, image:img.drink, description:'Taro cremoso con leche texturizada.', modifiers:[milk] },
    { id:'espresso', name:'Espresso', category:'Calientes', price:6000, image:img.drink, description:'Shot de café espresso.' },
    { id:'americano', name:'Americano', category:'Calientes', price:7000, image:img.drink, description:'Espresso con agua caliente.' },
    { id:'cappuccino', name:'Capuccino', category:'Calientes', price:9000, image:img.drink, description:'Espresso con leche texturizada.', modifiers:[milk] },
    { id:'hot-latte', name:'Latte', category:'Calientes', price:9000, image:img.drink, description:'Espresso con leche texturizada suave.', modifiers:[milk] },
    { id:'cookies', name:'Galletas', category:'Bakery', price:11000, image:img.food, description:'Galletas estilo New York rellenas.' },
    { id:'brownie', name:'Brownie', category:'Bakery', price:13500, image:img.food, description:'Brownie artesanal de chocolate.' },
    { id:'banana-bread', name:'Banana bread', category:'Bakery', price:15000, image:img.food, description:'Pan suave clásico de banano y nueces.' },

    // Imagen 4 · Signature teas, refreshers y personalización
    { id:'oki-milk-tea', name:'Oki Milk Tea', category:'Milk Tea', price:13000, image:img.drink, description:'Té negro, leche fría y cremosa.', modifiers:[milk, topping, foam] },
    { id:'brown-sugar', name:'Brown sugar', category:'Milk Tea', price:13000, image:img.drink, description:'Té negro, leche fría y brown sugar.', modifiers:[milk, topping, foam] },
    { id:'matcha-brown-sugar', name:'Matcha brown sugar', category:'Milk Tea', price:15000, image:img.drink, description:'Té matcha, leche fría y brown sugar.', modifiers:[milk, topping, foam] },
    { id:'chai-latte', name:'Chai Latte', category:'Chai', price:12000, image:img.drink, description:'Té chai con leche fría.', modifiers:[milk, topping, foam] },
    { id:'dirty-chai', name:'Dirty Chai', category:'Chai', price:15500, image:img.drink, description:'Té chai, leche fría y espresso.', modifiers:[milk, topping, foam] },
    { id:'matcha-chai', name:'Matcha Chai', category:'Chai', price:16000, image:img.drink, description:'Té matcha, té chai y leche fría.', modifiers:[milk, topping, foam] },
    { id:'iced-taro', name:'Iced Taro', category:'Taro', price:15000, image:img.drink, description:'Taro con leche fría.', modifiers:[milk, topping, foam] },
    { id:'dirty-taro', name:'Dirty Taro', category:'Taro', price:18000, image:img.drink, description:'Taro, leche fría y espresso.', modifiers:[milk, topping, foam] },
    { id:'taro-matcha', name:'Taro Matcha', category:'Taro', price:18000, image:img.drink, description:'Taro, leche fría y matcha.', modifiers:[milk, topping, foam] },
    { id:'matcha-yuzu', name:'Matcha Yuzu', category:'Refreshers', price:15000, image:img.drink, description:'Té verde japonés, zumo de limón y miel.', modifiers:[topping], featured:true },
    { id:'berries-tea', name:'Berries Tea', category:'Refreshers', price:13000, image:img.drink, description:'Té negro, frutos rojos y zumo de limón.', modifiers:[topping] },
    { id:'mango-tea', name:'Mango tea', category:'Refreshers', price:13000, image:img.drink, description:'Té verde, mango puré y limón.', modifiers:[topping] },
    { id:'peach-tea', name:'Peach tea', category:'Refreshers', price:13000, image:img.drink, description:'Té verde, durazno y zumo de limón.', modifiers:[topping] },
  ];

  const categories = ['Para ti','Toasts','Sandos','Huevos','Sweet','Drinks','Bowls','Smoothies','Bebidas','Matcha','Café','Calientes','Bakery','Milk Tea','Chai','Taro','Refreshers'];
  const state = { category:'Para ti', query:'', active:null, selections:{}, quantity:1, editingKey:null, cart:[], cartStep:'cart', customer:{name:'',phone:'',notes:''}, orderTotal:0 };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const money = value => value == null ? 'Precio por confirmar' : `$${new Intl.NumberFormat('es-CO').format(value)}`;
  const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

  try { state.cart = JSON.parse(localStorage.getItem('oki-cart-v2') || '[]'); } catch { state.cart = []; }
  const table = new URLSearchParams(location.search).get('table');
  if (table) $('#order-location').textContent = `Mesa ${table}`;

  function saveCart(){ localStorage.setItem('oki-cart-v2', JSON.stringify(state.cart)); updateCounts(); }
  function updateCounts(){ const count = state.cart.reduce((sum,item)=>sum+item.quantity,0); $$('.cart-count').forEach(node=>node.textContent=count); }
  function toast(title, copy=''){ const el=$('#toast'); $('#toast-title').textContent=title; $('#toast-copy').textContent=copy; el.hidden=false; clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.hidden=true,2600); }
  function total(){ return state.cart.reduce((sum,item)=>sum+item.unitPrice*item.quantity,0); }
  function productById(id){ return products.find(product=>product.id===id); }

  function renderCategories(){
    $('#categories').innerHTML=categories.map(name=>`<button role="tab" aria-selected="${state.category===name}" data-category="${name}">${name}</button>`).join('');
  }
  function visibleProducts(){
    const query=state.query.trim().toLowerCase();
    return products.filter(product=>(state.category==='Para ti'?product.featured:product.category===state.category)&&(!query||`${product.name} ${product.description} ${product.category}`.toLowerCase().includes(query)));
  }
  function renderProducts(loading=false){
    const root=$('#products');
    if(loading){ root.innerHTML='<div class="skeleton"></div>'.repeat(6); return; }
    const list=visibleProducts();
    if(!list.length){ root.innerHTML='<div class="empty"><b>No encontramos ese antojo</b><p>Prueba con otro nombre o explora una categoría.</p><button id="reset-filter">Ver recomendados</button></div>'; return; }
    root.innerHTML=list.map(product=>`<article class="product-card" data-product="${product.id}" tabindex="0">
      <button class="favorite" data-favorite="${product.id}" aria-label="Guardar ${product.name}">♡</button>
      <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy" />${product.badge?`<span class="product-badge">${product.badge}</span>`:''}${product.price==null?'<span class="unpriced">Consultar</span>':''}</div>
      <div class="product-copy"><h3>${product.name}</h3><p>${product.description}</p><div class="product-foot"><strong>${money(product.price)}</strong><button class="add" ${product.price==null?'disabled':''} data-add="${product.id}" aria-label="Personalizar ${product.name}">+</button></div></div>
    </article>`).join('');
  }

  function defaultSelections(product){ const values={}; (product.modifiers||[]).forEach(g=>values[g.id]=g.type==='single'?[g.options[0].id]:[]); return values; }
  function selectedUnitPrice(){
    if(!state.active||state.active.price==null) return 0;
    return state.active.price+(state.active.modifiers||[]).reduce((sum,g)=>sum+(state.selections[g.id]||[]).reduce((s,id)=>s+(g.options.find(o=>o.id===id)?.price||0),0),0);
  }
  function validSelection(){ return (state.active?.modifiers||[]).every(g=>!g.required||(state.selections[g.id]?.length||0)>=(g.min||1)); }
  function optionLabel(item){
    const product=productById(item.productId);
    return Object.entries(item.selections).flatMap(([groupId,ids])=>{ const g=product.modifiers?.find(entry=>entry.id===groupId); return ids.map(id=>g?.options.find(o=>o.id===id)?.name).filter(Boolean); }).join(' · ')||'Preparación original';
  }
  function quantityMarkup(value,key='detail'){ return `<div class="quantity ${key!=='detail'?'compact':''}" data-quantity="${key}"><button data-qty="minus" aria-label="Disminuir">−</button><b>${value}</b><button data-qty="plus" aria-label="Aumentar">+</button></div>`; }

  function openProduct(product,item=null){
    if(product.price==null){ toast('Precio por confirmar','Este producto quedará habilitado cuando se confirme su precio.'); return; }
    state.active=product; state.selections=item?structuredClone(item.selections):defaultSelections(product); state.quantity=item?.quantity||1; state.editingKey=item?.key||null;
    renderProductDetail(); showOverlay('product');
  }
  function renderProductDetail(){
    const p=state.active; if(!p)return;
    const groups=(p.modifiers||[]).map(g=>`<fieldset class="modifier"><legend>${g.name}<small>${g.required?'Obligatorio':`Opcional${g.max?` · Máx. ${g.max}`:''}`}</small></legend>${g.options.map(o=>{
      const checked=(state.selections[g.id]||[]).includes(o.id); return `<label class="option"><span><input type="${g.type==='single'?'radio':'checkbox'}" name="${g.id}" value="${o.id}" data-group="${g.id}" ${checked?'checked':''}/>${o.name}</span><em>${o.price?`+${money(o.price)}`:'Incluido'}</em></label>`;
    }).join('')}</fieldset>`).join('');
    $('#product-detail').innerHTML=`<div class="detail-content"><div class="detail-photo"><img src="${p.image}" alt="${p.name}" /></div><div class="detail-head"><div><h2 id="product-title">${p.name}</h2><p>${p.description}</p></div><strong>${money(p.price)}</strong></div><div class="modifier-list">${groups}<div class="qty-block"><div><strong>Cantidad</strong><small>¿Cuántos quieres?</small></div>${quantityMarkup(state.quantity)}</div></div></div><div class="sticky-action"><button id="add-product" ${validSelection()?'':'disabled'}>${state.editingKey?'Actualizar pedido':'Agregar al pedido'} · <span id="detail-total">${money(selectedUnitPrice()*state.quantity)}</span></button></div>`;
  }
  function refreshDetailTotal(){ const el=$('#detail-total'); if(el)el.textContent=money(selectedUnitPrice()*state.quantity); const qty=$('[data-quantity="detail"] b'); if(qty)qty.textContent=state.quantity; const button=$('#add-product'); if(button)button.disabled=!validSelection(); }
  function addActive(){
    if(!state.active||!validSelection())return;
    const item={key:state.editingKey||`${state.active.id}-${Date.now()}`,productId:state.active.id,quantity:state.quantity,selections:structuredClone(state.selections),unitPrice:selectedUnitPrice()};
    state.cart=state.editingKey?state.cart.map(entry=>entry.key===state.editingKey?item:entry):[...state.cart,item]; saveCart(); hideOverlay('product'); toast(state.editingKey?'Producto actualizado':'Agregado a tu pedido',`${item.quantity} × ${state.active.name}`); state.active=null; state.editingKey=null;
  }

  function renderCart(){
    const root=$('#cart-content'), action=$('#cart-action');
    $('#cart-kicker').textContent=state.cartStep==='cart'?'TU PEDIDO':state.cartStep==='checkout'?'FINALIZAR':'LISTO';
    $('#cart-title').textContent=state.cartStep==='cart'?'Tu pedido':state.cartStep==='checkout'?'Datos del pedido':'Pedido confirmado';
    $('#cart-back').textContent=state.cartStep==='checkout'?'←':'×';
    if(state.cartStep==='success'){
      root.innerHTML=`<div class="success"><div class="success-mark">✓</div><p>Gracias, ${escapeHtml(state.customer.name.split(' ')[0]||'')}</p><h3>Estamos preparando<br/>tu pausa favorita.</h3><div class="order-number"><small>NÚMERO DE PEDIDO</small><strong>OKI-${String(Date.now()).slice(-4)}</strong></div><p>Te avisaremos cuando tu pedido esté listo.</p><button id="finish-order">Volver al menú</button></div>`; action.innerHTML=''; return;
    }
    if(state.cartStep==='checkout'){
      root.innerHTML=`<form class="checkout" id="checkout-form"><div class="mode"><i>${table?'♨':'⌂'}</i><div><small>Modalidad</small><strong>${table?`Servicio en mesa ${escapeHtml(table)}`:'Recoger en OKI'}</strong></div><b>✓</b></div><label>Nombre completo<input name="name" value="${escapeHtml(state.customer.name)}" placeholder="¿A nombre de quién?" maxlength="60" required /></label><label>Teléfono<input name="phone" type="tel" value="${escapeHtml(state.customer.phone)}" placeholder="300 000 0000" maxlength="20" required /></label><label>Indicaciones especiales <small><span id="note-count">${state.customer.notes.length}</span>/180</small><textarea name="notes" maxlength="180" placeholder="Ej: sin pitillo, alergias o alguna indicación...">${escapeHtml(state.customer.notes)}</textarea></label><div class="payment"><i>▤</i><div><strong>Pago en el establecimiento</strong><span>El método se confirma al recibir tu pedido.</span></div><b>✓</b></div><div class="summary"><div class="total"><strong>Total del pedido</strong><strong>${money(total())}</strong></div></div></form>`;
      action.innerHTML=`<button id="confirm-order">Confirmar pedido · ${money(total())}</button>`; return;
    }
    if(!state.cart.length){ root.innerHTML='<div class="cart-empty"><i>▣</i><h3>Tu pedido está vacío</h3><p>Explora el menú y agrega algo delicioso.</p><button id="explore-menu">Explorar el menú</button></div>'; action.innerHTML=''; return; }
    root.innerHTML=`<div class="cart-items">${state.cart.map(item=>{const p=productById(item.productId);return `<article class="cart-item"><div class="cart-thumb"><img src="${p.image}" alt="" /></div><div class="cart-info"><div class="cart-name"><strong>${p.name}</strong><button class="delete" data-delete="${item.key}" aria-label="Eliminar ${p.name}">×</button></div><p>${optionLabel(item)}</p><button class="edit" data-edit="${item.key}">✎ Editar</button><div class="cart-line">${quantityMarkup(item.quantity,item.key)}<strong>${money(item.unitPrice*item.quantity)}</strong></div></div></article>`}).join('')}</div><button class="continue" id="continue-shopping">＋ Seguir agregando</button><div class="summary"><div><span>Subtotal</span><span>${money(total())}</span></div><div><span>Servicio</span><span>$0</span></div><div class="total"><strong>Total</strong><strong>${money(total())}</strong></div></div>`;
    action.innerHTML=`<button id="go-checkout">Continuar · ${money(total())}</button>`;
  }
  function openCart(){ state.cartStep='cart'; renderCart(); showOverlay('cart'); }
  function showOverlay(name){ $(`#${name}-overlay`).hidden=false; document.body.classList.add('modal-open'); }
  function hideOverlay(name){ $(`#${name}-overlay`).hidden=true; if($$('.overlay:not([hidden])').length===0)document.body.classList.remove('modal-open'); }
  function confirmOrder(){
    const digits=state.customer.phone.replace(/\D/g,'');
    if(!state.customer.name.trim()||digits.length<7){toast('Completa tus datos','Ingresa tu nombre y un teléfono válido.');return;}
    state.orderTotal=total(); state.cart=[]; saveCart(); state.cartStep='success'; renderCart();
  }

  $('#categories').addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(!button)return;state.category=button.dataset.category;renderCategories();renderProducts();});
  $('#products').addEventListener('click',event=>{
    if(event.target.closest('[data-favorite]')){event.stopPropagation();toast('Guardado en favoritos','Lo tendrás a mano para tu próxima pausa.');return;}
    const target=event.target.closest('[data-product], [data-add]');if(!target)return;openProduct(productById(target.dataset.product||target.dataset.add));
  });
  $('#products').addEventListener('keydown',event=>{if((event.key==='Enter'||event.key===' ')&&event.target.matches('[data-product]')){event.preventDefault();openProduct(productById(event.target.dataset.product));}});
  $('#search').addEventListener('input',event=>{state.query=event.target.value;$('#clear-search').hidden=!state.query;renderProducts();});
  $('#clear-search').addEventListener('click',()=>{state.query='';$('#search').value='';$('#clear-search').hidden=true;renderProducts();});
  $('#products').addEventListener('click',event=>{if(event.target.id==='reset-filter'){state.query='';state.category='Para ti';$('#search').value='';renderCategories();renderProducts();}});
  $('#product-detail').addEventListener('change',event=>{
    const input=event.target.closest('[data-group]');if(!input)return;const g=state.active.modifiers.find(entry=>entry.id===input.dataset.group);
    if(g.type==='single')state.selections[g.id]=[input.value];else{const current=state.selections[g.id]||[];if(input.checked){if(current.length>=(g.max||99)){input.checked=false;toast('Máximo alcanzado',`Puedes elegir hasta ${g.max} opciones.`);return;}state.selections[g.id]=[...current,input.value];}else state.selections[g.id]=current.filter(id=>id!==input.value);}refreshDetailTotal();
  });
  $('#product-detail').addEventListener('click',event=>{const qty=event.target.closest('[data-qty]');if(qty){state.quantity=Math.max(1,state.quantity+(qty.dataset.qty==='plus'?1:-1));refreshDetailTotal();}if(event.target.closest('#add-product'))addActive();});
  $('[data-close="product"]').addEventListener('click',()=>hideOverlay('product'));
  $('#product-overlay').addEventListener('click',event=>{if(event.target.id==='product-overlay')hideOverlay('product');});
  $('#header-cart').addEventListener('click',openCart);$('#nav-cart').addEventListener('click',openCart);
  $('#cart-overlay').addEventListener('click',event=>{if(event.target.id==='cart-overlay')hideOverlay('cart');});
  $('#cart-back').addEventListener('click',()=>{if(state.cartStep==='checkout'){state.cartStep='cart';renderCart();}else hideOverlay('cart');});
  $('#cart-content').addEventListener('click',event=>{
    const del=event.target.closest('[data-delete]');if(del){state.cart=state.cart.filter(item=>item.key!==del.dataset.delete);saveCart();renderCart();return;}
    const edit=event.target.closest('[data-edit]');if(edit){const item=state.cart.find(entry=>entry.key===edit.dataset.edit);hideOverlay('cart');setTimeout(()=>openProduct(productById(item.productId),item),120);return;}
    const qty=event.target.closest('[data-quantity] [data-qty]');if(qty){const wrapper=qty.closest('[data-quantity]'),item=state.cart.find(entry=>entry.key===wrapper.dataset.quantity);item.quantity=Math.max(1,item.quantity+(qty.dataset.qty==='plus'?1:-1));saveCart();renderCart();return;}
    if(event.target.closest('#continue-shopping')||event.target.closest('#explore-menu'))hideOverlay('cart');
    if(event.target.closest('#finish-order')){hideOverlay('cart');state.cartStep='cart';}
  });
  $('#cart-content').addEventListener('input',event=>{if(!event.target.name)return;state.customer[event.target.name]=event.target.value;if(event.target.name==='notes')$('#note-count').textContent=event.target.value.length;});
  $('#cart-action').addEventListener('click',event=>{if(event.target.closest('#go-checkout')){state.cartStep='checkout';renderCart();}if(event.target.closest('#confirm-order'))confirmOrder();});
  $('#favorites').addEventListener('click',()=>toast('Tus favoritos','Toca el corazón de un producto para guardarlo.'));
  $('#profile').addEventListener('click',()=>toast('Perfil','Esta opción estará disponible próximamente.'));

  if(document.modelContext?.registerTool){
    const controller=new AbortController();
    document.modelContext.registerTool({name:'read_oki_menu',title:'Consultar menú de OKI',description:'Devuelve el menú completo disponible con categorías y precios.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute:()=>({products:products.filter(p=>p.price!=null).map(({id,name,category,price})=>({id,name,category,price}))})},{signal:controller.signal});
    document.modelContext.registerTool({name:'add_oki_product_to_cart',title:'Agregar producto al pedido',description:'Agrega un producto disponible al carrito con sus opciones predeterminadas.',inputSchema:{type:'object',properties:{productId:{type:'string'},quantity:{type:'integer',minimum:1,maximum:20}},required:['productId','quantity'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:({productId,quantity})=>{const p=productById(productId);if(!p||p.price==null||!Number.isInteger(quantity)||quantity<1||quantity>20)throw new Error('Producto o cantidad no válidos.');state.cart.push({key:`${p.id}-${Date.now()}`,productId:p.id,quantity,selections:defaultSelections(p),unitPrice:p.price});saveCart();return{status:'added',product:p.name,quantity};}},{signal:controller.signal});
  }

  renderCategories();renderProducts(true);updateCounts();setTimeout(()=>renderProducts(),320);
})();
