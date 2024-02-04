document.addEventListener('DOMContentLoaded', function () {
    // Recuperar datos del pedido almacenados en localStorage
    const pedidoGuardado = localStorage.getItem('pedido');

    if (pedidoGuardado) {
        const pedido = JSON.parse(pedidoGuardado);
        mostrarPedido(pedido);
    }
});

function mostrarPedido(pedido) {
    // Mostrar productos y total en la página de pedido.html
    const detallePedido = document.getElementById('detalle-pedido');
    const totalFactura = document.getElementById('total-factura');

    // Mostrar productos seleccionados
    const productosHTML = pedido.productos.map(producto => `<li>${producto.productName} - $${producto.productPrice.toFixed(2)}</li>`).join('');
    detallePedido.innerHTML = `<ul>${productosHTML}</ul>`;

    // Mostrar total de la factura
    totalFactura.textContent = `Total: $${pedido.total}`;
}
