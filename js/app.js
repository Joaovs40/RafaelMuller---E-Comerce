/* ═══════════════ DATA ═══════════════ */
const products = [
  {id:0,name:"Glamour Lace Front HD",desc:"Lace invisível HD com cabelo humano. Máxima naturalidade e durabilidade.",cat:"Lace Front",price:1290,old:1590,emoji:"👩‍🦰",badge:"Best seller",colors:["#2c1810","#5c3420","#e8c49c","#1a1a1a","#8b6914"],sizes:["P","M","G","GG"],stock:12,rating:4.9,reviews:248,features:["Cabelo 100% humano","Lace HD invisível","18 meses de garantia","Densidade 180%"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:1,name:"Silk Touch Natural",desc:"Textura aveludada com movimento natural. Ideal para uso diário.",cat:"Natural",price:890,old:null,emoji:"👩‍🦱",badge:null,colors:["#1a1a1a","#3d2b1f","#c8a882"],sizes:["P","M","G"],stock:34,rating:4.7,reviews:183,features:["Fibra premium sintética","Ultra leve 180g","Lavável na máquina","Resistente ao calor"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:2,name:"Curly Queen Premium",desc:"Cachos definidos e volumosos com balanço perfeito.",cat:"Cacheada",price:750,old:950,emoji:"👩‍🦳",badge:"Sale",colors:["#1a1a1a","#8b4513","#d4a574","#f5f5f0"],sizes:["M","G","GG"],stock:5,rating:4.8,reviews:312,features:["Cachos permanentes","Alta densidade","Confortável 24h","Respirável"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:3,name:"Sleek Straight Luxe",desc:"Liso sedoso com brilho espelhado. Sofisticação máxima.",cat:"Liso",price:680,old:null,emoji:"👱‍♀️",badge:"Novo",colors:["#1a1a1a","#2c1810","#f5e6c8","#8b7355"],sizes:["P","M","G"],stock:28,rating:4.6,reviews:97,features:["Anti-frizz","UV protection","Brilho intenso","Durabilidade 12 meses"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:4,name:"Bob Chic Edition",desc:"Corte chanel moderno com finalização impecável.",cat:"Bob",price:520,old:680,emoji:"👩",badge:"Sale",colors:["#1a1a1a","#8b4513","#c8a882","#2c1810"],sizes:["P","M","G"],stock:19,rating:4.5,reviews:156,features:["Design exclusivo","Leve e prático","Ajuste perfeito","Estilo atemporal"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:5,name:"Full Lace Goddess",desc:"Peruca full lace para versatilidade total. Risco customizável.",cat:"Full Lace",price:1890,old:2200,emoji:"👸",badge:"Premium",colors:["#2c1810","#1a1a1a","#c8a882","#e8c49c"],sizes:["P","M","G","GG"],stock:8,rating:4.9,reviews:421,features:["Full lace 360°","Cabelo humano virgem","Customizável","Máxima versatilidade"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:6,name:"Wave Romance",desc:"Ondas suaves e naturais para um visual romântico e sofisticado.",cat:"Natural",price:820,old:null,emoji:"💁‍♀️",badge:"Novo",colors:["#2c1810","#8b6914","#c8a882"],sizes:["M","G"],stock:22,rating:4.7,reviews:74,features:["Ondas naturais","Longa durabilidade","Sem frizz","Hidratada"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:7,name:"Afro Power",desc:"Volume e personalidade. Cachos afro para celebrar sua identidade.",cat:"Cacheada",price:640,old:800,emoji:"👩🏾",badge:"Sale",colors:["#1a1a1a","#2c1810","#5c3420"],sizes:["P","M","G","GG"],stock:3,rating:4.8,reviews:203,features:["Volume intenso","Leve","Hidratada","Definição perfeita"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:8,name:"Micropele Transparente",desc:"Base em micropele ultra-fina que imita o couro cabeludo com perfeição absoluta.",cat:"Prótese Capilar",price:980,old:1200,emoji:"🧑",badge:"Best seller",colors:["#c8a882","#2c1810","#1a1a1a","#e8c49c"],sizes:["P","M","G"],stock:15,rating:4.9,reviews:187,features:["Micropele 0,06mm","Cabelo humano 100%","Resistente à água","Fixação de 30 dias"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:9,name:"Lace HD Masculina",desc:"Prótese capilar em lace HD para homens. Natural e confortável o dia todo.",cat:"Prótese Capilar",price:750,old:null,emoji:"👨",badge:"Novo",colors:["#1a1a1a","#2c1810","#5c3420","#808080"],sizes:["P","M","G"],stock:22,rating:4.7,reviews:134,features:["Lace HD invisível","Cabelo humano","Leve e respirável","Ajuste perfeito"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:10,name:"Híbrida Premium",desc:"Combinação de micropele e lace para máximo conforto e naturalidade.",cat:"Prótese Capilar",price:1150,old:1400,emoji:"🧑‍🦱",badge:"Premium",colors:["#2c1810","#1a1a1a","#c8a882"],sizes:["M","G","GG"],stock:8,rating:4.8,reviews:96,features:["Base híbrida micropele+lace","Alta durabilidade","Design personalizado","Garantia 12 meses"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:11,name:"Afro Masculino",desc:"Prótese capilar afro com cachos naturais. Identidade e estilo para homens.",cat:"Prótese Capilar",price:680,old:850,emoji:"👨🏾",badge:"Sale",colors:["#1a1a1a","#2c1810"],sizes:["P","M","G"],stock:11,rating:4.6,reviews:72,features:["Cachos afro naturais","Base em lace","Ultra leve","Fácil manutenção"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
  {id:12,name:"Injetada Full Cap",desc:"Prótese injetada de cobertura total, ideal para alopecia e quimioterapia.",cat:"Prótese Capilar",price:1380,old:null,emoji:"🧕",badge:"Novo",colors:["#1a1a1a","#2c1810","#c8a882","#e8c49c","#808080"],sizes:["P","M","G","GG"],stock:6,rating:4.9,reviews:203,features:["Cobertura total","Indicada para alopecia","Cabelo humano virgem","Conforto prolongado"],images:["img/placeholder.svg","img/placeholder.svg","img/placeholder.svg"]},
];

const testimonials = [
  {text:"Simplesmente apaixonada! A qualidade é surpreendente, parece completamente natural. Recebi vários elogios no trabalho.",author:"Mariana S.",city:"São Paulo",stars:5},
  {text:"Entrega super rápida e a embalagem é linda. A peruca é exatamente como descrita, super confortável para usar o dia todo.",author:"Fernanda R.",city:"Rio de Janeiro",stars:5},
  {text:"Já é minha terceira compra aqui. Qualidade impecável, atendimento excepcional. Não compro em nenhum outro lugar!",author:"Juliana M.",city:"Belo Horizonte",stars:5},
  {text:"A lace front HD é incrível, ninguém percebe que é peruca. Me sinto muito mais confiante todos os dias. Valeu cada centavo!",author:"Camila A.",city:"Curitiba",stars:5},
  {text:"Atendimento via WhatsApp foi excelente, me ajudaram a escolher o tamanho certo. A peruca chegou perfeita e no prazo!",author:"Patrícia L.",city:"Fortaleza",stars:5},
  {text:"A prótese capilar transformou minha vida durante o tratamento. Produto de altíssima qualidade, muito obrigada pela atenção!",author:"Ana C.",city:"Brasília",stars:5},
];

const blogPosts = [
  {emoji:"🪮",img:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",tag:"Cuidados",title:"Como lavar e conservar sua peruca",excerpt:"Descubra os segredos para manter sua peruca sempre linda por mais tempo com produtos certos.",date:"15 Mai 2025",time:"5 min",content:`
    <p>Manter sua peruca sempre linda exige alguns cuidados simples, mas essenciais. Com a rotina certa, ela dura muito mais tempo e continua com o aspecto de nova.</p>
    <h4>1. Com que frequência lavar?</h4>
    <p>Para uso diário, lave a cada 10–15 dias. Para uso ocasional, a cada 20–30 dias ou quando perceber acúmulo de produtos.</p>
    <h4>2. Passo a passo da lavagem</h4>
    <ul>
      <li>Escove suavemente antes de molhar para desfazer nós</li>
      <li>Use água fria ou morna — nunca quente</li>
      <li>Aplique shampoo específico para perucas ou shampoo suave, sem esfregar</li>
      <li>Enxágue bem até remover todo o produto</li>
      <li>Aplique condicionador nas pontas por 2–3 minutos e enxágue</li>
    </ul>
    <h4>3. Secagem correta</h4>
    <p>Envolva em uma toalha macia e pressione suavemente — nunca esfregue. Seque ao ar livre em suporte próprio. Se usar secador, use temperatura baixa e mantenha distância de 20 cm.</p>
    <h4>4. Armazenamento</h4>
    <p>Guarde em suporte de peruca ou embalagem original, longe de luz solar direta e umidade. Evite dobrar ou amassar as mechas.</p>
    <h4>5. Produtos recomendados</h4>
    <p>Use sempre produtos sem sulfato e sem álcool. Sprays de brilho e leave-in leves ajudam a manter o fio hidratado e com movimento natural.</p>
  `},
  {emoji:"✨",img:"https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",tag:"Tendências",title:"As perucas que dominam o verão 2025",excerpt:"Cores, texturas e estilos que estão em alta esta temporada. Inspire-se com as novidades.",date:"10 Mai 2025",time:"4 min",content:`
    <p>O verão 2025 chegou com propostas ousadas e cheias de personalidade. Confira o que está em alta e renove seu visual!</p>
    <h4>Tons quentes e dourados</h4>
    <p>Loiros mel, caramelos e acobreados dominam as passarelas. Tons que remetem ao sol e ao bronze são os favoritos da temporada.</p>
    <h4>Cachos definidos e volume</h4>
    <p>Os cachos voltaram com tudo — do cacheado médio ao afro. Quanto mais volume e definição, melhor. A naturalidade é a tendência número um.</p>
    <h4>Cortes bob modernos</h4>
    <p>O corte chanel repaginado, com pontas assimétricas ou levemente onduladas, continua sendo um clássico moderno para o verão.</p>
    <h4>Lace front HD invisível</h4>
    <p>A tecnologia lace HD segue como hit absoluto. O efeito natural da linha do cabelo conquistou quem busca praticidade sem abrir mão da sofisticação.</p>
    <h4>Cores fantasia discretas</h4>
    <p>Mechas em tons de borgonha, roxo escuro e azul profundo aparecem como complemento — ousadia com elegância é a proposta.</p>
  `},
  {emoji:"💆‍♀️",img:"https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",tag:"Tutorial",title:"Dicas para usar lace front sem marcas",excerpt:"Técnicas profissionais para uma fixação perfeita e aspecto completamente natural.",date:"5 Mai 2025",time:"6 min",content:`
    <p>A lace front é a queridinha de quem quer máxima naturalidade. Mas para ficar perfeita, alguns truques fazem toda a diferença.</p>
    <h4>Prepare a pele antes</h4>
    <p>Limpe a testa com água micelar ou álcool isopropílico 70% para remover oleosidade. Pele limpa e seca garante melhor fixação e menos marcas.</p>
    <h4>Use fita ou cola adequada</h4>
    <p>Existem dois tipos principais: fita adesiva (prática e reutilizável) e cola para lace (mais duradoura). Para iniciantes, a fita é mais fácil de manusear.</p>
    <h4>Aplique e ajuste com cuidado</h4>
    <ul>
      <li>Posicione a peruca 1–2 cm acima da linha natural do cabelo</li>
      <li>Pressione suavemente da frente para os lados</li>
      <li>Use um pente de dente fino para fundir a lace à pele</li>
      <li>Aplique base ou pó na lace para combinar com o tom da sua pele</li>
    </ul>
    <h4>Finalize as bordas</h4>
    <p>Com gel de fixação leve e uma escova de cerdas macias, pressione as baby hairs para criar um acabamento natural. Seque com um lenço ou secador na temperatura mais baixa.</p>
    <h4>Remoção sem danos</h4>
    <p>Use removedor de cola específico ou óleo de coco para soltar a lace suavemente — nunca puxe com força para não danificar a base.</p>
  `},
];

const faqs = [
  {q:"Qual a diferença entre cabelo natural e sintético?",a:"Cabelo natural (humano) aceita tintura, calor e pode ser penteado como cabelo próprio, com durabilidade de 12–24 meses. Sintético é mais acessível, vem pré-estilizado e dura 6–12 meses, mas não aceita tintura nem calor extremo."},
  {q:"Como saber meu tamanho?",a:"Meça a circunferência da sua cabeça com uma fita métrica: 52–54cm = P, 54–57cm = M, 57–59cm = G, 59–62cm = GG. Em caso de dúvida entre dois tamanhos, recomendamos escolher o maior. Também podemos te ajudar a escolher pelo WhatsApp!"},
  {q:"Qual o prazo de entrega?",a:"Entregamos para todo o Brasil. São Paulo: 2–3 dias úteis. Demais capitais: 3–5 dias úteis. Interior: 5–8 dias úteis. Todas as compras têm rastreamento em tempo real enviado por e-mail."},
  {q:"Posso trocar se não ficar satisfeita?",a:"Sim! Aceitamos trocas e devoluções em até 30 dias após o recebimento, com frete de devolução por nossa conta. O produto deve estar em condições originais com a embalagem intacta."},
  {q:"Como funciona o frete?",a:"O frete é calculado no checkout com base no seu CEP. Entregamos para todo o Brasil."},
  {q:"Como funciona a lace front?",a:"A lace front é uma tela fina e transparente na frente da peruca que imita o couro cabeludo, criando um visual completamente natural. Nossas laces HD são praticamente invisíveis em todos os tons de pele."},
  {q:"Posso usar tinta na peruca?",a:"Apenas perucas de cabelo 100% humano podem receber tinta. Recomendamos sempre consultar uma profissional especializada para não danificar os fios. Perucas sintéticas não aceitam tintura."},
  {q:"As perucas têm garantia?",a:"Sim! Oferecemos 18 meses de garantia para perucas de cabelo humano e 12 meses para as sintéticas, cobrindo defeitos de fabricação. A garantia não cobre danos por uso incorreto."},
  {q:"Como usar o cupom de desconto?",a:"Na tela de carrinho, clique em 'Tenho um cupom' e digite o código. Cupons disponíveis: BEMVINDA (15% OFF para novas clientes), LD10 (10% OFF) e LD20 (20% OFF em promoções especiais)."},
  {q:"Como funciona o pagamento via Pix?",a:"Ao escolher Pix no checkout, você recebe um QR Code e o código para copiar e colar. O Pix tem desconto de 5% sobre o total. O pedido é confirmado automaticamente após o pagamento."},
  {q:"A prótese capilar é indicada para quimioterapia?",a:"Sim! Nossa linha Injetada Full Cap é especialmente indicada para pacientes em tratamento de quimioterapia e alopecia. Oferecemos cobertura total com máximo conforto. Entre em contato pelo WhatsApp para orientação personalizada."},
  {q:"Vocês atendem por WhatsApp?",a:"Sim! Nossa equipe atende pelo WhatsApp (19) 99436-8778 de segunda a sábado, das 9h às 18h. Respondemos dúvidas sobre produtos, tamanhos, cuidados e pedidos. Clique no botão verde no canto da tela!"},
];

const marqueeItems = ["Parcelamento em até 12x sem juros","Cabelo 100% humano premium","Troca gratuita em 30 dias","Garantia de qualidade certificada","Entrega para todo o Brasil","5% de desconto no Pix","Cupom BEMVINDA — 15% OFF na 1ª compra","Atendimento via WhatsApp","Lace HD invisível em todos os tons de pele"];

const coupons = {LD10:{pct:10,label:"10% OFF"},LD20:{pct:20,label:"20% OFF"},BEMVINDA:{pct:15,label:"15% OFF de boas-vindas"},LACES15:{pct:15,label:"15% OFF"}};

const fakeOrders = [
  {id:"LH-X9K2A1",date:"18 Mai 2025",status:"delivered",items:[8,9],total:2180},
  {id:"LH-M7P4Q2",date:"10 Mai 2025",status:"shipping",items:[14],total:890},
  {id:"LH-B3N8R5",date:"2 Mai 2025",status:"delivered",items:[10,13],total:1270},
];

/* ═══════════════ STATE ═══════════════ */
let cart = [];
let wishlist = new Set();
let compareList = [];
let activeFilter = "Todos";
let currentProd = null;
let pmQty = 1;
let checkStep = 1;
let payMethod = "pix";
let discount = 0;
let discountType = "percentage"; // "percentage" ou "value"
let discLabel = "";
let loggedIn = false;
let userData = {name:"Mariana Silva",email:"mariana@email.com",phone:"(11) 99999-0000",cpf:"000.000.000-00",birth:"1990-05-15",isAdmin:false,points:1240};
let authMode = "login";
let editingProdId = null;
let waOpen = false;
let currentCEP = "";
let userReviews = [];
let savedCards = [];
let selectedCardId = null;
let savedAddresses = [
  {id:"addr_default",name:"Mariana Silva",tag:"Padrão",cep:"01452-000",rua:"Rua das Flores",numero:"123",complemento:"Apto 42",bairro:"Jardim Paulista",cidade:"São Paulo",estado:"SP",isDefault:true},
  {id:"addr_office",name:"Mariana Silva (Trabalho)",tag:"Escritório",cep:"01310-100",rua:"Av. Paulista",numero:"1000",complemento:"Cj. 810",bairro:"Bela Vista",cidade:"São Paulo",estado:"SP",isDefault:false}
];
const ADMIN_PW = 'admin123'; // demo admin password (change in production)

/* ═══════════════ API ═══════════════ */
const API_BASE = '/api';
let authToken = localStorage.getItem('lh_token') || null;

async function api(method, path, body) {
  const headers = { 'Content-Type': 'application/json' };
  if (authToken) headers['Authorization'] = `Bearer ${authToken}`;
  try {
    const res = await fetch(API_BASE + path, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data.error || 'Erro no servidor'), { status: res.status });
    return data;
  } catch (e) {
    if (e instanceof TypeError) throw Object.assign(new Error('offline'), { offline: true });
    throw e;
  }
}

async function loadProductsFromAPI() {
  try {
    const data = await api('GET', '/products', undefined);
    if (Array.isArray(data) && data.length) {
      products.length = 0;
      data.forEach(p => products.push(p));
      saveState();
    }
  } catch (e) { /* servidor offline — usa dados do localStorage */ }
}

async function syncSessionFromAPI() {
  if (!authToken) return;
  try {
    const user = await api('GET', '/auth/me', undefined);
    loggedIn = true;
    userData = {
      ...userData,
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone || userData.phone,
      cpf: user.cpf || userData.cpf,
      birth: user.birth || userData.birth,
      isAdmin: !!user.is_admin,
      points: user.points ?? userData.points,
    };
    document.getElementById('authBadge').classList.remove('hidden');
    updateAdminLinkVisibility();
  } catch (e) {
    authToken = null;
    localStorage.removeItem('lh_token');
    loggedIn = false;
  }
}

// Persistência local (localStorage)
function saveState(){
  try{
    localStorage.removeItem('lh_products'); // produtos sempre do código-fonte
    localStorage.setItem('lh_cart',JSON.stringify(cart));
    localStorage.setItem('lh_wishlist',JSON.stringify(Array.from(wishlist)));
    localStorage.setItem('lh_compare',JSON.stringify(compareList));
    localStorage.setItem('lh_user',JSON.stringify({loggedIn,userData}));
    localStorage.setItem('lh_coupons',JSON.stringify(coupons));
    localStorage.setItem('lh_orders',JSON.stringify(fakeOrders));
    localStorage.setItem('lh_discount',discount);
    localStorage.setItem('lh_discountType',discountType);
    localStorage.setItem('lh_discLabel',discLabel);
    localStorage.setItem('lh_currentCep',currentCEP);
    localStorage.setItem('lh_userReviews',JSON.stringify(userReviews));
    localStorage.setItem('lh_savedCards',JSON.stringify(savedCards));
    localStorage.setItem('lh_selectedCardId',selectedCardId);
    localStorage.setItem('lh_savedAddresses',JSON.stringify(savedAddresses));
  }catch(e){console.warn('saveState failed',e)}
}

function loadState(){
  try{
    localStorage.removeItem('lh_products'); // sempre usa produtos do código-fonte
    // produtos sempre vêm do código-fonte, nunca do localStorage
    const c = localStorage.getItem('lh_cart'); if(c) cart = JSON.parse(c);
    const w = localStorage.getItem('lh_wishlist'); if(w) wishlist = new Set(JSON.parse(w));
    const comp = localStorage.getItem('lh_compare'); if(comp) compareList = JSON.parse(comp);
    const u = localStorage.getItem('lh_user'); if(u){const ud=JSON.parse(u);loggedIn=ud.loggedIn;userData=ud.userData||userData}
    // Assegurar campo de pontos na carga
    if(userData && typeof userData.points === 'undefined') userData.points = 1240;
    const ord = localStorage.getItem('lh_orders'); if(ord) { const o = JSON.parse(ord); fakeOrders.length=0; o.forEach(x=>fakeOrders.push(x)); }
    const d = localStorage.getItem('lh_discount'); if(d) discount = parseInt(d,10)||0;
    const dt = localStorage.getItem('lh_discountType'); if(dt) discountType = dt;
    const dl = localStorage.getItem('lh_discLabel'); if(dl) discLabel = dl;
    const cep = localStorage.getItem('lh_currentCep'); if(cep) currentCEP = cep;
    const ur = localStorage.getItem('lh_userReviews'); if(ur) userReviews = JSON.parse(ur);
    const sc = localStorage.getItem('lh_savedCards'); if(sc) savedCards = JSON.parse(sc);
    const sci = localStorage.getItem('lh_selectedCardId'); if(sci) selectedCardId = sci;
    const sa = localStorage.getItem('lh_savedAddresses'); if(sa) savedAddresses = JSON.parse(sa);
  }catch(e){console.warn('loadState failed',e)}
}

/* ═══════════════ INIT ═══════════════ */
window.onload = async () => {
  loadState();
  // Carregar produtos e restaurar sessão via API em paralelo
  await Promise.all([loadProductsFromAPI(), syncSessionFromAPI()]);
  updateAdminLinkVisibility();
  initMarquee();
  renderHomeProd();
  renderTestis();
  renderBlogPreview();
  renderProdPage();
  renderFilters();
  renderProtesePage();
  renderBlog();
  renderFaq();
  renderLookbook("todos");
  updatePriceRange();
  updateProtesePriceRange();
  renderAdmin();
  renderAuthForm();
  updateCartUI();
  updateWishBadge();
  updateCompareBar();
  if(loggedIn) document.getElementById("authBadge").classList.remove("hidden");
  window.addEventListener("scroll",onScroll,{passive:true});
};

function onScroll(){
  document.getElementById("nav").classList.toggle("scrolled",window.scrollY>40);
}

function updateAdminLinkVisibility(){
  try{
    const el = document.getElementById('nl-admin');
    if(!el) return;
    el.classList.toggle('hidden', !(loggedIn && userData && userData.isAdmin));
  }catch(e){console.warn('updateAdminLinkVisibility',e)}
}

function requireAdminAuth(){
  const pw = prompt('Senha do painel administrativo:');
  if(!pw) return; // user cancelled
  if(pw === ADMIN_PW){
    loggedIn = true;
    userData.isAdmin = true;
    document.getElementById("authBadge").classList.remove("hidden");
    updateAdminLinkVisibility();
    saveState();
    toast('✅ Acesso administrativo liberado');
    renderAdmin();
  } else {
    toast('⚠️ Senha inválida');
    openAuth();
  }
}

function initMarquee(){
  const t = document.getElementById("marqueeEl");
  const items = [...marqueeItems,...marqueeItems,...marqueeItems];
  t.innerHTML = items.map(i=>`<span class="marquee-item">${i}</span>`).join("");
}

/* ═══════════════ PAGES ═══════════════ */
function goPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page-"+id).classList.add("active");
  document.querySelectorAll(".nav-links a").forEach(a=>a.classList.remove("active"));
  const nl = document.getElementById("nl-"+id);
  if(nl) nl.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="conta"&&!loggedIn){openAuth();return;}
  if(id==="conta") renderAccount();
  if(id==="admin"){
    if(!(loggedIn && userData && userData.isAdmin)){
      requireAdminAuth();
      return;
    }
    renderAdmin();
  }
  if(id==="produtos") renderProdPage();
  if(id==="comparar") renderComparePage();
  if(id==="wishlist") renderWishlistPage();
  if(id==="protese") renderProtesePage();
  if(id==="faq") renderFaq();
  if(id==="inspire") renderLookbook(lookbookActiveFilter||"todos");
  if(id==="home") { renderHomeProd(); renderTestis(); renderBlogPreview(); }
}

/* ═══════════════ PRODUCTS ═══════════════ */
function renderHomeProd(){
  const perucas = products.filter(p=>p.cat!=='Prótese Capilar');
  const proteses = products.filter(p=>p.cat==='Prótese Capilar');
  const gPerucas = document.getElementById("homeProdGridPerucas");
  const gProtese = document.getElementById("homeProdGridProtese");
  if(gPerucas) gPerucas.innerHTML = perucas.slice(0,4).map(p=>prodCardHTML(p)).join("");
  if(gProtese) gProtese.innerHTML = proteses.slice(0,4).map(p=>prodCardHTML(p)).join("");
}

function renderProdPage(){
  const list = getFilteredSorted();
  document.getElementById("prodGrid").innerHTML = list.map(p=>prodCardHTML(p)).join("");
  document.getElementById("prodCount").textContent = `${list.length} produto${list.length!==1?"s":""} encontrado${list.length!==1?"s":""}`;
}

function getFilteredSorted(){
  const perucas = products.filter(p=>p.cat!=='Prótese Capilar');
  let list = activeFilter==="Todos"?[...perucas]:perucas.filter(p=>p.cat===activeFilter);
  // busca
  const q = (document.getElementById("sidebarSearch")?.value || document.getElementById("searchQ")?.value || "").toLowerCase();
  if(q) list = list.filter(p=>p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q));
  // faixa de preço
  const minV = parseInt(document.getElementById("sliderMin")?.value||"0");
  const maxV = parseInt(document.getElementById("sliderMax")?.value||"2500");
  list = list.filter(p=>p.price>=minV && p.price<=maxV);
  // só em estoque
  if(document.getElementById("filterInStock")?.checked) list = list.filter(p=>p.stock>0);
  // ordenação
  const sort = document.querySelector("input[name='sort']:checked")?.value||"default";
  if(sort==="price-asc") list.sort((a,b)=>a.price-b.price);
  else if(sort==="price-desc") list.sort((a,b)=>b.price-a.price);
  else if(sort==="rating") list.sort((a,b)=>b.rating-a.rating);
  else if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));
  // empty state
  const empty = document.getElementById("prodEmpty");
  if(empty) empty.classList.toggle("hidden", list.length>0);
  return list;
}

function prodCardHTML(p){
  const disc = p.old?Math.round((1-p.price/p.old)*100):0;
  const low = p.stock<=5;
  const cardImg = (p.images && p.images.length)
    ? `<img src="${p.images[0]}" alt="${p.name}" class="prod-card-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : "";
  return `<div class="prod-card">
    <div class="prod-img" onclick="openProductModal(${p.id})" style="cursor:pointer">
      ${cardImg}
      <span class="prod-emoji" style="${cardImg?"display:none":""}">${p.emoji}</span>
      ${p.badge?`<span class="prod-badge badge-${p.badge.replace(" ","-").toLowerCase()}">${p.badge}</span>`:""}
      ${low?`<span class="prod-stock">Últimas unidades!</span>`:""}
      <button class="prod-quick" onclick="event.stopPropagation();addToCart(${p.id})">+ Adicionar ao Carrinho</button>
      <button class="prod-wishlist${wishlist.has(p.id)?" on":""}" onclick="event.stopPropagation();toggleWish(${p.id})">${wishlist.has(p.id)?"❤️":"🤍"}</button>
    </div>
    <div onclick="openProductModal(${p.id})">
      <div class="prod-cat">${p.cat}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-bottom">
        <span class="prod-price">R$ ${p.price.toLocaleString("pt-BR")}</span>
        ${p.old?`<span class="prod-old">R$ ${p.old.toLocaleString("pt-BR")}</span><span class="prod-disc">-${disc}%</span>`:""}
        <span class="prod-stars" style="margin-left:auto">★ ${p.rating}</span>
      </div>
      <div class="prod-stock-info${low?" low":""}">${low?`⚠️ Apenas ${p.stock} restantes`:`${p.stock} em estoque`}</div>
    </div>
    <div style="display:flex;gap:.4rem;margin-top:.75rem">
      <button class="btn-sm" onclick="addToCompare(${p.id})">⚖️ Comparar</button>
      <button class="btn-sm" onclick="toggleWish(${p.id})">${wishlist.has(p.id)?"❤️ Salvo":"🤍 Salvar"}</button>
    </div>
  </div>`;
}

function renderFilters(){
  const cats = ["Todos",...new Set(products.filter(p=>p.cat!=='Prótese Capilar').map(p=>p.cat))];
  document.getElementById("prodFilters").innerHTML = cats.map(c=>`<button class="filter-btn${c===activeFilter?" on":""}" onclick="setFilter('${c}')">${c}</button>`).join("");
}

function setFilter(c){activeFilter=c;renderFilters();renderProdPage();}
function sortProducts(){renderProdPage();}
let _searchTimer;
function liveSearch(){
  clearTimeout(_searchTimer);
  _searchTimer=setTimeout(()=>{renderHomeProd();renderProdPage();},180);
}

/* ═══════════════ PRODUCT MODAL ═══════════════ */
function openProductModal(id){
  const p = products.find(pr => pr.id === id);
  if(!p) return;
  currentProd = p; pmQty = 1;
  const disc = p.old?Math.round((1-p.price/p.old)*100):0;
  document.getElementById("pmImg").innerHTML = renderProductGallery(p);
  document.getElementById("pmInfo").innerHTML = `
    <span class="pm-tag">${p.cat}</span>
    <h2 class="pm-name">${p.name}</h2>
    <div class="pm-price-row">
      <span class="pm-price">R$ ${p.price.toLocaleString("pt-BR")}</span>
      ${p.old?`<span class="pm-old">R$ ${p.old.toLocaleString("pt-BR")}</span><span class="pm-disc-tag">-${disc}%</span>`:""}
    </div>
    <div class="pm-rating"><span class="pm-stars">${"★".repeat(Math.round(p.rating))}</span><span>${p.rating} (${p.reviews} avaliações)</span></div>
    <p class="pm-desc">${p.desc}</p>
    ${(()=>{
      const cd=p.colorData&&p.colorData.length?p.colorData:null;
      if(cd){
        const swatches=cd.map((c,i)=>`<div class="color-swatch${i===0?" on":""}" style="background:${c.hex}" onclick="swatchClick(this)" data-img="${c.img}" data-name="${c.name}" title="Cor ${c.name}"></div>`).join("");
        return `<div class="pm-opt-title">Cor — <span id="pmColorName" style="color:var(--gold);font-weight:500">${cd[0].name}</span></div><div class="pm-colors">${swatches}</div>`;
      }
      return `<div class="pm-opt-title">Cor</div><div class="pm-colors">${p.colors.map((c,i)=>`<div class="color-swatch${i===0?" on":""}" style="background:${c}" onclick="swatchClick(this)"></div>`).join("")}</div>`;
    })()}
    <div class="pm-qty">
      <div class="pm-qty-ctrl">
        <button onclick="pmQtyChange(-1)">−</button>
        <span class="pm-qty-n" id="pmQtyN">1</span>
        <button onclick="pmQtyChange(1)">+</button>
      </div>
      <button class="pm-atc" onclick="addToCart(${p.id},pmQty);closeProdModal()">Adicionar ao Carrinho</button>
    </div>
    <div style="display:flex;gap:.75rem;margin-bottom:1.5rem">
      <button class="btn-sm" onclick="toggleWish(${p.id})">${wishlist.has(p.id)?"❤️ Salvo":"🤍 Salvar"}</button>
      <button class="btn-sm" onclick="addToCompare(${p.id})">⚖️ Comparar</button>
    </div>
    <div class="pm-features">${p.features.map(f=>`<div class="pm-feature"><span class="pm-feature-check">✓</span>${f}</div>`).join("")}</div>
    <div class="pm-related">
      <div class="pm-related-title">Você também pode gostar</div>
      <div class="related-grid">${(products.filter(r=>r.id!==p.id&&r.cat===p.cat).slice(0,3).length?products.filter(r=>r.id!==p.id&&r.cat===p.cat).slice(0,3):products.filter(r=>r.id!==p.id).slice(0,3)).map(r=>`<div class="related-item" onclick="openProductModal(${r.id})"><div class="related-img-wrap"><img src="${r.images&&r.images[0]?r.images[0]:'img/placeholder.svg'}" alt="${r.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.innerHTML='<span style=font-size:2rem>${r.emoji}</span>'"></div><div class="related-name">${r.name}</div><div class="related-price">R$ ${r.price.toLocaleString("pt-BR")}</div></div>`).join("")}</div>
    </div>
    <div class="pm-related" style="border-top:1px solid var(--gray-200);padding-top:1.5rem;margin-top:0">
      <div class="pm-related-title">Avaliações dos Clientes</div>
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem">
        <div style="font-family:var(--font-display);font-size:3rem;font-weight:300">${p.rating}</div>
        <div><div style="color:var(--gold);font-size:1rem">${"★".repeat(Math.round(p.rating))}</div><div style="font-size:.75rem;color:var(--gray-400)">${p.reviews} avaliações</div></div>
      </div>
      <div class="rating-form">
        <div style="font-size:.8rem;font-weight:500;margin-bottom:.75rem">Deixe sua avaliação</div>
        <div class="rating-stars-input" id="ratingStars">
          <span class="rating-star" onclick="setRating(1)" onmouseover="hoverRating(1)" onmouseout="unhoverRating()">★</span>
          <span class="rating-star" onclick="setRating(2)" onmouseover="hoverRating(2)" onmouseout="unhoverRating()">★</span>
          <span class="rating-star" onclick="setRating(3)" onmouseover="hoverRating(3)" onmouseout="unhoverRating()">★</span>
          <span class="rating-star" onclick="setRating(4)" onmouseover="hoverRating(4)" onmouseout="unhoverRating()">★</span>
          <span class="rating-star" onclick="setRating(5)" onmouseover="hoverRating(5)" onmouseout="unhoverRating()">★</span>
        </div>
        <div class="fg"><label>Título</label><input type="text" placeholder="Resumo da sua experiência"></div>
        <div class="fg"><label>Comentário</label><textarea style="border:1px solid var(--gray-200);padding:10px;font-size:.82rem;outline:none;resize:vertical;min-height:80px" placeholder="Conte mais sobre o produto..."></textarea></div>
        <button class="step-btn" style="max-width:180px" onclick="submitReview()">Enviar Avaliação</button>
      </div>
    </div>
    ${renderBundleSection(p)}
  `;
  document.getElementById("prodOv").classList.add("on");
  document.body.style.overflow = "hidden";
}

function closeProdModal(e){
  if(!e||e.target===document.getElementById("prodOv")){
    document.getElementById("prodOv").classList.remove("on");
    document.body.style.overflow = "";
  }
}

function swatchClick(el){
  document.querySelectorAll(".color-swatch").forEach(s=>s.classList.remove("on"));
  el.classList.add("on");
  const img=el.dataset.img;
  if(img){
    switchGalleryImg(img,null);
    const slug=img.split("/").pop().split("?")[0];
    document.querySelectorAll(".pm-gallery-thumb").forEach(t=>{
      const src=(t.querySelector("img")||{}).src||"";
      t.classList.toggle("on",src.split("/").pop().split("?")[0]===slug);
    });
  }
  const name=el.dataset.name;
  const nameEl=document.getElementById("pmColorName");
  if(nameEl&&name) nameEl.textContent=name;
}
function sizeClick(el){document.querySelectorAll(".size-opt").forEach(s=>s.classList.remove("on"));el.classList.add("on")}
function pmQtyChange(d){pmQty=Math.max(1,pmQty+d);const n=document.getElementById("pmQtyN");if(n)n.textContent=pmQty;}

let selectedRating = 0;
function setRating(n){selectedRating=n;updateStars();}
function hoverRating(n){document.querySelectorAll(".rating-star").forEach((s,i)=>{s.classList.toggle("hover",i<n);});}
function unhoverRating(){document.querySelectorAll(".rating-star").forEach((s,i)=>s.classList.toggle("on",i<selectedRating));}
function updateStars(){document.querySelectorAll(".rating-star").forEach((s,i)=>{s.classList.toggle("on",i<selectedRating);s.classList.remove("hover");});}
async function submitReview(){
  if(!selectedRating){toast("⭐ Selecione uma nota primeiro!");return;}
  if(!currentProd){toast('Erro: produto não encontrado');return;}
  if(!loggedIn){toast('⚠️ Faça login para avaliar');openAuth();return;}
  const form = document.querySelector('#prodModal .rating-form');
  const title = form?.querySelector('input')?.value || '';
  const comment = form?.querySelector('textarea')?.value || '';
  try{
    await api('POST','/reviews',{product_id:currentProd.id,rating:selectedRating,title,comment});
    // Recarregar produtos para pegar rating atualizado
    await loadProductsFromAPI();
  }catch(e){
    // Fallback local
    const oldCount=currentProd.reviews||0;
    const oldRating=currentProd.rating||0;
    const newCount=oldCount+1;
    currentProd.reviews=newCount;
    currentProd.rating=Math.round(((oldRating*oldCount)+selectedRating)/newCount*10)/10;
  }
  const review={productId:currentProd.id,rating:selectedRating,title,comment,author:loggedIn?userData.name:'Cliente',date:new Date().toLocaleDateString('pt-BR')};
  if(!currentProd.reviewsData) currentProd.reviewsData=[];
  currentProd.reviewsData.unshift(review);
  userReviews.unshift(review);
  toast("✅ Avaliação enviada! Obrigada!");
  closeProdModal();
  renderProdPage();
  renderHomeProd();
  saveState();
}

/* ═══════════════ CART ═══════════════ */
function addToCart(id, qty=1){
  const p = products.find(prod => prod.id === id);
  if(!p) return;
  if(p.stock <= 0){
    toast(`⚠️ Desculpe, o produto "${p.name}" está esgotado!`);
    return;
  }
  const existing = cart.find(i=>i.id===id);
  const currentQty = existing ? existing.qty : 0;
  if(currentQty + qty > p.stock){
    toast(`⚠️ Apenas ${p.stock} unidades disponíveis no estoque!`);
    return;
  }
  if(existing) existing.qty+=qty;
  else cart.push({...p,qty});
  updateCartUI();
  toast(`✨ ${p.name} adicionado!`);
  saveState();
}

// persist cart changes
function removeFromCart(id){cart=cart.filter(i=>i.id!==id);updateCartUI();saveState();}
function changeQty(id,d){
  const item=cart.find(i=>i.id===id);
  if(item){item.qty+=d;if(item.qty<=0)removeFromCart(id);else {updateCartUI();saveState();}}
}

function updateCartUI(){
  const total = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("cartCount").textContent = total;
  renderCartBody();
}

function renderCartBody(){
  const body = document.getElementById("cartBody");
  const ft = document.getElementById("cartFt");
  document.getElementById("cartHdCount").textContent = `${cart.reduce((s,i)=>s+i.qty,0)} itens`;
  if(!cart.length){
    body.innerHTML=`<div class="cart-empty"><span class="cart-empty-icon">🛍️</span><p>Seu carrinho está vazio</p></div>`;
    ft.style.display="none";return;
  }
  body.innerHTML = `
    <div style="margin-bottom:1.25rem">
      <div style="display:flex;gap:.65rem;flex-wrap:wrap;margin-bottom:.75rem">
        <input type="text" id="cartCepInput" class="coupon-input" placeholder="Digite seu CEP" value="${currentCEP}" oninput="updateCartCep(this.value)">
        <button class="coupon-btn" onclick="updateCartCep(document.getElementById('cartCepInput').value)">Calcular Frete</button>
      </div>
      <div style="font-size:.78rem;color:var(--gray-500)">${currentCEP.length===8?`Frete calculado para CEP ${currentCEP}`:'Informe seu CEP para calcular o frete.'}</div>
    </div>
    ${cart.map(i=>`
      <div class="c-item">
        <div class="c-item-img"><img src="${i.images&&i.images[0]?i.images[0]:'img/placeholder.svg'}" alt="${i.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px" onerror="this.parentElement.innerHTML='<span style=font-size:2rem>${i.emoji}</span>'"></div>
        <div class="c-item-info">
          <div class="c-item-name">${i.name}</div>
          <div class="c-item-var">${i.cat}</div>
          <div class="c-item-row">
            <div class="qty-ctrl">
              <button class="qty-b" onclick="changeQty(${i.id},-1)">−</button>
              <span class="qty-n">${i.qty}</span>
              <button class="qty-b" onclick="changeQty(${i.id},1)">+</button>
            </div>
            <span class="c-item-price">R$ ${(i.price*i.qty).toLocaleString("pt-BR")}</span>
          </div>
          <button class="c-remove" onclick="removeFromCart(${i.id})">✕ remover</button>
        </div>
      </div>
    `).join("")}
  `;
  const sub = cart.reduce((s,i)=>s+(i.price*i.qty),0);
  const discAmt = discountType === "value" ? discount : Math.round(sub*(discount/100));
  const freteObj = _cepCache[currentCEP] || {price:0,days:0};
  const freteAmt = freteObj.price || 0;
  const total = Math.max(0, sub - discAmt + freteAmt);
  document.getElementById("cSubtotal").textContent = `R$ ${sub.toLocaleString("pt-BR")}`;
  const dl = document.getElementById("cDiscLine");
  if(discount>0){dl.style.display="flex";document.getElementById("cDisc").textContent=`-R$ ${discAmt.toLocaleString("pt-BR")}`;}
  else dl.style.display="none";
  document.getElementById("cTotal").textContent = `R$ ${total.toLocaleString("pt-BR")}`;
  try{
    const lines = document.querySelectorAll('#cartFt .cart-lines .cart-line');
    lines.forEach(l=>{
      const key = l.querySelector('span:first-child')?.textContent?.trim();
      if(key==='Frete'){
        const val = currentCEP.length===8? (freteAmt===0? 'Grátis ✓' : `R$ ${freteAmt.toLocaleString('pt-BR')}`) : 'Informe o CEP';
        l.querySelector('span:last-child').textContent = val;
      }
    });
  }catch(e){}
  ft.style.display = "block";
}

async function updateCartCep(v){
  const cep = (v||"").replace(/\D/g,"");
  currentCEP = cep;
  if(cep.length===8){
    const sub = cart.reduce((s,i)=>s+(i.price*i.qty),0);
    const frete = await computeFrete(cep, sub);
    const label = frete.label ? ` · ${frete.label}` : '';
    toast(`🚚 Frete: R$ ${frete.price.toLocaleString('pt-BR')} · ${frete.days} dias úteis${label}`);
  } else if(cep.length>0){
    toast('⚠️ Digite um CEP válido de 8 dígitos');
  }
  renderCartBody();
  saveState();
}

async function applyCoupon(){
  const code = document.getElementById("couponInput").value.trim().toUpperCase();
  if(!code){toast("⚠️ Informe um código de cupom");return;}
  // Tenta API; se falhar, usa cupons locais
  let applied = false;
  try{
    const c = await api('GET',`/coupons/${code}`,undefined);
    discount = c.value;
    discountType = c.type || 'percentage';
    discLabel = c.label;
    applied = true;
  }catch(e){}
  if(!applied){
    if(coupons[code]){
      discount = coupons[code].pct || coupons[code].value;
      discountType = typeof coupons[code].value !== 'undefined' ? "value" : "percentage";
      discLabel = coupons[code].label;
      applied = true;
    }
  }
  if(applied){
    renderCartBody();
    toast(`🎉 Cupom aplicado: ${discLabel}!`);
    saveState();
  } else {
    toast("❌ Cupom inválido ou expirado");
  }
}

function openCart(){renderCartBody();document.getElementById("cartOv").classList.add("on");document.getElementById("cartSide").classList.add("on");document.body.style.overflow="hidden";}
function closeCart(){document.getElementById("cartOv").classList.remove("on");document.getElementById("cartSide").classList.remove("on");document.body.style.overflow="";}

/* ═══════════════ CHECKOUT ═══════════════ */
function openCheckout(){
  if(!cart.length){toast("Carrinho vazio!");return;}
  closeCart();checkStep=1;payMethod="pix";
  document.getElementById("successScreen").classList.add("hidden");
  document.getElementById("checkBody").classList.remove("hidden");
  renderCheckStep();
  document.getElementById("checkOv").classList.add("on");
  document.body.style.overflow="hidden";
}
function closeCheckout(){document.getElementById("checkOv").classList.remove("on");document.body.style.overflow="";}

function updateStepDots(){
  const labels=["Dados","Entrega","Pagamento"];
  [1,2,3].forEach(i=>{
    const d=document.getElementById("sd"+i);
    d.className="step-dot"+(i<checkStep?" done":(i===checkStep?" active":""));
    d.style.width=i===checkStep?"24px":"8px";
  });
  document.getElementById("sl1").textContent=labels[checkStep-1];
  document.getElementById("sl1").className="step-label active";
}

function renderCheckStep(){
  updateStepDots();
  const sub=cart.reduce((s,i)=>s+(i.price*i.qty),0);
  const discAmt=discountType === "value" ? discount : Math.round(sub*(discount/100));
  const freteObj = _cepCache[currentCEP] || {price:0,days:0};
  const freteAmt = freteObj.price || 0;
  const total=Math.max(0, sub-discAmt+freteAmt);
  const orderSummary=`<div class="order-mini">
    ${cart.map(i=>`<div class="order-mini-line"><span style="display:flex;align-items:center;gap:8px"><img src="${i.images&&i.images[0]?i.images[0]:'img/placeholder.svg'}" alt="${i.name}" style="width:32px;height:32px;object-fit:cover;border-radius:4px" onerror="this.style.display='none'">${i.name} ×${i.qty}</span><span>R$ ${(i.price*i.qty).toLocaleString("pt-BR")}</span></div>`).join("")}
    ${discount>0?`<div class="order-mini-line" style="color:var(--gold)"><span>Desconto (${discLabel})</span><span>-R$ ${discAmt.toLocaleString("pt-BR")}</span></div>`:""}
    <div class="order-mini-line"><span>Frete</span><span id="orderFreteLine" style="color:var(--gold)">Calcular no checkout</span></div>
    <div class="order-mini-line total"><span>Total</span><span>R$ ${total.toLocaleString("pt-BR")}</span></div>
  </div>`;

  const steps=[
    `<div class="form-sec"><h3 class="form-sec-title">Informações Pessoais</h3>
      <div class="frow"><div class="fg"><label>Nome</label><input id="ck-name" type="text" placeholder="Seu nome" value="${loggedIn?userData.name:""}"></div><div class="fg"><label>Sobrenome</label><input type="text" placeholder="Sobrenome"></div></div>
      <div class="fg"><label>E-mail</label><input id="ck-email" type="email" placeholder="seu@email.com" value="${loggedIn?userData.email:""}"></div>
      <div class="frow"><div class="fg"><label>Telefone</label><input type="tel" placeholder="(00) 00000-0000"></div><div class="fg"><label>CPF</label><input type="text" placeholder="000.000.000-00"></div></div>
    </div>${orderSummary}<button class="step-btn" onclick="nextCheckStep()">Próximo: Endereço →</button>`,
    `<div class="form-sec"><h3 class="form-sec-title">Endereço de Entrega</h3>
      <div class="frow"><div class="fg"><label>CEP</label><input type="text" id="ck-cep" placeholder="00000-000" oninput="fetchCEP(this.value)"></div><div class="fg" style="justify-content:flex-end;padding-top:20px"><span id="cepStatus" style="font-size:.72rem;color:var(--gold)"></span></div></div>
      <div class="fg"><label>Endereço</label><input type="text" id="ck-rua" placeholder="Rua, Av..."></div>
      <div class="frow"><div class="fg"><label>Número</label><input type="text" placeholder="123"></div><div class="fg"><label>Complemento</label><input type="text" placeholder="Apto, sala..."></div></div>
      <div class="frow"><div class="fg"><label>Bairro</label><input id="ck-bairro" type="text" placeholder="Bairro"></div><div class="fg"><label>Cidade</label><input id="ck-cidade" type="text" placeholder="Cidade"></div></div>
      <div class="fg"><label>Estado</label><select id="ck-estado"><option>Selecione...</option><option>SP</option><option>RJ</option><option>MG</option><option>RS</option><option>PR</option><option>SC</option><option>BA</option><option>GO</option><option>Outro</option></select></div>
    </div>${orderSummary}<button class="step-btn" onclick="nextCheckStep()">Próximo: Pagamento →</button>
    <button class="step-btn-back" onclick="prevCheckStep()">← Voltar</button>`,
    `<div class="form-sec"><h3 class="form-sec-title">Forma de Pagamento</h3>
      <div class="pay-methods">
        <div class="pay-m on" id="pm-pix" onclick="selPay('pix')"><span class="pay-m-icon">📱</span><span class="pay-m-name">Pix</span><div style="font-size:.62rem;color:var(--gold);margin-top:.25rem">-5%</div></div>
        <div class="pay-m" id="pm-card" onclick="selPay('card')"><span class="pay-m-icon">💳</span><span class="pay-m-name">Cartão</span></div>
        <div class="pay-m" id="pm-boleto" onclick="selPay('boleto')"><span class="pay-m-icon">📄</span><span class="pay-m-name">Boleto</span></div>
      </div>
      <div id="payFields"></div>
    </div>${orderSummary}<button class="step-btn" onclick="placeOrder()">✓ Confirmar Pedido</button>
    <button class="step-btn-back" onclick="prevCheckStep()">← Voltar</button>`,
  ];
  document.getElementById("checkBody").innerHTML=steps[checkStep-1];
  if(checkStep===3) renderPayFields();
}

function selPay(m){
  payMethod=m;
  ["pix","card","boleto"].forEach(k=>{const el=document.getElementById("pm-"+k);if(el)el.classList.toggle("on",k===m);});
  renderPayFields();
}

function renderPayFields(){
  const el=document.getElementById("payFields");if(!el)return;
  const sub=cart.reduce((s,i)=>s+(i.price*i.qty),0);
  const discAmt=discountType === "value" ? discount : Math.round(sub*(discount/100));
  const total=Math.max(0, sub-discAmt);
  if(payMethod==="pix"){
    const pixTotal=Math.round(total*0.95);
    const pixCode=generatePixCode(pixTotal);
    el.innerHTML=`<div class="pix-box"><div id="pixQrDiv" style="width:140px;height:140px;margin:0 auto 1rem;background:var(--white);padding:6px;border:2px solid var(--gray-200)"></div><p style="font-size:.82rem;color:var(--gray-600);margin-bottom:.75rem">Escaneie o QR Code ou copie o código abaixo</p><div class="pix-code" onclick="copyPix(this)">${pixCode}</div><p style="font-size:.7rem;color:var(--gray-400)">Clique no código EMV para copiar · Ou use a chave: <strong>46296221878</strong> (CPF)</p><div style="background:rgba(201,168,76,.1);color:var(--gold);padding:.6rem;font-size:.78rem;margin-top:.75rem">💰 Total com desconto Pix: <strong>R$ ${pixTotal.toLocaleString("pt-BR")}</strong> (5% OFF)</div></div>`;
    setTimeout(()=>{
      const qrEl=document.getElementById("pixQrDiv");
      if(qrEl&&window.QRCode){
        try{new QRCode(qrEl,{text:pixCode,width:128,height:128,colorDark:"#0a0a0a",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M});}
        catch(e){qrEl.innerHTML='<div style="font-size:4rem;line-height:140px;text-align:center">📱</div>';}
      }
    },80);
  } else if(payMethod==="card"){
    const savedList = savedCards.length ? savedCards.map(card=>`
      <button class="btn-sm ${card.id===selectedCardId?'primary':''}" onclick="selectSavedCard('${card.id}')">${card.masked} · ${card.exp}</button>`).join("") : "";
    el.innerHTML=`${savedList?`<div style="margin-bottom:1rem"><div style="font-weight:600;margin-bottom:.5rem">Cartões salvos</div><div style="display:flex;flex-wrap:wrap;gap:.5rem">${savedList}</div></div>`:""}
    <div class="fg"><label>Número do Cartão</label><input type="text" placeholder="0000 0000 0000 0000" maxlength="19"></div>
    <div class="frow"><div class="fg"><label>Validade</label><input type="text" placeholder="MM/AA" maxlength="5"></div><div class="fg"><label>CVV</label><input type="text" placeholder="000" maxlength="3"></div></div>
    <div class="fg"><label>Nome no Cartão</label><input type="text" placeholder="NOME SOBRENOME"></div>
    <div class="fg"><label>Parcelas</label><select>${[1,2,3,6,10,12].map(n=>`<option>${n}x de R$ ${Math.ceil(total/n).toLocaleString("pt-BR")} ${n>3?"(com juros)":"(sem juros)"}</option>`).join("")}</select></div>`;
  } else {
    el.innerHTML=`<div style="text-align:center;padding:2rem;background:var(--gray-50)"><div style="font-size:3rem;margin-bottom:.75rem">📄</div><p style="font-size:.85rem;color:var(--gray-600)">Boleto gerado após a confirmação.</p><p style="font-size:.78rem;color:var(--gray-400);margin-top:.4rem">Vencimento em 3 dias úteis. Pagamento pode levar até 2 dias úteis para compensar.</p></div>`;
  }
}

async function fetchCEP(v){
  const cep=v.replace(/\D/g,"");
  if(cep.length!==8) return;
  const s=document.getElementById("cepStatus");
  if(s) s.textContent="⏳ Buscando...";
  try{
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    if(data.erro){if(s)s.textContent="❌ CEP não encontrado";toast("⚠️ CEP não encontrado");return;}
    const f=n=>document.getElementById("ck-"+n);
    if(f("rua")&&data.logradouro)f("rua").value=data.logradouro;
    if(f("bairro")&&data.bairro)f("bairro").value=data.bairro;
    if(f("cidade")&&data.localidade)f("cidade").value=data.localidade;
    const sel=document.getElementById("ck-estado");
    if(sel&&data.uf){for(let i=0;i<sel.options.length;i++){if(sel.options[i].value===data.uf||sel.options[i].text===data.uf){sel.selectedIndex=i;break;}}}
    if(s)s.textContent=`✓ ${data.localidade} — ${data.uf}`;
    currentCEP=cep;
    const sub=cart.reduce((s,i)=>s+(i.price*i.qty),0);
    const frete=await computeFrete(currentCEP,sub);
    const orderFreteEl=document.getElementById("orderFreteLine");
    if(orderFreteEl)orderFreteEl.textContent=frete.price===0?"Grátis ✓":`R$ ${frete.price.toLocaleString("pt-BR")} · ${frete.days} dias úteis`;
    renderCartBody();
  }catch(e){
    if(s)s.textContent="⚠️ Erro ao buscar";
    toast("⚠️ Não foi possível buscar o CEP. Preencha manualmente.");
  }
}

// Tabela por UF baseada nas faixas reais dos Correios (PAC)
const _freteUF = {
  SP:{price:18,days:2}, RJ:{price:22,days:3}, MG:{price:22,days:3}, ES:{price:25,days:4},
  PR:{price:25,days:4}, SC:{price:25,days:4}, RS:{price:28,days:5},
  GO:{price:30,days:5}, DF:{price:30,days:5}, MT:{price:35,days:6}, MS:{price:33,days:6},
  BA:{price:32,days:6}, SE:{price:34,days:7}, AL:{price:34,days:7}, PE:{price:34,days:7},
  PB:{price:35,days:7}, RN:{price:35,days:7}, CE:{price:35,days:7}, PI:{price:37,days:8},
  MA:{price:37,days:8}, PA:{price:40,days:9}, TO:{price:38,days:8}, RO:{price:42,days:10},
  AC:{price:45,days:12}, AM:{price:45,days:12}, RR:{price:48,days:14}, AP:{price:45,days:12},
};
let _cepCache = {};

async function computeFrete(cep, subtotal){
  if(!cep || cep.length < 8) return {price:0,days:0,label:''};
  const clean = cep.replace(/\D/g,'');
  if(clean.length !== 8) return {price:0,days:0,label:''};
  if(_cepCache[clean]) return _cepCache[clean];
  try{
    const res = await fetch(`https://viacep.com.br/ws/${clean}/json/`);
    const data = await res.json();
    if(data.erro) return {price:35,days:7,label:'CEP não encontrado'};
    const uf = data.uf;
    const entry = _freteUF[uf] || {price:38,days:8};
    const result = {...entry, label:`${data.localidade} - ${uf}`};
    _cepCache[clean] = result;
    return result;
  }catch(e){
    const prefix = clean.substr(0,2);
    const fallback = {'01':{price:18,days:2},'02':{price:18,days:2},'03':{price:18,days:2},'04':{price:18,days:2}};
    return fallback[prefix] || {price:35,days:7,label:''};
  }
}

function copyPix(el){navigator.clipboard?.writeText(el.textContent).catch(()=>{});toast("📋 Código Pix copiado!");}

function nextCheckStep(){checkStep=Math.min(3,checkStep+1);renderCheckStep();}
function prevCheckStep(){checkStep=Math.max(1,checkStep-1);renderCheckStep();}

async function placeOrder(){
  const subSnap = cart.reduce((s,i)=>s+(i.price*i.qty),0);
  const discAmtSnap = discountType === "value" ? discount : Math.round(subSnap * (discount/100));
  const freteSnapObj = await computeFrete(currentCEP, subSnap);
  const freteAmtSnap = freteSnapObj.price || 0;
  const totalPaid = Math.max(0, subSnap - discAmtSnap + freteAmtSnap);
  const itemsSnap = [...cart];
  let orderNum = "LH-"+Math.random().toString(36).substr(2,6).toUpperCase();

  if(loggedIn && authToken){
    try{
      const res = await api('POST','/orders',{
        items: cart.map(i=>({id:i.id,qty:i.qty,name:i.name,price:i.price,emoji:i.emoji})),
        total: totalPaid,
      });
      orderNum = res.id || res.order_code || orderNum;
      // Recarregar produtos com estoque atualizado do servidor
      await loadProductsFromAPI();
    }catch(e){
      // Fallback local: decrementar estoque manualmente
      cart.forEach(item=>{
        const prod=products.find(p=>p.id===item.id);
        if(prod) prod.stock=Math.max(0,prod.stock-item.qty);
      });
    }
  } else {
    // Sem sessão ativa: apenas decrementa localmente
    cart.forEach(item=>{
      const prod=products.find(p=>p.id===item.id);
      if(prod) prod.stock=Math.max(0,prod.stock-item.qty);
    });
  }

  if(loggedIn) userData.points=(userData.points||0)+totalPaid;

  const orderObj={id:orderNum,date:new Date().toLocaleDateString('pt-BR'),status:'processing',items:cart.map(i=>i.id),total:totalPaid};
  fakeOrders.unshift(orderObj);
  if(fakeOrders.length>50) fakeOrders.pop();
  saveState();

  renderHomeProd();
  renderProdPage();
  renderFilters();

  document.getElementById("checkBody").classList.add("hidden");
  const ss=document.getElementById("successScreen");
  ss.classList.remove("hidden");
  ss.innerHTML=`
    <span class="success-icon">🎉</span>
    <h2 class="success-h">Pedido Confirmado!</h2>
    <p class="success-p">Obrigada pela sua compra, ${loggedIn?userData.name:"cliente"}! Você receberá um e-mail de confirmação em instantes.</p>
    <div class="order-tag">Pedido ${orderNum}</div>
    <div class="order-timeline">
      <div class="timeline-step"><div class="tl-dot">✓</div><div class="tl-info"><h5>Pedido Confirmado</h5><p>Agora mesmo</p></div></div>
      <div class="timeline-step"><div class="tl-dot gray">📦</div><div class="tl-info"><h5>Em Preparação</h5><p>Previsão: amanhã</p></div></div>
      <div class="timeline-step"><div class="tl-dot gray">🚚</div><div class="tl-info"><h5>Em Transporte</h5><p>Previsão: ${new Date(Date.now()+3*864e5).toLocaleDateString("pt-BR")}</p></div></div>
      <div class="timeline-step"><div class="tl-dot gray">🏠</div><div class="tl-info"><h5>Entregue</h5><p>Previsão: ${new Date(Date.now()+5*864e5).toLocaleDateString("pt-BR")}</p></div></div>
    </div>
    <button class="step-btn" onclick="finishOrder()">Continuar Comprando</button>
  `;
  sendOrderEmail(orderNum, itemsSnap, totalPaid, freteAmtSnap);
  setTimeout(()=>showEmailModal(orderNum,itemsSnap,totalPaid),2200);
}

function finishOrder(){cart=[];discount=0;discLabel="";updateCartUI();saveState();closeCheckout();toast("🎀 Obrigada pela sua compra!");}

/* ═══════════════ WISHLIST ═══════════════ */
function toggleWish(id){
  if(wishlist.has(id)){wishlist.delete(id);toast("Removido dos favoritos");}
  else{wishlist.add(id);toast("❤️ Adicionado aos favoritos!");}
  updateWishBadge();renderHomeProd();renderProdPage();
  saveState();
}

function updateWishBadge(){
  const b=document.getElementById("wishBadge");
  b.textContent=wishlist.size;
  b.classList.toggle("hidden",wishlist.size===0);
}

function renderWishlistPage(){
  const el=document.getElementById("wishlistGrid");
  const items=products.filter(p=>wishlist.has(p.id));
  if(!items.length){el.innerHTML=`<p style="color:var(--gray-400);font-size:.9rem">Você ainda não salvou nenhum produto. <span style="color:var(--gold);cursor:pointer" onclick="goPage('produtos')">Explorar coleção →</span></p>`;return;}
  el.innerHTML=`<div class="products-grid">${items.map(p=>prodCardHTML(p)).join("")}</div>`;
}

/* ═══════════════ COMPARE ═══════════════ */
function addToCompare(id){
  if(compareList.includes(id)){compareList=compareList.filter(i=>i!==id);toast("Removido da comparação");}
  else if(compareList.length>=3){toast("⚠️ Máximo 3 produtos para comparar");}
  else{compareList.push(id);toast("⚖️ Adicionado para comparar!");}
  updateCompareBar();
  saveState();
}

function updateCompareBar(){
  const bar=document.getElementById("compareBar");
  const mini=document.getElementById("compareItemsMini");
  bar.classList.toggle("show",compareList.length>=2);
  mini.innerHTML=compareList.map(id=>{const p=products.find(pr=>pr.id===id);if(!p)return"";return`<span class="compare-mini-item">${p.emoji} ${p.name.split(" ")[0]}</span>`;}).join("");
}

function clearCompare(){compareList=[];updateCompareBar();}

function renderComparePage(){
  if(compareList.length<2){document.getElementById("compareGrid").innerHTML=`<p style="color:var(--gray-400)">Adicione pelo menos 2 produtos para comparar. Use o botão "Comparar" nos produtos.</p>`;return;}
  const prods=compareList.map(id=>products.find(pr=>pr.id===id)).filter(Boolean);
  const attrs=[["Categoria","cat"],["Preço","price"],["Fibra",null],["Cachos",null],["Estoque","stock"],["Rating","rating"]];
  document.getElementById("compareGrid").innerHTML=`
    <div class="compare-grid">
      <div class="compare-cell compare-header"><span class="compare-label">Produto</span></div>
      ${prods.map(p=>`<div class="compare-cell compare-header">
        <span class="compare-emoji">${p.emoji}</span>
        <div class="compare-prod-name">${p.name}</div>
        <div style="font-size:.78rem;color:var(--gold)">R$ ${p.price.toLocaleString("pt-BR")}</div>
        <button class="btn-sm primary" style="margin-top:.75rem" onclick="addToCart(${p.id})">+ Carrinho</button>
      </div>`).join("")}
      <div class="compare-cell"><span class="compare-label">Categoria</span></div>
      ${prods.map(p=>`<div class="compare-cell">${p.cat}</div>`).join("")}
      <div class="compare-cell"><span class="compare-label">Preço</span></div>
      ${prods.map(p=>`<div class="compare-cell"><strong>R$ ${p.price.toLocaleString("pt-BR")}</strong>${p.old?`<br><span style="font-size:.72rem;color:var(--gray-400);text-decoration:line-through">R$ ${p.old.toLocaleString("pt-BR")}</span>`:""}</div>`).join("")}
      <div class="compare-cell"><span class="compare-label">Avaliação</span></div>
      ${prods.map(p=>`<div class="compare-cell"><span style="color:var(--gold)">★</span> ${p.rating} (${p.reviews} avaliações)</div>`).join("")}
      <div class="compare-cell"><span class="compare-label">Estoque</span></div>
      ${prods.map(p=>`<div class="compare-cell">${p.stock<=5?`<span style="color:var(--red)">⚠️ ${p.stock} unid.</span>`:`${p.stock} unid.`}</div>`).join("")}
      <div class="compare-cell"><span class="compare-label">Diferenciais</span></div>
      ${prods.map(p=>`<div class="compare-cell"><ul style="list-style:none;font-size:.78rem">${p.features.map(f=>`<li style="margin-bottom:3px"><span class="compare-check">✓</span> ${f}</li>`).join("")}</ul></div>`).join("")}
    </div>`;
}

/* ═══════════════ AUTH ═══════════════ */
function openAuth(){
  if(loggedIn){goPage('conta');return;}
  authMode="login";renderAuthForm();
  document.getElementById("authOv").classList.add("on");
  document.body.style.overflow="hidden";
}
function closeAuth(e){
  if(!e||e.target===document.getElementById("authOv")){
    document.getElementById("authOv").classList.remove("on");
    document.body.style.overflow="";
  }
}
function authSwitch(m){
  authMode=m;
  document.getElementById("at-login").classList.toggle("on",m==="login");
  document.getElementById("at-signup").classList.toggle("on",m==="signup");
  renderAuthForm();
}
function renderAuthForm(){
  const el=document.getElementById("authForm");if(!el)return;
  if(authMode==="login"){
    el.innerHTML=`<div class="fg"><label>E-mail</label><input type="email" id="auth-email" placeholder="seu@email.com"></div>
    <div class="fg"><label>Senha</label><input type="password" id="auth-pass" placeholder="••••••••"></div>
    <button class="auth-submit" onclick="doLogin()">Entrar</button>
    <div class="auth-forgot" onclick="toast('📧 Link de recuperação enviado!')">Esqueceu a senha?</div>`;
  } else {
    el.innerHTML=`<div class="frow"><div class="fg"><label>Nome</label><input type="text" id="auth-name" placeholder="Seu nome"></div><div class="fg"><label>Sobrenome</label><input type="text" id="auth-lastname" placeholder="Sobrenome"></div></div>
    <div class="fg"><label>E-mail</label><input type="email" id="auth-email" placeholder="seu@email.com"></div>
    <div class="fg"><label>Senha</label><input type="password" id="auth-pass" placeholder="Mínimo 8 caracteres"></div>
    <div class="fg"><label>Confirmar Senha</label><input type="password" id="auth-pass-confirm" placeholder="Repita a senha"></div>
    <button class="auth-submit" onclick="doSignup()">Criar Conta Grátis</button>`;
  }
}
async function doLogin(){
  const email=document.getElementById("auth-email")?.value.trim()||"";
  const pass=document.getElementById("auth-pass")?.value||"";
  if(!email||!email.includes("@")){toast("⚠️ Informe um e-mail válido");return;}
  if(!pass){toast("⚠️ Informe a senha");return;}
  try{
    const res = await api('POST','/auth/login',{email,password:pass});
    authToken = res.token;
    localStorage.setItem('lh_token', authToken);
    loggedIn=true;
    userData = {...userData, id:res.user.id, name:res.user.name, email:res.user.email, isAdmin:!!res.user.is_admin, points:res.user.points||0};
    document.getElementById("authBadge").classList.remove("hidden");
    closeAuth();toast(`✅ Bem-vinda, ${userData.name}!`);
    updateAdminLinkVisibility();
    saveState();
  }catch(e){
    if(e.offline){
      // Fallback local quando servidor estiver offline
      loggedIn=true;userData.email=email;userData.name=email.split("@")[0].replace(/[0-9]/g,"").replace(/\./g,"").trim()||"Cliente";
      userData.isAdmin=(email.toLowerCase()==='Rafaelmuller111222333444@gmail.com');
      document.getElementById("authBadge").classList.remove("hidden");
      closeAuth();toast(`✅ Bem-vinda, ${userData.name}! (modo offline)`);
      updateAdminLinkVisibility();
      saveState();
    } else {
      toast(`⚠️ ${e.message}`);
    }
  }
}
async function doSignup(){
  const name=document.getElementById("auth-name")?.value.trim()||"";
  const email=document.getElementById("auth-email")?.value.trim()||"";
  const pass=document.getElementById("auth-pass")?.value||"";
  const confirm=document.getElementById("auth-pass-confirm")?.value||"";
  if(!name){toast("⚠️ Preencha seu nome");return;}
  if(!email||!email.includes("@")){toast("⚠️ Informe um e-mail válido");return;}
  if(pass.length<8){toast("⚠️ A senha deve ter pelo menos 8 caracteres");return;}
  if(pass!==confirm){toast("⚠️ As senhas não coincidem");return;}
  try{
    const res = await api('POST','/auth/register',{name,email,password:pass});
    authToken = res.token;
    localStorage.setItem('lh_token', authToken);
    loggedIn=true;
    userData = {...userData, id:res.user.id, name:res.user.name, email:res.user.email, isAdmin:!!res.user.is_admin, points:0};
    document.getElementById("authBadge").classList.remove("hidden");
    closeAuth();toast(`🎉 Conta criada! Bem-vinda, ${name}!`);
    updateAdminLinkVisibility();
    saveState();
  }catch(e){
    if(e.offline){
      loggedIn=true;userData.name=name;userData.email=email;userData.isAdmin=(email.toLowerCase()==='Rafaelmuller111222333444@gmail.com');
      document.getElementById("authBadge").classList.remove("hidden");
      closeAuth();toast(`🎉 Conta criada! Bem-vinda, ${name}! (modo offline)`);
      updateAdminLinkVisibility();
      saveState();
    } else {
      toast(`⚠️ ${e.message}`);
    }
  }
}
function socialLogin(provider){
  loggedIn=true;userData.name="Usuária";userData.email="cliente@ldlacesperucas.com.br";userData.isAdmin = false;
  document.getElementById("authBadge").classList.remove("hidden");
  updateAdminLinkVisibility();
  closeAuth();toast(`✅ Conectada com ${provider}!`);
}
function logout(){
  loggedIn=false;
  authToken=null;
  localStorage.removeItem('lh_token');
  document.getElementById("authBadge").classList.add("hidden");
  updateAdminLinkVisibility();
  goPage("home");toast("Até logo! 👋");
}

/* ═══════════════ ACCOUNT ═══════════════ */
function accTab(t){
  document.querySelectorAll(".account-section").forEach(s=>s.classList.remove("on"));
  document.querySelectorAll(".account-menu a").forEach(a=>a.classList.remove("on"));
  document.getElementById("as-"+t).classList.add("on");
  document.getElementById("am-"+t).classList.add("on");
  if(t==="pedidos") renderOrders();
  if(t==="avaliacoes") renderMyReviews();
  if(t==="pagamentos") syncAndRenderCards();
  if(t==="enderecos") syncAndRenderAddresses();
}

async function syncAndRenderCards(){
  if(authToken){
    try{
      const cards=await api('GET','/users/me/cards',undefined);
      if(Array.isArray(cards)){
        savedCards.length=0;
        cards.forEach(c=>savedCards.push(c));
        saveState();
      }
    }catch(e){}
  }
  renderSavedCards();
}

async function syncAndRenderAddresses(){
  if(authToken){
    try{
      const addrs=await api('GET','/users/me/addresses',undefined);
      if(Array.isArray(addrs)){
        savedAddresses.length=0;
        addrs.forEach(a=>savedAddresses.push(a));
        saveState();
      }
    }catch(e){}
  }
  renderAddresses();
}
function renderAccount(){
  document.getElementById("accName").textContent=userData.name;
  document.getElementById("accEmail").textContent=userData.email;
  document.getElementById("accAvatar").textContent=userData.name[0].toUpperCase();
  const fn=document.getElementById("acc-firstname"); if(fn) fn.value=userData.name.split(" ")[0]||userData.name;
  const ln=document.getElementById("acc-lastname"); if(ln) ln.value=userData.name.split(" ").slice(1).join(" ")||"";
  const em=document.getElementById("acc-email"); if(em) em.value=userData.email;
  const ph=document.getElementById("acc-phone"); if(ph) ph.value=userData.phone||"";
  const cpf=document.getElementById("acc-cpf"); if(cpf) cpf.value=userData.cpf||"";
  const birth=document.getElementById("acc-birth"); if(birth) birth.value=userData.birth||"";
  renderOrders();
  renderSavedCards();
  renderAddresses();
}
async function saveProfile(){
  const first=document.getElementById("acc-firstname")?.value.trim()||"";
  const last=document.getElementById("acc-lastname")?.value.trim()||"";
  const email=document.getElementById("acc-email")?.value.trim()||"";
  const phone=document.getElementById("acc-phone")?.value.trim()||"";
  const cpf=document.getElementById("acc-cpf")?.value.trim()||"";
  const birth=document.getElementById("acc-birth")?.value||"";
  if(!first||!email||!email.includes("@")){toast("⚠️ Preencha nome e e-mail válidos");return;}
  const name=`${first}${last?` ${last}`:""}`.trim();
  try{
    await api('PUT','/users/me/profile',{name,phone,cpf,birth});
  }catch(e){}
  userData.name=name;userData.email=email;userData.phone=phone;userData.cpf=cpf;userData.birth=birth;
  document.getElementById("accName").textContent=userData.name;
  document.getElementById("accEmail").textContent=userData.email;
  document.getElementById("accAvatar").textContent=userData.name[0].toUpperCase();
  saveState();
  toast("✅ Dados atualizados com sucesso!");
}

/* ═══════════════ ENDEREÇOS DINÂMICOS ═══════════════ */
function renderAddresses(){
  const el = document.getElementById("addressCardsList");
  if(!el) return;
  if(!savedAddresses.length){
    el.innerHTML = `<div style="color:var(--gray-400);font-size:.92rem;grid-column:1/-1;padding:1.5rem 0">Nenhum endereço cadastrado. Adicione um novo endereço abaixo.</div>`;
    return;
  }
  el.innerHTML = savedAddresses.map(addr => `
    <div class="addr-card ${addr.isDefault ? 'default' : ''}">
      ${addr.isDefault ? `<span class="addr-default-tag">Padrão</span>` : ''}
      <div class="addr-name">${addr.tag}</div>
      <div class="addr-text">
        <strong>${addr.name}</strong><br>
        ${addr.rua}, ${addr.numero} ${addr.complemento ? `— ${addr.complemento}` : ''}<br>
        ${addr.bairro}, ${addr.cidade} — ${addr.estado}<br>
        CEP ${addr.cep}
      </div>
      <div style="margin-top:1rem;display:flex;gap:.5rem;flex-wrap:wrap">
        <button class="btn-sm" onclick="openAddressForm('${addr.id}')">Editar</button>
        <button class="btn-sm" onclick="deleteAddress('${addr.id}')">Excluir</button>
        ${!addr.isDefault ? `<button class="btn-sm primary" onclick="setDefaultAddress('${addr.id}')">Tornar Padrão</button>` : ''}
      </div>
    </div>
  `).join("");
}

function openAddressForm(id = null){
  const form = document.getElementById("addressFormContainer");
  if(!form) return;
  form.classList.remove("hidden");
  
  const title = document.getElementById("addrFormTitle");
  const idInput = document.getElementById("addr-id");
  const tagInput = document.getElementById("addr-tag");
  const fullnameInput = document.getElementById("addr-fullname");
  const cepInput = document.getElementById("addr-cep");
  const ruaInput = document.getElementById("addr-rua");
  const numeroInput = document.getElementById("addr-numero");
  const complementoInput = document.getElementById("addr-complemento");
  const bairroInput = document.getElementById("addr-bairro");
  const cidadeInput = document.getElementById("addr-cidade");
  const estadoInput = document.getElementById("addr-estado");
  const defaultChk = document.getElementById("addr-default-chk");
  
  if(id) {
    title.textContent = "Editar Endereço";
    const addr = savedAddresses.find(a => a.id === id);
    if(addr) {
      idInput.value = addr.id;
      tagInput.value = addr.tag;
      fullnameInput.value = addr.name;
      cepInput.value = addr.cep;
      ruaInput.value = addr.rua;
      numeroInput.value = addr.numero;
      complementoInput.value = addr.complemento || "";
      bairroInput.value = addr.bairro;
      cidadeInput.value = addr.cidade;
      estadoInput.value = addr.estado;
      defaultChk.checked = addr.isDefault;
    }
  } else {
    title.textContent = "Adicionar Novo Endereço";
    idInput.value = "";
    tagInput.value = "";
    fullnameInput.value = userData.name || "";
    cepInput.value = "";
    ruaInput.value = "";
    numeroInput.value = "";
    complementoInput.value = "";
    bairroInput.value = "";
    cidadeInput.value = "";
    estadoInput.value = "";
    defaultChk.checked = savedAddresses.length === 0;
  }
  form.scrollIntoView({behavior:"smooth", block:"nearest"});
}

function closeAddressForm(){
  const form = document.getElementById("addressFormContainer");
  if(form) form.classList.add("hidden");
}

async function fetchAddrCEP(v){
  const cep = v.replace(/\D/g,"");
  if(cep.length !== 8) return;
  const status = document.getElementById("addrCepStatus");
  if(status) status.textContent = "⏳ Buscando...";
  try{
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    if(data.erro){
      if(status) status.textContent = "❌ CEP não encontrado";
      toast("⚠️ CEP não encontrado");
      return;
    }
    document.getElementById("addr-rua").value = data.logradouro || "";
    document.getElementById("addr-bairro").value = data.bairro || "";
    document.getElementById("addr-cidade").value = data.localidade || "";
    document.getElementById("addr-estado").value = data.uf || "";
    if(status) status.textContent = `✓ ${data.localidade} — ${data.uf}`;
  }catch(e){
    if(status) status.textContent = "⚠️ Erro ao buscar";
    toast("⚠️ Não foi possível buscar o CEP. Digite manualmente.");
  }
}

async function saveAddress(){
  const id=document.getElementById("addr-id").value;
  const tag=document.getElementById("addr-tag").value.trim();
  const name=document.getElementById("addr-fullname").value.trim();
  const cep=document.getElementById("addr-cep").value.trim();
  const rua=document.getElementById("addr-rua").value.trim();
  const numero=document.getElementById("addr-numero").value.trim();
  const complemento=document.getElementById("addr-complemento").value.trim();
  const bairro=document.getElementById("addr-bairro").value.trim();
  const cidade=document.getElementById("addr-cidade").value.trim();
  const estado=document.getElementById("addr-estado").value.trim();
  const isDefault=document.getElementById("addr-default-chk").checked;

  if(!tag||!name||!cep||!rua||!numero||!bairro||!cidade||!estado){
    toast("⚠️ Preencha todos os campos obrigatórios");return;
  }
  const payload={tag,name,cep,rua,numero,complemento,bairro,cidade,estado,isDefault};

  if(isDefault) savedAddresses.forEach(a=>a.isDefault=false);

  if(id){
    try{await api('PUT',`/users/me/addresses/${id}`,payload);}catch(e){}
    const addr=savedAddresses.find(a=>a.id===id);
    if(addr) Object.assign(addr,{tag,name,cep,rua,numero,complemento,bairro,cidade,estado,isDefault});
    toast("✅ Endereço atualizado com sucesso!");
  } else {
    let newId=`addr_${Date.now()}`;
    try{
      const res=await api('POST','/users/me/addresses',payload);
      if(res.id) newId=res.id;
    }catch(e){}
    savedAddresses.push({id:newId,tag,name,cep,rua,numero,complemento,bairro,cidade,estado,isDefault});
    toast("✅ Endereço adicionado com sucesso!");
  }

  if(savedAddresses.length>0 && !savedAddresses.some(a=>a.isDefault)){
    savedAddresses[0].isDefault=true;
  }
  closeAddressForm();
  saveState();
  renderAddresses();
}

async function deleteAddress(id){
  const addr=savedAddresses.find(a=>a.id===id);
  if(!addr) return;
  if(confirm(`Deseja realmente excluir o endereço "${addr.tag}"?`)){
    savedAddresses=savedAddresses.filter(a=>a.id!==id);
    if(addr.isDefault && savedAddresses.length>0) savedAddresses[0].isDefault=true;
    try{await api('DELETE',`/users/me/addresses/${id}`,undefined);}catch(e){}
    toast("🗑️ Endereço excluído com sucesso");
    saveState();
    renderAddresses();
  }
}

function setDefaultAddress(id){
  savedAddresses.forEach(a => a.isDefault = (a.id === id));
  toast("✅ Endereço padrão alterado!");
  saveState();
  renderAddresses();
}

function renderSavedCards(){
  const el=document.getElementById("savedCardsList"); if(!el) return;
  if(!savedCards.length){
    el.innerHTML=`<div style="color:var(--gray-400);font-size:.92rem">Nenhum cartão salvo. Adicione um novo cartão abaixo.</div>`;
    return;
  }
  el.innerHTML = savedCards.map(card=>`
    <div class="card-box" style="border:1px solid var(--gray-200);border-radius:12px;padding:1rem;margin-bottom:.75rem;display:flex;justify-content:space-between;align-items:center;background:${card.id===selectedCardId?'rgba(201,168,76,.08)':'var(--white)'}">
      <div>
        <div style="font-weight:600">${card.holder}</div>
        <div style="font-size:.9rem;color:var(--gray-600)">${card.masked} · ${card.exp}</div>
      </div>
      <div style="display:flex;gap:.5rem;align-items:center">
        <button class="btn-sm primary" onclick="selectSavedCard('${card.id}')">Usar</button>
        <button class="btn-sm" onclick="deleteSavedCard('${card.id}')">Excluir</button>
      </div>
    </div>`).join("");
}
async function saveCardFromAccount(){
  const number=document.getElementById("acc-card-number")?.value.replace(/\D/g,"")||"";
  const exp=document.getElementById("acc-card-exp")?.value.trim()||"";
  const holder=document.getElementById("acc-card-name")?.value.trim()||"";
  const save=document.getElementById("acc-card-save")?.checked;
  if(number.length<13||number.length>19||!exp||!holder){
    toast("⚠️ Preencha todos os dados do cartão corretamente");return;
  }
  const masked=`**** **** **** ${number.slice(-4)}`;
  let cardId=`card_${Date.now()}`;
  if(save){
    try{
      const res=await api('POST','/users/me/cards',{masked,exp,holder});
      if(res.id) cardId=res.id;
    }catch(e){}
    const card={id:cardId,masked,exp,holder};
    savedCards.unshift(card);
    selectedCardId=card.id;
    saveState();
    renderSavedCards();
    toast("✅ Cartão salvo com sucesso!");
  } else {
    toast("✅ Cartão adicionado para pagamento imediato.");
  }
  document.getElementById("acc-card-number").value="";
  document.getElementById("acc-card-exp").value="";
  document.getElementById("acc-card-name").value="";
  document.getElementById("acc-card-save").checked=false;
}
function selectSavedCard(id){
  selectedCardId = id;
  saveState();
  renderSavedCards();
  toast("✅ Cartão selecionado para pagamento");
}
async function deleteSavedCard(id){
  savedCards=savedCards.filter(card=>card.id!==id);
  if(selectedCardId===id) selectedCardId=savedCards[0]?.id||null;
  try{await api('DELETE',`/users/me/cards/${id}`,undefined);}catch(e){}
  saveState();
  renderSavedCards();
}
async function renderOrders(){
  const el=document.getElementById("ordersList");if(!el)return;
  if(loggedIn && authToken){
    try{
      const orders=await api('GET','/orders',undefined);
      if(Array.isArray(orders)){
        fakeOrders.length=0;
        orders.forEach(o=>fakeOrders.push({
          id:o.id||o.order_code,
          date:o.date||new Date().toLocaleDateString('pt-BR'),
          status:o.status,
          items:Array.isArray(o.items)?o.items:[],
          total:o.total,
        }));
      }
    }catch(e){}
  }
  el.innerHTML=fakeOrders.map(o=>`
    <div class="order-card">
      <div class="order-card-hd">
        <span class="order-num">Pedido ${o.id} · ${o.date}</span>
        <span class="order-status status-${o.status}">${o.status==="delivered"?"✓ Entregue":o.status==="shipping"?"🚚 Em transporte":"⏳ Processando"}</span>
      </div>
      <div class="order-card-body">
        <div>
          <div class="order-items-mini">${o.items.map(item=>{const id=typeof item==='object'?item.id:item;return`<div class="order-item-mini-img">${products.find(p=>p.id===id)?.emoji||"📦"}</div>`;}).join("")}</div>
          <div class="order-actions">
            <button class="btn-sm primary" onclick="trackOrderById('${o.id}')">Rastrear</button>
            <button class="btn-sm" onclick="toast('📄 Nota fiscal enviada por e-mail!')">Nota Fiscal</button>
            ${o.status==="delivered"?`<button class="btn-sm" onclick="toast('♻️ Solicitação de troca iniciada!')">Trocar</button>`:""}
          </div>
        </div>
        <div class="order-total-info">
          <div class="order-total-val">R$ ${o.total.toLocaleString("pt-BR")}</div>
          <div class="order-date">${o.items.length} produto${o.items.length!==1?"s":""}</div>
        </div>
      </div>
    </div>`).join("");
}
function renderMyReviews(){
  const el=document.getElementById("myReviewsList");if(!el)return;
  const reviews = userReviews.slice(0,5);
  if(!reviews.length){
    el.innerHTML=`<p style="color:var(--gray-400);font-size:.85rem">Você ainda não avaliou nenhum produto.</p>`;
    return;
  }
  el.innerHTML = reviews.map(r=>{
    const p = products.find(prod=>prod.id===r.productId);
    return `<div style="border:1px solid var(--gray-200);padding:1.25rem;margin-bottom:1rem;display:flex;gap:1rem;align-items:center">
      <div style="font-size:2.5rem">${p?.emoji||'🛍️'}</div>
      <div style="flex:1">
        <div style="font-family:var(--font-display);font-size:1rem;margin-bottom:4px">${p? p.name : 'Produto removido'}</div>
        <div style="color:var(--gold);font-size:.85rem">${'★'.repeat(r.rating)}</div>
        <div style="font-size:.78rem;color:var(--gray-400);margin-top:2px">${r.title || 'Comentário'}</div>
        <p style="margin-top:.5rem;font-size:.82rem;color:var(--gray-600)">${r.comment}</p>
        <div style="font-size:.72rem;color:var(--gray-400);margin-top:.5rem">Avaliado em ${r.date}</div>
      </div>
      <button class="btn-sm" onclick="openProductModal(${r.productId})">Ver Produto</button>
    </div>`;
  }).join('');
}

/* ═══════════════ TRACKING ═══════════════ */
function trackOrder(){
  const v=document.getElementById("trackInput").value.trim();
  if(!v){toast("⚠️ Digite o número do pedido");return;}
  showTrackResult(v);
}
function trackOrderById(id){goPage("rastrear");setTimeout(()=>{document.getElementById("trackInput").value=id;showTrackResult(id);},100);}
function setTrackCode(orderId, code){
  const o = fakeOrders.find(x=>x.id===orderId);
  if(o){o.trackCode=code.trim();saveState();}
}
function showTrackResult(id){
  const r=document.getElementById("trackResult");r.classList.remove("hidden");
  const order = fakeOrders.find(o=>o.id.toUpperCase()===id.toUpperCase());
  document.getElementById("trackOrderNum").textContent=id.toUpperCase();
  const status = order?.status || 'processing';
  const trackCode = order?.trackCode || '';
  const statusMap = {
    processing: {label:"Processando", step:1},
    shipping:   {label:"Em transporte", step:2},
    delivered:  {label:"Entregue", step:3},
  };
  const cur = statusMap[status] || statusMap.processing;
  document.getElementById("trackOrderInfo").textContent = `Status: ${cur.label}` + (trackCode ? ` · Código: ${trackCode}` : '');
  const steps = [
    {label:"Pedido Confirmado", info:"Pagamento aprovado", step:1},
    {label:"Em Preparação",     info:"Seu pedido está sendo separado", step:1},
    {label:"Em Transporte",     info: trackCode ? `Código: ${trackCode}` : "Aguardando envio", step:2},
    {label:"Entregue",          info:"Pedido entregue com sucesso", step:3},
  ];
  document.getElementById("trackTimeline").innerHTML = steps.map(s=>{
    const done = cur.step > s.step;
    const active = cur.step === s.step;
    return `<div class="track-step">
      <div class="track-dot${done?" done":active?" active":""}">${done?"✓":active?"▶":"·"}</div>
      <div class="track-info"><h4>${s.label}</h4><p>${s.info}</p></div>
    </div>`;
  }).join("") + (trackCode ? `
    <div style="margin-top:1.5rem;padding:1rem;background:var(--gray-50);border-left:3px solid var(--gold);border-radius:4px">
      <div style="font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gray-400);margin-bottom:.4rem">Rastrear nos Correios</div>
      <div style="font-weight:600;font-size:1rem;margin-bottom:.5rem">${trackCode}</div>
      <a href="https://rastreamento.correios.com.br/app/index.php" target="_blank" rel="noopener"
        style="display:inline-block;background:var(--gold);color:#000;padding:.5rem 1.2rem;border-radius:4px;font-size:.8rem;font-weight:600;text-decoration:none">
        Abrir Correios →
      </a>
    </div>` : `<p style="font-size:.82rem;color:var(--gray-400);margin-top:1rem">Código de rastreio será disponibilizado assim que o pedido for enviado.</p>`);
}

/* ═══════════════ ADMIN ═══════════════ */
async function renderAdmin(){
  const el=document.getElementById("adminMetrics");if(!el)return;
  // Buscar pedidos e produtos atualizados da API
  if(loggedIn && userData.isAdmin && authToken){
    try{
      const orders=await api('GET','/orders/all',undefined);
      if(Array.isArray(orders)){
        fakeOrders.length=0;
        orders.forEach(o=>fakeOrders.push({
          id:o.id||o.order_code,
          date:o.date||new Date().toLocaleDateString('pt-BR'),
          status:o.status,
          items:Array.isArray(o.items)?o.items:[],
          total:o.total,
        }));
      }
    }catch(e){}
    await loadProductsFromAPI();
  }
  const totalReceita = fakeOrders.filter(o=>o.status!=='cancelled').reduce((s,o)=>s+o.total,0);
  const pedidosAguardando = fakeOrders.filter(o=>o.status==='processing').length;
  const prodBaixo = products.filter(p=>p.stock>0&&p.stock<=5);
  const prodEsgotado = products.filter(p=>p.stock===0);
  const metrics=[
    {label:"Receita Total",val:`R$ ${totalReceita.toLocaleString("pt-BR")}`,sub:`${fakeOrders.length} pedidos no total`,icon:"💰",click:''},
    {label:"Pedidos",val:fakeOrders.length.toString(),sub:`${pedidosAguardando} aguardando`,icon:"📦",click:''},
    {label:"Produtos",val:products.length.toString(),sub:`${prodBaixo.length} em baixo estoque · ${prodEsgotado.length} esgotado${prodEsgotado.length!==1?'s':''}`,icon:"🏷️",click:`filterAdminProds('')`},
    {label:"Alertas de Estoque",val:(prodBaixo.length+prodEsgotado.length).toString(),sub:prodEsgotado.length?`⚠️ ${prodEsgotado.map(p=>p.name.split(' ')[0]).join(', ')} esgotado${prodEsgotado.length>1?'s':''}`:'Estoque saudável ✓',icon:"📊",click:`filterAdminProds('')`,alert:prodEsgotado.length>0},
  ];
  el.innerHTML=metrics.map(m=>`<div style="background:var(--white);border:1px solid ${m.alert?'var(--red)':'var(--gray-200)'};padding:1.5rem;${m.click?'cursor:pointer':''}" ${m.click?`onclick="${m.click}"`:''}">
    <div style="display:flex;justify-content:space-between;align-items:flex-start">
      <div>
        <div style="font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gray-400);margin-bottom:.4rem">${m.label}</div>
        <div style="font-family:var(--font-display);font-size:2rem;font-weight:300;color:${m.alert?'var(--red)':'inherit'}">${m.val}</div>
        <div style="font-size:.72rem;color:${m.alert?'var(--red)':'var(--gold)'};margin-top:.25rem">${m.sub}</div>
      </div>
      <div style="font-size:1.8rem">${m.icon}</div>
    </div>
  </div>`).join("");

  document.getElementById("adminOrdersTable").innerHTML=`<table style="width:100%;border-collapse:collapse;font-size:.82rem">
    <thead><tr style="border-bottom:1px solid var(--gray-200)">${["Pedido","Data","Produtos","Total","Alterar Status","Rastrear"].map(h=>`<th style="padding:10px 16px;text-align:left;font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gray-400);font-weight:400">${h}</th>`).join("")}</tr></thead>
    <tbody>${fakeOrders.map(o=>`<tr style="border-bottom:1px solid var(--gray-200)">
      <td style="padding:12px 16px;font-weight:500">${o.id}<br><span style="font-size:.68rem;color:var(--gray-400)">${o.date}</span></td>
      <td style="padding:12px 16px;color:var(--gray-600)">${o.date}</td>
      <td style="padding:12px 16px">${o.items.map(item=>{const id=typeof item==='object'?item.id:item;return products.find(p=>p.id===id)?.emoji||"📦";}).join(" ")}</td>
      <td style="padding:12px 16px;font-weight:500">R$ ${o.total.toLocaleString("pt-BR")}</td>
      <td style="padding:12px 16px">
        <select class="status-select" onchange="updateOrderStatus('${o.id}',this.value)">
          <option value="processing"${o.status==="processing"?" selected":""}>⏳ Processando</option>
          <option value="shipping"${o.status==="shipping"?" selected":""}>🚚 Em transporte</option>
          <option value="delivered"${o.status==="delivered"?" selected":""}>✓ Entregue</option>
        </select>
      </td>
      <td style="padding:12px 16px">
        <input type="text" placeholder="Código Correios" value="${o.trackCode||''}" style="border:1px solid var(--gray-200);padding:5px 8px;font-size:.75rem;width:120px;border-radius:4px" oninput="setTrackCode('${o.id}',this.value)">
      </td>
    </tr>`).join("")}</tbody>
  </table>`;
  renderAdminProdsTable();
}

function renderAdminProdsTable(filter=""){
  const el=document.getElementById("adminProdsTable");if(!el)return;
  if(el.dataset) el.dataset.filter=filter;
  const list=products.filter(p=>!filter||p.name.toLowerCase().includes(filter.toLowerCase()));
  const stockStyle=s=>s===0?'color:var(--red);font-weight:600':s<=5?'color:#c97316;font-weight:600':'color:var(--gray-600)';
  el.innerHTML=`<table style="width:100%;border-collapse:collapse;font-size:.82rem">
    <thead><tr style="border-bottom:1px solid var(--gray-200)">${["","Nome","Categoria","Preço","Estoque","Status","Ações"].map(h=>`<th style="padding:10px 16px;text-align:left;font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gray-400);font-weight:400">${h}</th>`).join("")}</tr></thead>
    <tbody>${list.map(p=>`<tr style="border-bottom:1px solid var(--gray-200);background:${p.stock===0?'rgba(239,68,68,.04)':p.stock<=5?'rgba(251,191,36,.04)':''}">
      <td style="padding:12px 16px;font-size:1.5rem">${p.emoji}</td>
      <td style="padding:12px 16px;font-weight:500">${p.name}${p.stock===0?` <span style="font-size:.65rem;background:var(--red);color:#fff;padding:1px 6px;border-radius:4px;vertical-align:middle">ESGOTADO</span>`:p.stock<=5?` <span style="font-size:.65rem;background:#f59e0b;color:#fff;padding:1px 6px;border-radius:4px;vertical-align:middle">BAIXO</span>`:''}</td>
      <td style="padding:12px 16px;color:var(--gray-600)">${p.cat}</td>
      <td style="padding:12px 16px">R$ ${p.price.toLocaleString("pt-BR")}</td>
      <td style="padding:10px 16px">
        <div style="display:flex;align-items:center;gap:3px">
          <button onclick="adjustStock(${p.id},-10)" title="-10" style="border:1px solid var(--gray-200);background:var(--white);padding:2px 5px;font-size:.75rem;cursor:pointer;border-radius:4px;color:var(--gray-600)">−10</button>
          <button onclick="adjustStock(${p.id},-1)" title="-1" style="border:1px solid var(--gray-200);background:var(--white);padding:2px 6px;font-size:.8rem;cursor:pointer;border-radius:4px;font-weight:600;color:var(--red)">−</button>
          <input type="number" min="0" value="${p.stock}" onchange="setStockDirect(${p.id},this.value)" onblur="setStockDirect(${p.id},this.value)" style="width:56px;text-align:center;border:1px solid var(--gray-200);padding:3px 4px;font-size:.82rem;outline:none;border-radius:4px;${stockStyle(p.stock)}">
          <button onclick="adjustStock(${p.id},1)" title="+1" style="border:1px solid var(--gray-200);background:var(--white);padding:2px 6px;font-size:.8rem;cursor:pointer;border-radius:4px;font-weight:600;color:green">+</button>
          <button onclick="adjustStock(${p.id},10)" title="+10" style="border:1px solid var(--gray-200);background:var(--white);padding:2px 5px;font-size:.75rem;cursor:pointer;border-radius:4px;color:var(--gray-600)">+10</button>
        </div>
      </td>
      <td style="padding:12px 16px"><span class="order-status${p.stock>0?" status-delivered":" status-processing"}">${p.stock>0?"Ativo":"Esgotado"}</span></td>
      <td style="padding:12px 16px;display:flex;gap:.4rem">
        <button class="btn-sm" onclick="openEditProduct(${p.id})">✏️</button>
        <button class="btn-sm" onclick="deleteProduct(${p.id})">🗑️</button>
      </td>
    </tr>`).join("")}</tbody>
  </table>`;
}

async function deleteProduct(id){
  const index=products.findIndex(p=>p.id===id);
  if(index<0){toast('Produto não encontrado');return;}
  const removed=products.splice(index,1)[0];
  try{
    await api('DELETE',`/products/${id}`,undefined);
  }catch(e){}
  toast(`🗑️ ${removed.name} removido!`);
  renderAdmin();renderHomeProd();renderProdPage();renderFilters();saveState();
}

function filterAdminProds(v){renderAdminProdsTable(v);}

/* ── Controle rápido de estoque ── */
async function adjustStock(id, delta){
  const prod=products.find(p=>p.id===id);
  if(!prod) return;
  const newStock=Math.max(0,prod.stock+delta);
  prod.stock=newStock;
  try{ await api('PATCH',`/products/${id}/stock`,{stock:newStock}); }catch(e){}
  renderAdminProdsTable(document.querySelector('#adminProdsTable')?.dataset?.filter||'');
  renderHomeProd();renderProdPage();
  saveState();
  toast(`📦 ${prod.name}: ${newStock} unid.`);
}

async function setStockDirect(id, value){
  const prod=products.find(p=>p.id===id);
  if(!prod) return;
  const newStock=Math.max(0,parseInt(value)||0);
  if(prod.stock===newStock) return;
  prod.stock=newStock;
  try{ await api('PATCH',`/products/${id}/stock`,{stock:newStock}); }catch(e){}
  renderHomeProd();renderProdPage();
  saveState();
}

function openAddProduct(editId=null){
  editingProdId=editId;
  document.getElementById("addProdTitle").textContent=editId!==null?"Editar Produto":"Novo Produto";
  if(editId!==null){
    const p=products.find(pr=>pr.id===editId);
    if(!p){toast('Produto não encontrado');return;}
    document.getElementById("apName").value=p.name;
    document.getElementById("apPrice").value=p.price;
    document.getElementById("apOld").value=p.old||"";
    document.getElementById("apStock").value=p.stock;
    document.getElementById("apEmoji").value=p.emoji;
    document.getElementById("apDesc").value=p.desc;
    const imgs=p.images||[];
    const el1=document.getElementById("apImg1");const el2=document.getElementById("apImg2");const el3=document.getElementById("apImg3");
    if(el1)el1.value=imgs[0]||"";if(el2)el2.value=imgs[1]||"";if(el3)el3.value=imgs[2]||"";
  } else {
    ["apName","apPrice","apOld","apStock","apEmoji","apDesc","apImg1","apImg2","apImg3"].forEach(id=>{const el=document.getElementById(id);if(el)el.value="";});
  }
  document.getElementById("addProdOv").classList.add("on");
  document.body.style.overflow="hidden";
}
function openEditProduct(id){openAddProduct(id);}
function closeAddProduct(e){
  if(!e||e.target===document.getElementById("addProdOv")){
    document.getElementById("addProdOv").classList.remove("on");
    document.body.style.overflow="";
  }
}
async function saveProduct(){
  const name=document.getElementById("apName").value.trim();
  if(!name){toast("⚠️ Preencha o nome");return;}
  const price=parseInt(document.getElementById("apPrice").value)||500;
  const stock=parseInt(document.getElementById("apStock").value)||10;
  const emoji=document.getElementById("apEmoji").value||"💁‍♀️";
  const desc=document.getElementById("apDesc").value||"";
  const cat=document.getElementById("apCat").value;
  const oldVal=parseInt(document.getElementById("apOld").value)||null;
  const badge=document.getElementById("apBadge").value||null;
  const img1=(document.getElementById("apImg1")?.value||"").trim();
  const img2=(document.getElementById("apImg2")?.value||"").trim();
  const img3=(document.getElementById("apImg3")?.value||"").trim();
  const images=[img1,img2,img3].filter(Boolean);
  const payload={name,desc,cat,price,old:oldVal,emoji,badge,stock,images,colors:["#1a1a1a"],sizes:["P","M","G"],features:["Produto premium"]};

  try{
    if(editingProdId!==null){
      const updated = await api('PUT',`/products/${editingProdId}`,payload);
      const idx=products.findIndex(p=>p.id===editingProdId);
      if(idx>=0) products[idx]={...products[idx],...updated};
      toast("✅ Produto atualizado!");
    } else {
      const created = await api('POST','/products',payload);
      products.push(created);
      toast("🎉 Produto criado com sucesso!");
    }
  }catch(e){
    // Fallback local
    if(editingProdId!==null){
      const idx=products.findIndex(p=>p.id===editingProdId);
      if(idx<0){toast('Produto não encontrado');return;}
      products[idx]={...products[idx],name,price,stock,emoji,desc,cat,old:oldVal,badge,images};
      toast("✅ Produto atualizado!");
    } else {
      const nextId=products.length?Math.max(...products.map(p=>p.id))+1:0;
      products.push({id:nextId,name,desc,cat,price,old:oldVal,emoji,badge,colors:["#1a1a1a"],sizes:["P","M","G"],stock,rating:5.0,reviews:0,features:["Produto premium"],images});
      toast("🎉 Produto criado!");
    }
  }
  editingProdId=null;
  closeAddProduct();renderAdmin();renderHomeProd();renderProdPage();renderFilters();
  saveState();
}

/* ═══════════════ BLOG ═══════════════ */
function renderBlogPreview(){
  const el = document.getElementById("blogPreview") || document.getElementById("lookbookPreview");
  if(el) el.innerHTML=blogPosts.map(blogCardHTML).join("");
}
function renderBlog(){
  document.getElementById("blogGrid").innerHTML=blogPosts.map(blogCardHTML).join("");
}
function blogCardHTML(p,idx){
  return `<div class="blog-card" onclick="openBlogModal(${idx})" style="cursor:pointer">
    <div class="blog-img-wrap"><div class="blog-img">${p.img?`<img src="${p.img}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.innerHTML='<span style=font-size:5rem>${p.emoji}</span>'">`:`<span style="font-size:5rem">${p.emoji}</span>`}</div></div>
    <span class="blog-tag">${p.tag}</span>
    <div class="blog-title">${p.title}</div>
    <div class="blog-excerpt">${p.excerpt}</div>
    <div class="blog-meta"><span>📅 ${p.date}</span><span>⏱️ ${p.time} de leitura</span></div>
    <div style="margin-top:.8rem;font-size:.82rem;color:var(--gold);font-weight:600">Ler artigo →</div>
  </div>`;
}
function openBlogModal(idx){
  const p=blogPosts[idx];
  let m=document.getElementById("blogModal");
  if(!m){
    m=document.createElement("div");
    m.id="blogModal";
    m.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.6);padding:1rem";
    m.onclick=e=>{if(e.target===m)closeBlogModal();};
    document.body.appendChild(m);
  }
  m.innerHTML=`<div style="background:#fff;border-radius:16px;max-width:680px;width:100%;max-height:90vh;overflow-y:auto;padding:2rem;position:relative">
    <button onclick="closeBlogModal()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:1.5rem;cursor:pointer;color:var(--gray-500)">✕</button>
    <span style="font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--gold)">${p.tag}</span>
    <h2 style="font-family:var(--serif);font-size:1.6rem;margin:.5rem 0 .3rem">${p.title}</h2>
    <div style="font-size:.8rem;color:var(--gray-400);margin-bottom:1.5rem">📅 ${p.date} &nbsp;·&nbsp; ⏱️ ${p.time} de leitura</div>
    <div style="font-size:.95rem;line-height:1.8;color:var(--gray-700)">${p.content}</div>
  </div>`;
  m.style.display="flex";
  document.body.style.overflow="hidden";
}
function closeBlogModal(){
  const m=document.getElementById("blogModal");
  if(m)m.style.display="none";
  document.body.style.overflow="";
}

/* ═══════════════ TESTIMONIALS ═══════════════ */
function renderTestis(){
  document.getElementById("testiGrid").innerHTML=testimonials.map(t=>`
    <div class="testi-card">
      <div class="testi-q">"</div>
      <div class="testi-stars">${"★".repeat(t.stars)}</div>
      <p class="testi-text">${t.text}</p>
      <div class="testi-author">${t.author} — ${t.city}</div>
      <div class="testi-verified">✓ Compra verificada</div>
    </div>`).join("");
}

/* ═══════════════ FAQ ═══════════════ */
function renderFaq(){
  document.getElementById("faqList").innerHTML=faqs.map((f,i)=>`
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFaq(${i})">${f.q}<span class="faq-icon">+</span></div>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>`).join("");
}
function toggleFaq(i){
  const el=document.getElementById("faq-"+i);
  el.classList.toggle("open");
}

/* ═══════════════ NEWSLETTER ═══════════════ */
async function subscribe(){
  const v=document.getElementById("nlEmail").value;
  if(!v||!v.includes("@")){toast("⚠️ E-mail inválido");return;}
  try{
    await api('POST','/newsletter',{email:v});
  }catch(e){ /* offline ou já cadastrado — sem problema */ }
  toast("✨ Cadastrado! Use o cupom BEMVINDA e ganhe 15% OFF na primeira compra!");
  document.getElementById("nlEmail").value="";
}

/* ═══════════════ WHATSAPP ═══════════════ */
function toggleWa(){waOpen=!waOpen;document.getElementById("waPopup").classList.toggle("on",waOpen);}
function openWA(){window.open("https://wa.me/5519994368778?text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20as%20perucas%20da%20LD%20Laces%20%26%20Perucas!","_blank");}

/* ═══════════════ TOAST ═══════════════ */
function toast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;t.classList.add("on");
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("on"),3200);
}

/* ═══════════════ NAV SCROLL ═══════════════ */
window.addEventListener("scroll",()=>{
  document.getElementById("nav").classList.toggle("scrolled",window.scrollY>50);
},{passive:true});

/* ═══════════════ PRÓTESE CAPILAR ═══════════════ */
let proteseFilter = 'Todos';

function renderProtesePage(){
  const allCats = ['Todos','Micropele','Híbrida','Afro','Masculina','Injetada'];
  const filtersEl = document.getElementById('proteseFilters');
  if(filtersEl){
    filtersEl.innerHTML = allCats.map(c=>
      `<label class="sidebar-radio"><input type="radio" name="proteseCat" value="${c}" ${c===proteseFilter?'checked':''} onchange="setProteseFilter('${c}')"> ${c}</label>`
    ).join('');
  }

  let items = products.filter(p => p.cat === 'Prótese Capilar');

  // categoria
  if(proteseFilter !== 'Todos'){
    items = items.filter(p => p.name.toLowerCase().includes(proteseFilter.toLowerCase()));
  }

  // busca
  const q = (document.getElementById('proteseSidebarSearch')?.value||'').toLowerCase();
  if(q) items = items.filter(p=>p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q));

  // faixa de preço
  const minV = parseInt(document.getElementById('protSliderMin')?.value||'0');
  const maxV = parseInt(document.getElementById('protSliderMax')?.value||'2500');
  items = items.filter(p=>p.price>=minV && p.price<=maxV);

  // só em estoque
  if(document.getElementById('proteseFilterInStock')?.checked) items = items.filter(p=>p.stock>0);

  // ordenação
  const sort = document.querySelector("input[name='proteseSort']:checked")?.value||'default';
  if(sort==='price-asc')  items = [...items].sort((a,b)=>a.price-b.price);
  if(sort==='price-desc') items = [...items].sort((a,b)=>b.price-a.price);
  if(sort==='rating')     items = [...items].sort((a,b)=>b.rating-a.rating);

  const grid  = document.getElementById('proteseGrid');
  const empty = document.getElementById('proteseEmpty');
  const count = document.getElementById('proteseCount');
  if(!grid) return;
  if(count) count.textContent = `${items.length} produto${items.length!==1?'s':''} encontrado${items.length!==1?'s':''}`;
  if(!items.length){
    grid.innerHTML = '';
    if(empty) empty.classList.remove('hidden');
    return;
  }
  if(empty) empty.classList.add('hidden');
  grid.innerHTML = items.map(p => prodCardHTML(p)).join('');
}

function setProteseFilter(cat){ proteseFilter=cat; renderProtesePage(); }

function openProteseSidebar(){
  document.getElementById('proteseSidebar').classList.add('open');
  document.getElementById('proteseSidebarOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeProteseSidebar(){
  document.getElementById('proteseSidebar').classList.remove('open');
  document.getElementById('proteseSidebarOverlay').classList.remove('open');
  document.body.style.overflow='';
}
function clearProteseFilters(){
  proteseFilter='Todos';
  const minEl=document.getElementById('protSliderMin');
  const maxEl=document.getElementById('protSliderMax');
  if(minEl) minEl.value=0;
  if(maxEl) maxEl.value=2500;
  const inStock=document.getElementById('proteseFilterInStock');
  if(inStock) inStock.checked=false;
  const search=document.getElementById('proteseSidebarSearch');
  if(search) search.value='';
  document.querySelectorAll("input[name='proteseSort']").forEach(r=>r.value==='default'?r.checked=true:null);
  updateProtesePriceRange();
  renderProtesePage();
}
function updateProtesePriceRange(){
  const minEl=document.getElementById('protSliderMin');
  const maxEl=document.getElementById('protSliderMax');
  const fillEl=document.getElementById('protPriceTrackFill');
  const minLbl=document.getElementById('protMinLabel');
  const maxLbl=document.getElementById('protMaxLabel');
  if(!minEl||!maxEl) return;
  let min=parseInt(minEl.value), max=parseInt(maxEl.value);
  if(min>max){const t=min;min=max;max=t;}
  if(minLbl) minLbl.textContent=min.toLocaleString('pt-BR');
  if(maxLbl) maxLbl.textContent=max.toLocaleString('pt-BR');
  const p1=(min/2500)*100, p2=(max/2500)*100;
  if(fillEl){fillEl.style.left=p1+'%';fillEl.style.width=(p2-p1)+'%';}
  renderProtesePage();
}

function sortProtese(val){
  proteseSort = val;
  renderProtesePage();
}

/* ═══════════════ IMAGE GALLERY ═══════════════ */
let currentGalleryImg = "";
function renderProductGallery(p){
  const imgs = (p.images && p.images.length) ? p.images : [];
  if(!imgs.length){
    return `<div class="pm-gallery-emoji-wrap"><div class="prod-modal-emoji">${p.emoji}</div></div>`;
  }
  currentGalleryImg = imgs[0];
  const thumbs = imgs.map((src,i)=>`<div class="pm-gallery-thumb${i===0?" on":""}" onclick="switchGalleryImg('${src}',this)"><img src="${src}" alt="Foto ${i+1}" loading="lazy" onerror="this.parentElement.innerHTML='<span>${p.emoji}</span>'"></div>`).join("");
  return `
    <div class="pm-gallery-main" onclick="openZoom()" id="pmMainWrap">
      <img src="${imgs[0]}" alt="${p.name}" id="pmMainImg" loading="eager" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div style="display:none;align-items:center;justify-content:center;font-size:9rem;width:100%;height:100%">${p.emoji}</div>
    </div>
    <div class="pm-gallery-thumbs">${thumbs}</div>
  `;
}
function switchGalleryImg(src, thumbEl){
  currentGalleryImg = src;
  const img = document.getElementById("pmMainImg");
  if(img) img.src = src;
  document.querySelectorAll(".pm-gallery-thumb").forEach(t=>t.classList.remove("on"));
  if(thumbEl) thumbEl.classList.add("on");
}
function openZoom(){
  if(!currentGalleryImg) return;
  document.getElementById("zoomImg").src = currentGalleryImg;
  document.getElementById("zoomOverlay").classList.add("on");
  document.body.style.overflow = "hidden";
}
function closeZoom(e){
  if(!e || e.target===document.getElementById("zoomOverlay") || e.currentTarget?.classList?.contains("zoom-close")){
    document.getElementById("zoomOverlay").classList.remove("on");
    document.body.style.overflow = "";
  }
}

/* ═══════════════ COMPRE JUNTO ═══════════════ */
function renderBundleSection(p){
  const partner = products.find(r=>r.id!==p.id && r.cat!==p.cat);
  if(!partner) return "";
  const combined = p.price + partner.price;
  const kit = Math.round(combined * 0.90);
  const saving = combined - kit;
  return `
    <div class="bundle-box" style="border-top:1px solid var(--gray-200);padding-top:1.5rem;margin-top:0">
      <div class="bundle-box-title">🛍️ Compre Junto — <span style="color:var(--gold)">10% OFF no kit</span></div>
      <div class="bundle-products">
        <div class="bundle-prod-item">
          <img src="${p.images&&p.images[0]?p.images[0]:'img/placeholder.svg'}" alt="${p.name}" style="width:70px;height:70px;object-fit:cover;border-radius:8px" onerror="this.outerHTML='<span style=font-size:2rem>${p.emoji}</span>'">
          <div class="bundle-prod-name">${p.name}</div>
          <div class="bundle-prod-price">R$ ${p.price.toLocaleString("pt-BR")}</div>
        </div>
        <span class="bundle-plus">+</span>
        <div class="bundle-prod-item">
          <img src="${partner.images&&partner.images[0]?partner.images[0]:'img/placeholder.svg'}" alt="${partner.name}" style="width:70px;height:70px;object-fit:cover;border-radius:8px" onerror="this.outerHTML='<span style=font-size:2rem>${partner.emoji}</span>'">
          <div class="bundle-prod-name">${partner.name}</div>
          <div class="bundle-prod-price">R$ ${partner.price.toLocaleString("pt-BR")}</div>
        </div>
      </div>
      <div class="bundle-price-row">
        <div>
          <span class="bundle-total">R$ ${kit.toLocaleString("pt-BR")}</span>
          <span class="bundle-saving" style="margin-left:.5rem">Economia de R$ ${saving.toLocaleString("pt-BR")}</span>
        </div>
        <button class="bundle-btn" onclick="addBundleToCart(${p.id},${partner.id})">+ Adicionar Kit</button>
      </div>
    </div>
  `;
}
function addBundleToCart(id1, id2){
  const p1=products.find(p=>p.id===id1)||products[id1];
  const p2=products.find(p=>p.id===id2)||products[id2];
  if(!p1||!p2) return;
  const e1=cart.find(i=>i.id===id1);const e2=cart.find(i=>i.id===id2);
  if(e1)e1.qty+=1;else cart.push({...p1,qty:1});
  if(e2)e2.qty+=1;else cart.push({...p2,qty:1});
  if(!discount){discount=10;discLabel="Kit 10% OFF";}
  updateCartUI();saveState();
  toast("🎁 Kit adicionado! 10% de desconto aplicado!");
  closeProdModal();
  setTimeout(openCart,200);
}

/* ═══════════════ PIX QR CODE ═══════════════ */
function generatePixCode(valor){
  function f(id, v){ const l=v.length.toString().padStart(2,'0'); return id+l+v; }
  function crc16(s){
    let c=0xFFFF;
    for(let i=0;i<s.length;i++){
      c^=s.charCodeAt(i)<<8;
      for(let j=0;j<8;j++) c=(c&0x8000)?((c<<1)^0x1021):(c<<1),c&=0xFFFF;
    }
    return c.toString(16).toUpperCase().padStart(4,'0');
  }
  const key='46296221878';
  const name='RAFAEL MULLER';
  const city='SAO PAULO';
  const amt=valor.toFixed(2);
  const acct=f('00','br.gov.bcb.pix')+f('01',key);
  let p=f('00','01')+f('26',acct)+f('52','0000')+f('53','986')+f('54',amt)+f('58','BR')+f('59',name)+f('60',city)+f('62',f('05','***'))+'6304';
  return p+crc16(p);
}

/* ═══════════════ EMAIL MODAL ═══════════════ */
/* ═══════════════ EMAILJS CONFIG ═══════════════
   Passos para ativar:
   1. Crie conta grátis em emailjs.com
   2. Add Service (Gmail) → copie o Service ID
   3. Create Template com as variáveis abaixo → copie o Template ID
   4. Account → API Keys → copie a Public Key
   Substitua os valores EMAILJS_* abaixo pelos seus.
*/
const EMAILJS_SERVICE  = "SEU_SERVICE_ID";   // ex: "service_abc123"
const EMAILJS_TEMPLATE = "SEU_TEMPLATE_ID";  // ex: "template_xyz456"
const EMAILJS_KEY      = "SUA_PUBLIC_KEY";   // ex: "AbCdEfGhIjKlMnOp"

async function sendOrderEmail(orderNum, items, total, frete){
  if(!window.emailjs) return;
  if(EMAILJS_KEY === "SUA_PUBLIC_KEY") return; // não disparar enquanto não configurado
  try{
    emailjs.init({publicKey: EMAILJS_KEY});
    const itemsList = items.map(i=>`${i.name} ×${i.qty} — R$ ${(i.price*i.qty).toLocaleString("pt-BR")}`).join("\n");
    await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
      to_name:    loggedIn ? userData.name  : "Cliente",
      to_email:   loggedIn ? userData.email : "",
      order_num:  orderNum,
      items_list: itemsList,
      frete:      frete > 0 ? `R$ ${frete.toLocaleString("pt-BR")}` : "A calcular",
      total:      `R$ ${total.toLocaleString("pt-BR")}`,
      reply_to:   "Rafaelmuller111222333444@gmail.com",
    });
    console.log("E-mail de confirmação enviado.");
  }catch(err){
    console.warn("EmailJS erro:", err);
  }
}

function showEmailModal(orderNum, items, total){
  const emailBody = document.getElementById("emailBody");
  if(!emailBody) return;
  emailBody.innerHTML = `
    <p style="font-size:.88rem;color:var(--gray-600);margin-bottom:1rem">E-mail enviado para <strong>${userData.email||"seu e-mail"}</strong>:</p>
    <div class="email-preview">
      <div class="email-hdr">
        <div class="email-hdr-logo">RAFAEL<span style="color:var(--gold-light)">MULLER</span></div>
        <div style="font-size:.72rem;color:#999;margin-top:.25rem">Confirmação de Pedido</div>
      </div>
      <div class="email-body-inner">
        <p style="margin-bottom:1rem">Olá, <strong>${userData.name||"cliente"}</strong>! 🎉</p>
        <p>Seu pedido foi confirmado e já está sendo preparado com todo carinho.</p>
        <div class="email-order-box">
          <div style="font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gray-400);margin-bottom:.4rem">Número do Pedido</div>
          <div style="font-family:var(--font-display);font-size:1.3rem;margin-bottom:.75rem">${orderNum}</div>
          ${items.map(i=>`<div style="display:flex;justify-content:space-between;font-size:.82rem;margin-bottom:.3rem;color:var(--gray-600)"><span>${i.emoji} ${i.name} ×${i.qty}</span><span>R$ ${(i.price*i.qty).toLocaleString("pt-BR")}</span></div>`).join("")}
          <div style="border-top:1px solid var(--gray-200);margin-top:.75rem;padding-top:.75rem;display:flex;justify-content:space-between;font-weight:500;font-size:.9rem"><span>Total</span><span>R$ ${total.toLocaleString("pt-BR")}</span></div>
        </div>
        <p style="font-size:.82rem;color:var(--gray-600)">Você receberá atualizações sobre o envio por e-mail. Dúvidas? Fale conosco pelo WhatsApp! 💬</p>
      </div>
      <div class="email-footer-bar">© 2025 LD Laces & Perucas · <span style="cursor:pointer;text-decoration:underline" onclick="closeEmailModal()">Cancelar inscrição</span></div>
    </div>
    <button class="step-btn" style="margin-top:1.5rem" onclick="closeEmailModal()">Entendido ✓</button>
  `;
  document.getElementById("emailOv").classList.add("on");
}
function closeEmailModal(e){
  if(!e||e.target===document.getElementById("emailOv")){
    document.getElementById("emailOv").classList.remove("on");
  }
}

/* ═══════════════ ADMIN: ATUALIZAR STATUS ═══════════════ */
async function updateOrderStatus(orderId, status){
  const order=fakeOrders.find(o=>o.id===orderId);
  if(!order){toast("Pedido não encontrado");return;}
  order.status=status;
  saveState();
  try{
    await api('PATCH',`/orders/${orderId}/status`,{status});
  }catch(e){ /* offline — atualiza apenas localmente */ }
  const labels={processing:"⏳ Processando",shipping:"🚚 Em transporte",delivered:"✓ Entregue",cancelled:"❌ Cancelado"};
  toast(`✅ Pedido ${orderId} → ${labels[status]||status}`);
}

/* ═══════════════ MOBILE NAV ═══════════════ */
function toggleMobileNav(){
  const drawer = document.getElementById("navDrawer");
  const hamburger = document.getElementById("navHamburger");
  const isOpen = drawer.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}
function closeMobileNav(){
  const drawer = document.getElementById("navDrawer");
  const hamburger = document.getElementById("navHamburger");
  drawer.classList.remove("open");
  hamburger.classList.remove("open");
  document.body.style.overflow = "";
}

/* ═══════════════ SIDEBAR FILTROS (MOBILE) ═══════════════ */
function openSidebar(){
  document.getElementById("prodSidebar").classList.add("open");
  document.getElementById("sidebarOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeSidebar(){
  document.getElementById("prodSidebar").classList.remove("open");
  document.getElementById("sidebarOverlay").classList.remove("open");
  document.body.style.overflow = "";
}
function clearFilters(){
  activeFilter = "Todos";
  const minEl = document.getElementById("sliderMin");
  const maxEl = document.getElementById("sliderMax");
  if(minEl) minEl.value = 0;
  if(maxEl) maxEl.value = 2500;
  const inStock = document.getElementById("filterInStock");
  if(inStock) inStock.checked = false;
  const search = document.getElementById("sidebarSearch");
  if(search) search.value = "";
  const radios = document.querySelectorAll("input[name='sort']");
  radios.forEach(r => r.value === "default" ? r.checked = true : null);
  updatePriceRange();
  renderFilters();
  renderProdPage();
}
function updatePriceRange(){
  const minEl = document.getElementById("sliderMin");
  const maxEl = document.getElementById("sliderMax");
  const fillEl = document.getElementById("priceTrackFill");
  const minLabel = document.getElementById("priceMin");
  const maxLabel = document.getElementById("priceMax");
  if(!minEl||!maxEl) return;
  let min = parseInt(minEl.value), max = parseInt(maxEl.value);
  if(min > max){ const t=min; min=max; max=t; }
  if(minLabel) minLabel.textContent = min.toLocaleString("pt-BR");
  if(maxLabel) maxLabel.textContent = max.toLocaleString("pt-BR");
  const pct1 = (min/2500)*100, pct2 = (max/2500)*100;
  if(fillEl){ fillEl.style.left=pct1+"%"; fillEl.style.width=(pct2-pct1)+"%"; }
  renderProdPage();
}
function sortProducts(){
  const v = document.querySelector("input[name='sort']:checked")?.value || "default";
  renderProdPage(v);
}

/* ═══════════════ LGPD ═══════════════ */
function lgpdAceitar(){
  localStorage.setItem("lgpd","accepted");
  document.getElementById("lgpdBanner").style.display = "none";
}
function lgpdRecusar(){
  localStorage.setItem("lgpd","refused");
  document.getElementById("lgpdBanner").style.display = "none";
}
(function checkLgpd(){
  if(localStorage.getItem("lgpd")){
    const b = document.getElementById("lgpdBanner");
    if(b) b.style.display = "none";
  }
})();

/* ═══════════════ CONTATO ═══════════════ */
function enviarContato(){
  const nome = document.getElementById("ctNome")?.value?.trim();
  const email = document.getElementById("ctEmail")?.value?.trim();
  const assunto = document.getElementById("ctAssunto")?.value?.trim();
  const msg = document.getElementById("ctMsg")?.value?.trim();
  if(!nome || !email || !assunto || !msg){ toast("⚠️ Preencha todos os campos."); return; }
  const dest = "Rafaelmuller111222333444@gmail.com";
  const sub = encodeURIComponent(`[Site] ${assunto} — ${nome}`);
  const body = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\n\n${msg}`);
  window.open(`mailto:${dest}?subject=${sub}&body=${body}`, "_blank");
  toast("✅ Abrindo seu e-mail para envio!");
}
function enviarContatoWA(){
  const nome = document.getElementById("ctNome")?.value?.trim() || "Cliente";
  const assunto = document.getElementById("ctAssunto")?.value?.trim() || "contato";
  const msg = document.getElementById("ctMsg")?.value?.trim() || "";
  const text = encodeURIComponent(`Olá! Sou ${nome} e gostaria de falar sobre: ${assunto}.\n\n${msg}`);
  window.open(`https://wa.me/5519994368778?text=${text}`, "_blank");
}

/* ═══════════════ RESGATE DE PONTOS ═══════════════ */
function redeemPoints(cost, discountVal){
  if(!loggedIn){ toast("⚠️ Faça login para resgatar pontos."); openAuth(); return; }
  if((userData.points||0) < cost){ toast(`⚠️ Você precisa de ${cost} pontos. Você tem ${userData.points||0}.`); return; }
  userData.points = (userData.points||0) - cost;
  const code = "RESGATE" + Math.random().toString(36).slice(2,6).toUpperCase();
  coupons[code] = {value: discountVal, label: `R$ ${discountVal} resgatado`};
  toast(`🎁 Cupom ${code} gerado! R$ ${discountVal} de desconto.`);
  // Mostrar cupons resgatados
  const sec = document.getElementById("activeRedeemedCouponsSection");
  const list = document.getElementById("activeRedeemedCouponsList");
  if(sec && list){
    sec.classList.remove("hidden");
    list.innerHTML += `<div style="background:rgba(201,168,76,.1);border:1px solid var(--gold);padding:.6rem 1rem;display:flex;justify-content:space-between;align-items:center">
      <span style="font-weight:600;color:var(--gold);letter-spacing:.05em">${code}</span>
      <span style="font-size:.8rem;color:var(--gray-600)">R$ ${discountVal} de desconto</span>
    </div>`;
  }
  saveState();
  renderAccount();
}

/* ═══════════════ INSPIRE-SE: TABS ═══════════════ */
let inspireActiveTab = "quiz";
function showInspireTab(tab){
  inspireActiveTab = tab;
  document.getElementById("inspire-quiz").classList.toggle("active", tab==="quiz");
  document.getElementById("inspire-quiz").classList.toggle("hidden", tab!=="quiz");
  document.getElementById("inspire-lookbook").classList.toggle("active", tab==="lookbook");
  document.getElementById("inspire-lookbook").classList.toggle("hidden", tab!=="lookbook");
  document.getElementById("itab-quiz").classList.toggle("active", tab==="quiz");
  document.getElementById("itab-lookbook").classList.toggle("active", tab==="lookbook");
  if(tab==="lookbook") renderLookbook("todos");
}

/* ═══════════════ QUIZ DE ESTILO ═══════════════ */
const quizAnswers = {};
let quizCurrentStep = 1;
const quizTotal = 3;

function quizSelect(step, val){
  quizAnswers[step] = val;
  const curr = document.getElementById(`qstep-${step}`);
  const next = step < quizTotal ? document.getElementById(`qstep-${step+1}`) : document.getElementById("qstep-result");
  curr.classList.add("hidden");
  next.classList.remove("hidden");
  quizCurrentStep = step + 1;
  updateQuizProgress();
  if(step === quizTotal) showQuizResult();
}
function quizBack(step){
  document.getElementById(`qstep-${step}`).classList.add("hidden");
  document.getElementById(`qstep-${step-1}`).classList.remove("hidden");
  quizCurrentStep = step - 1;
  updateQuizProgress();
}
function quizReset(){
  Object.keys(quizAnswers).forEach(k => delete quizAnswers[k]);
  quizCurrentStep = 1;
  for(let i=1; i<=quizTotal; i++) document.getElementById(`qstep-${i}`).classList.add("hidden");
  document.getElementById("qstep-result").classList.add("hidden");
  document.getElementById("qstep-1").classList.remove("hidden");
  updateQuizProgress();
}
function updateQuizProgress(){
  const pct = ((quizCurrentStep-1)/quizTotal)*100;
  const fill = document.getElementById("quizProgressFill");
  const label = document.getElementById("quizStepLabel");
  if(fill) fill.style.width = pct + "%";
  if(label) label.textContent = quizCurrentStep <= quizTotal ? `Passo ${quizCurrentStep} de ${quizTotal}` : "Resultado!";
}
function showQuizResult(){
  const occ = quizAnswers[1], prio = quizAnswers[2], budget = quizAnswers[3];
  let rec = products.find(p=>p.cat!=="Prótese Capilar") || products[0];
  if(budget==="high") rec = products.find(p=>p.price>=1000&&p.cat!=="Prótese Capilar") || rec;
  else if(budget==="mid") rec = products.find(p=>p.price>=600&&p.price<1000&&p.cat!=="Prótese Capilar") || rec;
  else rec = products.find(p=>p.price<650&&p.cat!=="Prótese Capilar") || rec;
  if(occ==="tratamento") rec = products.find(p=>p.cat==="Prótese Capilar") || rec;
  else if(prio==="naturalidade") rec = products.find(p=>p.cat==="Lace Front"||p.cat==="Full Lace") || rec;
  else if(prio==="volume") rec = products.find(p=>p.cat==="Cacheada") || rec;
  const card = document.getElementById("quizResultCard");
  if(card) card.innerHTML = `
    <div style="display:flex;align-items:center;gap:1.5rem;padding:1.5rem;border:1px solid var(--gray-200);background:var(--gray-50)">
      <div style="width:80px;height:80px;background:var(--black);display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <img src="${rec.images[0]}" alt="${rec.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.innerHTML='<span style=font-size:2.5rem>${rec.emoji}</span>'">
      </div>
      <div>
        <div style="font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:.25rem">${rec.cat}</div>
        <div style="font-family:var(--font-display);font-size:1.3rem;margin-bottom:.25rem">${rec.name}</div>
        <div style="font-size:.85rem;color:var(--gray-600);margin-bottom:.75rem">${rec.desc}</div>
        <div style="display:flex;gap:.75rem">
          <button class="step-btn" style="max-width:180px;padding:8px 16px;font-size:.75rem" onclick="openProductModal(${rec.id})">Ver Produto</button>
          <button class="btn-sm" onclick="addToCart(${rec.id});toast('✨ Adicionado!')">+ Carrinho</button>
        </div>
      </div>
    </div>`;
}

/* ═══════════════ LOOKBOOK ═══════════════ */
const lookbookData = [
  {id:0,ocasiao:"trabalho",emoji:"💼",titulo:"Look Executiva",desc:"Sofisticação para o ambiente profissional",produto:3,tags:["Liso","Profissional","Elegante"]},
  {id:1,ocasiao:"festa",emoji:"✨",titulo:"Noite de Gala",desc:"Glamour e brilho para ocasiões especiais",produto:5,tags:["Full Lace","Festivo","Premium"]},
  {id:2,ocasiao:"casual",emoji:"🌿",titulo:"Domingo Relaxado",desc:"Conforto e estilo para o dia a dia",produto:1,tags:["Natural","Casual","Confortável"]},
  {id:3,ocasiao:"trabalho",emoji:"📋",titulo:"Reunião Importante",desc:"Presença marcante em qualquer reunião",produto:0,tags:["Lace Front","Profissional","Natural"]},
  {id:4,ocasiao:"festa",emoji:"🎉",titulo:"Balada & Eventos",desc:"Volume e movimento para arrasar na pista",produto:2,tags:["Cacheada","Festivo","Volume"]},
  {id:5,ocasiao:"casual",emoji:"☀️",titulo:"Passeio ao Ar Livre",desc:"Leveza e praticidade para o dia ensolarado",produto:6,tags:["Ondas","Casual","Leve"]},
  {id:6,ocasiao:"protese",emoji:"💗",titulo:"Elegância Discreta",desc:"Naturalidade absoluta para o dia a dia",produto:8,tags:["Prótese","Natural","Discreto"]},
  {id:7,ocasiao:"festa",emoji:"👑",titulo:"Casamento & Formatura",desc:"O look perfeito para o momento mais especial",produto:5,tags:["Full Lace","Luxo","Especial"]},
  {id:8,ocasiao:"casual",emoji:"🛍️",titulo:"Dia de Compras",desc:"Estilo despojado para qualquer saída",produto:4,tags:["Bob","Casual","Moderno"]},
];

let lookbookActiveFilter = "todos";

function lookbookFilter(f){
  lookbookActiveFilter = f;
  document.querySelectorAll(".lookbook-filter").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById(`lf-${f}`);
  if(btn) btn.classList.add("active");
  renderLookbook(f);
}

function renderLookbook(f){
  const grid = document.getElementById("lookbookGrid");
  if(!grid) return;
  const items = f==="todos" ? lookbookData : lookbookData.filter(l=>l.ocasiao===f);
  grid.innerHTML = items.map(l => {
    const prod = products.find(p=>p.id===l.produto) || products[0];
    return `<div class="lookbook-card" onclick="openProductModal(${prod.id})">
      <div class="lookbook-img">
        <img src="${prod.images[0]}" alt="${l.titulo}" onerror="this.parentElement.innerHTML='<span style=font-size:4rem;display:flex;align-items:center;justify-content:center;height:100%;background:var(--gray-50)>${l.emoji}</span>'">
        <div class="lookbook-overlay">
          <div style="color:var(--white);font-family:var(--font-display);font-size:1.2rem">${l.titulo}</div>
          <div style="color:var(--gray-300);font-size:.78rem;margin:.25rem 0 .75rem">${l.desc}</div>
          <button class="btn-sm" style="background:var(--white);color:var(--black);border:none" onclick="event.stopPropagation();openProductModal(${prod.id})">Ver Produto</button>
        </div>
      </div>
      <div class="lookbook-info">
        <div style="font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gold)">${l.ocasiao}</div>
        <div style="font-family:var(--font-display);font-size:1.05rem;margin:.2rem 0">${l.titulo}</div>
        <div style="display:flex;gap:.3rem;flex-wrap:wrap;margin-top:.4rem">${l.tags.map(t=>`<span style="font-size:.62rem;padding:2px 8px;background:var(--gray-100);border-radius:99px">${t}</span>`).join("")}</div>
      </div>
    </div>`;
  }).join("");
  // Também renderiza preview na home
  const preview = document.getElementById("lookbookPreview");
  if(preview) preview.innerHTML = lookbookData.slice(0,3).map(l=>{
    const prod = products.find(p=>p.id===l.produto)||products[0];
    return `<div class="lookbook-card" onclick="openProductModal(${prod.id})">
      <div class="lookbook-img">
        <img src="${prod.images[0]}" alt="${l.titulo}" onerror="this.parentElement.innerHTML='<span style=font-size:3rem;display:flex;align-items:center;justify-content:center;height:100%;background:var(--gray-50)>${l.emoji}</span>'">
        <div class="lookbook-overlay">
          <div style="color:var(--white);font-family:var(--font-display);font-size:1.1rem">${l.titulo}</div>
          <button class="btn-sm" style="background:var(--white);color:var(--black);border:none;margin-top:.5rem" onclick="event.stopPropagation();goPage('inspire');showInspireTab('lookbook')">Ver Lookbook</button>
        </div>
      </div>
      <div class="lookbook-info">
        <div style="font-family:var(--font-display);font-size:1rem">${l.titulo}</div>
        <div style="font-size:.75rem;color:var(--gray-600)">${l.desc}</div>
      </div>
    </div>`;
  }).join("");
}

